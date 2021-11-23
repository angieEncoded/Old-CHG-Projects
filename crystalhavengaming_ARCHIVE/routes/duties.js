const express = require("express");
const router = express.Router();
const Duty = require("../models/duties");
const catchAsyncErrors = require("../util/catchAsyncErrors");
const { validateDuty } = require("../util/validationHelpers")
const fs = require('fs');
const logger = require('../util/logger')
const multer = require('multer');
const itemsPerPage = 9;
const { cleanup } = require("../util/cleanUpHtml");
const storage = multer.diskStorage({
  destination: 'public/uploads/dutyImages/',
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


// GET /duties
router.get("/", catchAsyncErrors(async (req, res, next) => {

  const page = Number(req.query.page) || 1;
  req.session.currentPage = req.headers.referer;

  // get the count of records
  const [[recordsCount]] = await Duty.count();
  const [duties] = await Duty.getAllDutiesPagination(itemsPerPage, (page - 1) * itemsPerPage);
  const totalItems = recordsCount.numberOfRecords;
  console.log(recordsCount)
  console.log(duties)

  if (!duties.length) {
    req.flash("warning", "I don't see any duties! Please add one.");
    return res.redirect("/duties/new");
  }

  const imagePath = "/uploads/dutyImages/";
  res.render("duties/index", {
    imagePath,
    duties: duties,
    totalItems: totalItems,
    currentPage: page,
    hasNextPage: itemsPerPage * page < totalItems,
    hasPreviousPage: page > 1,
    nextPage: page + 1,
    previousPage: page - 1,
    lastPage: Math.ceil(totalItems / itemsPerPage)
  });


}));

// GET /duties/new (display form)
router.get("/new", (req, res, next) => {
  res.render("duties/new");
});

// // POST /duties (create)
// router.post("/", upload.single('duty[image]'), validateDuty, catchAsyncErrors(async (req, res, next) => {
//   if (!req.file) {
//     req.flash('error', `The file could not be uploaded or it wasn't an allowed type. Please verify you selected an image file.`);
//     return res.redirect('back');
//   }

//   // sanitize inputs - stripping all tags
//   const details = req.body.duty;
//   const name = cleanup(details.name);
//   const tank = cleanup(details.tank);
//   const heal = cleanup(details.heal);
//   const dps = cleanup(details.dps);
//   const limited = cleanup(details.limited);
//   const description = cleanup(details.description);
//   const contentDifficulty = cleanup(details.contentDifficulty);
//   const xpac = cleanup(details.xpac)
//   const imageName = cleanup(req.file.filename);
//   const numberOfPlayers = cleanup(details.numberOfPlayers)
//   const defaultRoles = {
//     'tank': tank,
//     'heal': heal,
//     'dps': dps,
//     'limited': limited
//   }

//   await Duty.create({
//     name: name,
//     description: description,
//     contentDifficulty: contentDifficulty,
//     numberOfPlayers: numberOfPlayers,
//     defaultRoles: defaultRoles,
//     image: imageName,
//     xpac: xpac,
//     addedBy: res.locals.currentUser.username
//   });

//   req.flash('success', 'Succesfully created the duty');
//   res.redirect(`/duties`);

// }));

// // GET /administration/duties/:id/edit (display form)
// router.get('/:id/edit', catchAsyncErrors(async (req, res, next) => {
//   const [results] = await Duty.findAll({
//     where: {
//       id: req.params.id
//     }
//   })
//   res.render("duties/edit", { duty: results })
// }))


// // PUT /administration/duties/:id
// router.put("/:id", upload.single('duty[image]'), validateDuty, catchAsyncErrors(async (req, res, next) => {


//   const { id } = req.params;
//   const details = req.body.duty;

//   // sanitize inputs - stripping all tags
//   const name = cleanup(details.name);
//   const tank = cleanup(details.tank);
//   const heal = cleanup(details.heal);
//   const dps = cleanup(details.dps);
//   const limited = cleanup(details.limited);
//   const description = cleanup(details.description);
//   const contentDifficulty = cleanup(details.contentDifficulty);
//   const xpac = cleanup(details.xpac)
//   const numberOfPlayers = cleanup(details.numberOfPlayers)
//   const defaultRoles = {
//     'tank': tank,
//     'heal': heal,
//     'dps': dps,
//     'limited': limited
//   }


//   if (!req.file) {
//     await Duty.update({
//       name: name,
//       description: description,
//       contentDifficulty: contentDifficulty,
//       numberOfPlayers: numberOfPlayers,
//       defaultRoles: defaultRoles,
//       xpac: xpac,
//       updatedBy: res.locals.currentUser.username
//     },
//       { where: { id: id } })
//     req.flash('success', 'Succesfully updated the duty');
//     return res.redirect(`/duties`);
//   }


//   const newImage = cleanup(req.file.filename);
//   // get the current image
//   const results = await Duty.findOne({
//     attributes: ['image'],
//     where: { id: id }
//   })

//   fs.unlink(`public/uploads/dutyImages/${results.image}`, error => {
//     if (error) {
//       logger.log({ level: 'info', message: "Something happened when deleting the file.", stack: error.stack || "No stack trace" })
//     }
//   })

//   await Duty.update({
//     name: name,
//     description: description,
//     contentDifficulty: contentDifficulty,
//     numberOfPlayers: numberOfPlayers,
//     defaultRoles: defaultRoles,
//     image: newImage,
//     xpac: xpac,
//     updatedBy: res.locals.currentUser.username
//   },
//     { where: { id: id } })



//   req.flash('success', 'Succesfully updated the duty');
//   res.redirect(`/duties`);
// }))


// // DELETE /administration/duties/:id (delete)
// router.delete('/:id', catchAsyncErrors(async (req, res, next) => {
//   const { id } = req.params;
//   await Duty.update({ archived: true, updated_by: res.locals.currentUser.username }, {
//     where: {
//       id: id
//     }
//   })
//   req.flash('success', 'Successfully archived the duty')
//   res.redirect("/duties");
// }));


module.exports = router;
