// models/financialDataModel.js
const mongoose = require('mongoose');

const TimeseriesDataSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    data: {
            time: String,
            open: Number,
            high: Number,
            low: Number,
            close: Number,
            volume: Number,
            ticker: String,
            symbol: String,
          }
}, { collection: 'TimesSeries-chart' });

module.exports = mongoose.model('TimeseriesData', TimeseriesDataSchema);