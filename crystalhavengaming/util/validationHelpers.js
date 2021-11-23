const { dutySchema, jobSchema, botSchema, noticeMeSchema, eventSchema, eventEditSchema } = require("./validationSchemas");
const CustomError = require("./CustomError");

// Complete
module.exports.validateDuty = (req, res, next) => {
    const { error } = dutySchema.validate(req.body);
    if (error) {
        const message = error.details.map((element) => element.message).join(",");
        req.flash("error", message)
        return res.redirect('back')
    } else {
        next();
    }
}
// Complete
module.exports.validateBot = (req, res, next) => {
    const { error } = botSchema.validate(req.body);
    if (error) {
        const message = error.details.map((element) => element.message).join(",");
        req.flash("error", message)
        return res.redirect('back')
    } else {
        next();
    }
}

// Complete
module.exports.validateNoticeMe = (req, res, next) => {
    const { error } = noticeMeSchema.validate(req.body);
    if (error) {
        const message = error.details.map((element) => element.message).join(",");
        req.flash("error", message)
        return res.redirect('back')
    } else {
        next();
    }
}

// Complete
module.exports.validateJob = (req, res, next) => {
    const { error } = jobSchema.validate(req.body);
    if (error) {
        const message = error.details.map((element) => element.message).join(",");
        req.flash("error", message)
        return res.redirect('back')
    } else {
        next();
    }
}

module.exports.validateEvent = (req, res, next) => {
    const { error } = eventSchema.validate(req.body);
    if (error) {
        const message = error.details.map((element) => element.message).join(",");
        req.flash("error", message)
        return res.redirect('back')
    } else {
        next();
    }
}

module.exports.validateEventEdit = (req, res, next) => {
    const { error } = eventEditSchema.validate(req.body);
    if (error) {
        const message = error.details.map((element) => element.message).join(",");
        req.flash("error", message)
        return res.redirect('back')
    } else {
        next();
    }
}

