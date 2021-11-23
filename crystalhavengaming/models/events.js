const db = require("../util/database");

module.exports = class Event {

  constructor(id, duty_id, uuid, leader, scheduler, name, date, time, morning_or_night, description, quick_notes, requested_jobs, signed_up, auto_accept, cancelled, cancellation_reason, deleted, added_by, last_modified_by) {
    this.id = id;
    this.duty_id = duty_id;
    this.uuid = uuid;
    this.leader = leader;
    this.scheduler = scheduler;
    this.name = name;
    this.date = date;
    this.time = time;
    this.morning_or_night = morning_or_night;
    this.description = description;
    this.quick_notes = quick_notes;
    this.requested_jobs = requested_jobs;
    this.signed_up = signed_up;
    this.auto_accept = auto_accept;
    this.cancelled = cancelled;
    this.cancellation_reason = cancellation_reason;
    this.added_by = added_by;
    this.last_modified_by = last_modified_by;
    this.deleted = deleted;
  }



}