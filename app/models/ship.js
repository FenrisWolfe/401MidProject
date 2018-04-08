'use strict';

const mongoose = require('mongoose');

const shipSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  crew: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Crew' }]
});

module.exports = mongoose.model('Ship', shipSchema);
