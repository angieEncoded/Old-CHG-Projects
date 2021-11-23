const express = require("express");
const catchAsyncErrors = require("../util/catchAsyncErrors");
const router = express.Router();
const BotStatus = require("../models/botStatus");
const itemsPerPage = 10;
const { cleanup } = require("../util/cleanUpHtml");
const { validateBot } = require("../util/validationHelpers")

// GET /botstatus
router.get("/", catchAsyncErrors(async (req, res, next) => {

    const page = Number(req.query.page) || 1;
    req.session.currentPage = req.headers.referer;

    // get the count of records
    const totalItems = await BotStatus.count()
    const results = await BotStatus.findAll({
        offset: (page - 1) * itemsPerPage,
        limit: itemsPerPage,
        order: [
            ['id', 'DESC']
        ]
    })

    res.render("merlwyb/botstatus", {
        botstatus: results,
        totalItems: totalItems,
        currentPage: page,
        hasNextPage: itemsPerPage * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / itemsPerPage)
    });
}))

// POST /botstatus
router.post("/", validateBot, catchAsyncErrors(async (req, res, next) => {
    const { status } = req.body;
    let type = cleanup(status.type.toUpperCase());
    const activity = cleanup(status.activity);

    if (type === "") {
        type = "An empty string was detected. Possibly from sanitizing script tags."
    }

    await BotStatus.create({
        type: type,
        activity: activity,
        addedBy: res.locals.currentUser.username
    })
    req.flash("success", "Successfully added the status");
    res.redirect("/botstatus")

}))


// PUT /botstatus
router.put("/:id", validateBot, catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    let type = cleanup(status.type.toUpperCase());
    const activity = cleanup(status.activity);
    if (type === "") {
        type = "An empty string was detected. Possibly from sanitizing script tags."
    }
    await BotStatus.update({
        type: type,
        activity: activity,
        updatedBy: res.locals.currentUser.username
    }, {
        where: {
            id: id
        }
    })
    req.flash("success", "Successfully updated the status");
    res.redirect("/botstatus");
}))

// DELETE
router.delete("/:id", catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    await BotStatus.destroy({ where: { id: id } });
    req.flash("success", "Successfully deleted the item.");
    res.redirect("/botstatus")
}))



module.exports = router;
