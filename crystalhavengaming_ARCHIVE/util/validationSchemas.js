const Joi = require("joi");

// complete
module.exports.dutySchema = Joi.object({
  duty: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    contentDifficulty: Joi.string().required(),
    numberOfPlayers: Joi.number().required().min(4).max(56),
    tank: Joi.number().required().max(56),
    heal: Joi.number().required().max(56),
    dps: Joi.number().required().max(56),
    limited: Joi.number().required().max(56),
    xpac: Joi.string().required(),
  }).required(),
});

// Complete
module.exports.botSchema = Joi.object({
  status: Joi.object({
    type: Joi.string().required(),
    activity: Joi.string().required()
  }).required(),
  _csrf: Joi.string().required()
})

// Complete
module.exports.noticeMeSchema = Joi.object({
  noticeme: Joi.object({
    reply: Joi.string().required(),
  }).required(),
  _csrf: Joi.string().required()
})

// Complete
module.exports.jobSchema = Joi.object({
  job: Joi.object({
    name: Joi.string().required(),
    abbrv: Joi.string().required(),
    emoji: Joi.string().required(),
    type: Joi.string().required(),
    role: Joi.string().required(),
    description: Joi.string().allow('')
  })
})

module.exports.eventSchema = Joi.object({
  event: Joi.object({
    leader: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    date: Joi.string().required(),
    hour: Joi.string().required(),
    minute: Joi.string().required(),
    morningOrNight: Joi.string().required(),
    dutyId: Joi.string().required(),
    simpleForm: Joi.string().required(),
    autoAccept: Joi.string().required()
  }),
  simpleJob: Joi.object({
    tank: Joi.number().max(56),
    heal: Joi.number().max(56),
    dps: Joi.number().max(56),
    limited: Joi.number().max(56),
  }).optional(),
  advancedJob: Joi.object(),
  _csrf: Joi.string().required()
})

module.exports.eventEditSchema = Joi.object({
  event: Joi.object({
    leader: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    date: Joi.string().allow(''),
    hour: Joi.string().required(),
    minute: Joi.string().required(),
    morningOrNight: Joi.string().required(),
    dutyId: Joi.string().required(),
    simpleForm: Joi.string().required(),
    autoAccept: Joi.string().required()
  }),
  simpleJob: Joi.object({
    tank: Joi.number().max(56),
    heal: Joi.number().max(56),
    dps: Joi.number().max(56),
    limited: Joi.number().max(56),
  }).optional(),
  advancedJob: Joi.object().optional(),
  _csrf: Joi.string().required()
})



