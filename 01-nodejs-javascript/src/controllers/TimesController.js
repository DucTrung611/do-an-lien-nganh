const TimeseriesData = require('../models/timeseries.js');

// Lấy dữ liệu tài chính theo mã chứng khoán
exports.getTimeSeriesDataBySymbol = async (req, res) => {
    try {
        const { symbol } = req.body;
        console.log("{ symbol }", { symbol })
        const timeSeriesData = await TimeseriesData.find({ symbol });
        console.log("timeSeriesData: ", timeSeriesData)

        if (!timeSeriesData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.json(timeSeriesData);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Lấy tất cả dữ liệu tài chính
exports.getAllTimeSeriesData = async (req, res) => {
    try {
        const data = await TimeSeriesData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};