// models/financialDataModel.js
const mongoose = require('mongoose');

const financialDataSchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    data: {
        priceToEarning: { type: Map, of: Number },
        priceToBook: { type: Map, of: Number },
        dividend: { type: Map, of: Number },
        roe: { type: Map, of: Number },
        roa: { type: Map, of: Number },
        earningPerShare: { type: Map, of: Number },
        bookValuePerShare: { type: Map, of: Number },
        interestMargin: { type: Map, of: Number },
        nonInterestOnToi: { type: Map, of: Number },
        badDebtPercentage: { type: Map, of: Number },
        provisionOnBadDebt: { type: Map, of: Number },
        costOfFinancing: { type: Map, of: Number },
        equityOnTotalAsset: { type: Map, of: Number },
        equityOnLoan: { type: Map, of: Number },
        costToIncome: { type: Map, of: Number },
        equityOnLiability: { type: Map, of: Number },
        epsChange: { type: Map, of: Number },
        assetOnEquity: { type: Map, of: Number },
        preProvisionOnToi: { type: Map, of: Number },
        postTaxOnToi: { type: Map, of: Number },
        loanOnEarnAsset: { type: Map, of: Number },
        loanOnAsset: { type: Map, of: Number },
        loanOnDeposit: { type: Map, of: Number },
        depositOnEarnAsset: { type: Map, of: Number },
        badDebtOnAsset: { type: Map, of: Number },
        liquidityOnLiability: { type: Map, of: Number },
        payableOnEquity: { type: Map, of: Number },
        cancelDebt: { type: Map, of: Number },
        bookValuePerShareChange: { type: Map, of: Number },
        creditGrowth: { type: Map, of: Number }
    }
}, { collection: 'bctc' });

module.exports = mongoose.model('FinancialData', financialDataSchema);
