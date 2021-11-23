const express = require("express");
const router = express.Router();
const Event = require("../models/events.js");
const Duty = require("../models/duties");
const XIVJobs = require("../models/xivJobs")
const catchAsyncErrors = require("../util/catchAsyncErrors");
const { validateEvent, validateEventEdit } = require("../util/validationHelpers");
const { cleanup, descriptionTags } = require("../util/cleanUpHtml");
const itemsPerPage = 9;

// GET currrently running events /events
router.get("/", catchAsyncErrors(async (req, res, next) => {

    const currentDate = new Date().toISOString().slice(0, 10);
    let noData = "";
    const page = Number(req.query.page) || 1;
    req.session.currentPage = req.headers.referer;

    // get the count of records
    const totalItems = await Event.count()
    const results = await Event.findAll({
        where:
        {
            date: {
                [Op.gte]: currentDate
            }, archived: {
                [Op.ne]: true
            }
        },
        include: [Duty],
        offset: (page - 1) * itemsPerPage,
        limit: itemsPerPage
    })

    if (!results.length) {
        noData = "<p>No Events are currently scheduled. If you would like to lead an event, please contact leadership to get started!</p> </p>If you are already set up for leading events, click below to select a duty and schedule something awesome!</p>"
    }
    console.log(results)

    const imagePath = "/uploads/dutyImages/";
    res.render("events/index", {
        imagePath,
        events: results,
        noData: noData,
        totalItems: totalItems,
        currentPage: page,
        hasNextPage: itemsPerPage * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / itemsPerPage)
    });

}));

// GET /events/new/:dutyId (display form)
router.get("/new/:dutyId", catchAsyncErrors(async (req, res, next) => {
    const { dutyId } = req.params
    const duty = await Duty.findByPk(dutyId)
    const jobs = await XIVJobs.findAll();
    res.render("events/new", { title: "Schedule Event", duty: duty, jobs: jobs, dutyId: dutyId })
}))

//,
// POST /events (create)
router.post('/', validateEvent, catchAsyncErrors(async (req, res, next) => {

    const { event, simpleJob, advancedJob } = req.body;
    let cleanedAdvancedJobs = {};
    const dutyId = cleanup(event.dutyId);
    const leader = cleanup(event.leader);
    const name = cleanup(event.name);
    const description = descriptionTags(event.description);
    const date = cleanup(event.date);
    const hour = cleanup(event.hour);
    const autoAccept = cleanup(autoAccept.signups);
    let minutes = cleanup(event.minute);
    const morningOrNight = cleanup(event.morningOrNight.toLowerCase());
    if (minutes.length === 1) {
        minutes = `0${event.minute}`
    }
    console.log(signups)
    let time = `${hour}:${minutes}`

    // Sanitize the simple jobs
    const cleanedSimpleJobs = {
        tank: cleanup(simpleJob.tank),
        heal: cleanup(simpleJob.heal),
        dps: cleanup(simpleJob.dps),
        limited: cleanup(simpleJob.limited)
    }

    // Sanitize the advanced jobs.
    for (let item in advancedJob) {
        let next = cleanup(item)
        cleanedAdvancedJobs[next] = cleanup(advancedJob[item])
    }

    let requestedJobs;
    event.simpleForm === '1' ? requestedJobs = cleanedSimpleJobs : requestedJobs = cleanedAdvancedJobs
    //create the new event
    await Event.create({
        leader: leader,
        scheduler: res.locals.currentUser.username,
        name: name,
        date: date,
        time: time,
        morningOrNight: morningOrNight,
        description: description,
        requestedJobs: requestedJobs,
        dutyId: dutyId,
        autoAccept: autoAccept
    })

    req.flash("success", "Your event was added!");
    res.redirect("/events")

}))

// GET /events/:id (show)
router.get("/:id", catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    let [results] = await Event.findAll(
        {
            where: {
                id: id
            },
            include: [Duty]
        })
    const imagePath = "/uploads/dutyImages/";
    res.render("events/show", { event: results, imagePath })
}));

// GET /events/:id/edit (display form)
router.get("/:id/edit", catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const scheduledEvent = await Event.findByPk(id, { include: [Duty] })
    const jobs = await XIV_Job.findAll();
    let hour, minute;
    let time = scheduledEvent.time.split(":");
    hour = time[0];
    minute = time[1];

    res.render("events/edit", { event: scheduledEvent, hour: hour, minute: minute, jobs: jobs })
}))

// PUT /events/:id
router.put("/:id", validateEventEdit, catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const { event, simpleJob, advancedJob } = req.body;
    let cleanedAdvancedJobs = {};
    const dutyId = cleanup(event.dutyId);
    const leader = cleanup(event.leader);
    const name = cleanup(event.name);
    const description = descriptionTags(event.description);
    const hour = cleanup(event.hour);
    let minutes = cleanup(event.minute);
    const autoAccept = cleanup(event.autoAccept);
    const morningOrNight = cleanup(event.morningOrNight.toLowerCase());

    if (minutes.length === 1) {
        minutes = `0${event.minute}`;
    }
    let time = `${hour}:${minutes}`;
    let date;
    event.date === "" ? date = undefined : date = cleanup(event.date);

    // Sanitize the simple jobs
    const cleanedSimpleJobs = {
        tank: cleanup(simpleJob.tank),
        heal: cleanup(simpleJob.heal),
        dps: cleanup(simpleJob.dps),
        limited: cleanup(simpleJob.limited)
    }

    // Sanitize the advanced jobs.
    for (let item in advancedJob) {
        let next = cleanup(item)
        cleanedAdvancedJobs[next] = cleanup(advancedJob[item])
    }

    let requestedJobs;
    event.simpleForm === '1' ? requestedJobs = cleanedSimpleJobs : requestedJobs = cleanedAdvancedJobs

    Event.update({
        leader: leader,
        scheduler: res.locals.currentUser.username,
        name: name,
        date: date,
        time: time,
        morningOrNight: morningOrNight,
        description: description,
        requestedJobs: requestedJobs,
        dutyId: dutyId,
        autoAccept: autoAccept
    }, { where: { id: id } })
    req.flash("success", "Successfully saved your changes!")
    res.redirect(`/events/${id}`);
}))


// DELETE /events/:id (delete)
router.delete("/:id", catchAsyncErrors(async (req, res, next) => {

    const { id } = req.params;
    let { cancellationReason } = req.body;
    if (cancellationReason.length > 0) {
        cancellationReason = cleanup(cancellationReason);
    }


    await Event.update({ cancelled: true, cancellationReason: cancellationReason, updated_by: res.locals.currentUser.username }, {
        where: {
            id: id
        }
    })


    req.flash("success", "Successfully cancelled the event.");
    res.redirect("/events")

}));


module.exports = router;
