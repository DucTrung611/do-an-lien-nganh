const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    stt: {
        type: Number,
    },
    ma: {
        type: String,
    },
    giahientai: {
        type: Number,
    },
    giangungmua: {
        type: Number,
    },
    giacannhacban: {
        type: Number,
    },
    cotuc: {
        type: Number,
    },
    suatcotuc: {
        type: Number,
    },
    tangtruonglnkyvong: {
        type: Number,
    },
    muctangtruongtonghangnam: {
        type: Number,
    },
    ghichu: {
        type: String
    }
}, { timestamps: true });

const stockModel = mongoose.model('stock', stockSchema);

module.exports = stockModel;