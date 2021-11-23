const express = require("express");
const catchAsyncErrors = require("../util/catchAsyncErrors");
const router = express.Router();
const noticeMe = require("../models/noticeMe");
const NoticeMe = require("../models/noticeMe");
const itemsPerPage = 10;
const { cleanup } = require("../util/cleanUpHtml");
const { validateNoticeMe } = require("../util/validationHelpers");

// GET /noticeme
router.get("/", catchAsyncErrors(async (req, res, next) => {

    const page = Number(req.query.page) || 1;
    req.session.currentPage = req.headers.referer;

    // get the count of records
    const totalItems = await noticeMe.count()
    const results = await noticeMe.findAll({
        offset: (page - 1) * itemsPerPage,
        limit: itemsPerPage,
        order: [['id', 'DESC']]
    })

    res.render("merlwyb/noticeme", {
        noticemes: results,
        totalItems: totalItems,
        currentPage: page,
        hasNextPage: itemsPerPage * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / itemsPerPage)
    });
}))

// POST /noticeme
router.post("/", validateNoticeMe, catchAsyncErrors(async (req, res, next) => {
    const { noticeme } = req.body;
    let reply = cleanup(noticeme.reply)
    if (reply === "") {
        reply = "An empty string was detected. Possibly from sanitizing script tags."
    }
    await noticeMe.create({
        reply: reply,
        addedBy: res.locals.currentUser.username
    })
    req.flash("success", "Successfully added the new statement");
    res.redirect("/noticeme")

}))


// PUT /noticeme
router.put("/:id", validateNoticeMe, catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const { noticeme } = req.body;

    let reply = cleanup(noticeme.reply);
    if (reply === "") {
        reply = "An empty string was detected. Possibly from sanitizing script tags."
    }

    await noticeMe.update({
        reply: reply,
        updatedBy: res.locals.currentUser.username
    }, {
        where: {
            id: id
        }
    })
    req.flash("success", "Successfully updated the status");
    res.redirect("/noticeme");
}))

// DELETE
router.delete("/:id", catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    await NoticeMe.destroy({ where: { id: id } });
    req.flash("success", "Successfully deleted the item.");
    res.redirect("/noticeme")
}))



module.exports = router;
