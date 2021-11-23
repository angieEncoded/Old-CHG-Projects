const express = require("express");
const catchAsyncErrors = require("../util/catchAsyncErrors");
const router = express.Router();
const xivJob = require("../models/xivJobs")
const sanitizeHtml = require("sanitize-html");
const itemsPerPage = 20;
const fs = require("fs");
const multer = require('multer');
const { cleanup } = require("../util/cleanUpHtml");
const { validateJob } = require("../util/validationHelpers")
const storage = multer.diskStorage({
    destination: 'public/images/jobs/',
});
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype === 'image/png' || file.mimetype === "image/jpeg" || file.mimetype === "image/webp" || file.mimetype === "image/svg+xml") {
            callback(null, true);
        } else {
            callback(null, false);
        }
    }
});

// GET /xivjobs (revisit with order by at some point)
router.get("/", catchAsyncErrors(async (req, res, next) => {

    const page = Number(req.query.page) || 1;
    req.session.currentPage = req.headers.referer;

    // get the count of records
    const totalItems = await xivJob.count()
    const results = await xivJob.findAll({
        where: {
            archived: false
        },
        offset: (page - 1) * itemsPerPage,
        limit: itemsPerPage,
    })

    if (!results.length) {
        results = "Nothing found";
        req.flash("warning", "No data was found, please add data.");
        return res.redirect("/xivjobs/new");
    }

    res.render("xivjobs/index", {
        jobs: results,
        totalItems: totalItems,
        currentPage: page,
        hasNextPage: itemsPerPage * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / itemsPerPage)
    });

















}))


// GET /xivjobs/new
router.get("/new", catchAsyncErrors(async (req, res, next) => {
    res.render("xivjobs/new")
}))

// POST /xivjobs
router.post("/", upload.single('job[icon]'), validateJob, catchAsyncErrors(async (req, res, next) => {

    const { job } = req.body;
    let icon, report;
    if (!req.file) {
        icon = 'crystalhavengaming.png';
        report = `There was no image detected - I'll use the default Crystal Haven Gaming image.`
    } else {
        icon = cleanup(req.file.filename);
        report = `Detected a custom image. I'll use the image you uploaded.`
    }

    const name = cleanup(job.name);
    const abbrv = cleanup(job.abbrv.toLowerCase());
    const emoji = cleanup(job.emoji);
    const type = cleanup(job.type.toLowerCase());
    const role = cleanup(job.role.toLowerCase());
    const description = sanitizeHtml(job.description);

    await xivJob.create({
        name: name,
        abbrv: abbrv,
        emoji: emoji,
        type: type,
        role: role,
        icon: icon,
        description: description,
        addedBy: res.locals.currentUser.username
    })

    req.flash('success', `Successfully added the job! ${report}`);
    res.redirect(`/xivjobs`);
}))


// GET /xivjobs/:id/edit form
router.get("/:id/edit", catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const results = await xivJob.findByPk(id);
    res.render("xivjobs/edit", { job: results })
}))

// POST /xivjobs/:id
router.put("/:id", upload.single('job[icon]'), validateJob, catchAsyncErrors(async (req, res, next) => {



    const { id } = req.params;
    const { job } = req.body;
    console.log(job.description)
    const name = cleanup(job.name);
    const abbrv = cleanup(job.abbrv.toLowerCase());
    const emoji = cleanup(job.emoji);
    const type = cleanup(job.type.toLowerCase());
    const role = cleanup(job.role.toLowerCase());
    const description = sanitizeHtml(job.description);

    console.log(description)

    if (!req.file) {
        await xivJob.update({
            name: name,
            abbrv: abbrv,
            emoji: emoji,
            type: type,
            role: role,
            description: description,
            updatedBy: res.locals.currentUser.username
        },
            { where: { id: id } })
        req.flash('success', 'Succesfully updated the job');
        return res.redirect(`/xivjobs`);
    }

    const newIcon = cleanup(req.file.filename);
    // get the current image
    const results = await xivJob.findOne({
        attributes: ['icon'],
        where: { id: id }
    })

    if (results.icon !== "crystalhavengaming.png") {
        fs.unlink(`public/images/jobs/${results.icon}`, error => {
            if (error) {
                logger.log({ level: 'info', message: "Something happened when deleting the file.", stack: error.stack || "No stack trace" })
            }
        })
    }


    await xivJob.update({
        name: name,
        abbrv: abbrv,
        emoji: emoji,
        type: type,
        role: role,
        icon: newIcon,
        description: description,
        updatedBy: res.locals.currentUser.username,
    },
        { where: { id: id } })

    req.flash('success', 'Succesfully updated the job');
    res.redirect(`/xivjobs`);
}))

router.delete("/:id", catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const results = await xivJob.findOne({
        attributes: ['icon'],
        where: { id: id }
    })

    if (results.icon !== "crystalhavengaming.png") {
        fs.unlink(`public/images/jobs/${results.icon}`, error => {
            if (error) {
                logger.log({ level: 'info', message: "Something happened when deleting the file.", stack: error.stack || "No stack trace" })
            }
        })
    }

    await xivJob.destroy({
        where: { id: id }
    })
    req.flash("success", "Successfully deleted that job");
    res.redirect("/xivjobs")
}))



module.exports = router;
