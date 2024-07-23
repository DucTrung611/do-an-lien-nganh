const FinancialData = require('../models/bctc');

// Lấy dữ liệu tài chính theo mã chứng khoán
exports.getFinancialDataBySymbol = async (req, res) => {
    try {
        const { symbol } = req.body;
        const financialData = await FinancialData.findOne({ symbol });

        if (!financialData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.json(financialData);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Lấy tất cả dữ liệu tài chính
exports.getAllFinancialData = async (req, res) => {
    try {
        const data = await FinancialData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

