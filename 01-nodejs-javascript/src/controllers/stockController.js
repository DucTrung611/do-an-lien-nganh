const stockModel = require("../models/stocks");
const create = async (req, res) => {
    try {
        const { stt, ma, giahientai, giangungmua, giacannhacban, cotuc, suatcotuc, tangtruonglnkyvong, muctangtruongtonghangnam, ghichu } = req.body
        const newStock = new stockModel({
            stt, ma, giahientai, giangungmua, giacannhacban, cotuc, suatcotuc, tangtruonglnkyvong, muctangtruongtonghangnam, ghichu
        })
        await newStock.save()
        // console.log("req.body", req.body)

        res.status(200).json({ success: true, message: "stock Created Successfully.", newStock })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Interl server eror" })
    }
}

///////Read api
const get = async (req, res) => {

    try {
        const stocks = await stockModel.find()
        if (!stocks) {
            return res.status(404).json({ success: false })
        }

        res.status(200).json({ stocks })
    } catch (error) {
        console.log(error)

        res.status(500).json({ success: false })
    }

}

////////update stock api
const updateStock = async (req, res) => {
    try {
        // let stockId = req.params.id;

        let { _id, stt, ma, giahientai, giangungmua, giacannhacban, cotuc, suatcotuc, tangtruonglnkyvong, muctangtruongtonghangnam, ghichu } = req.body
        // console.log(">>>req.body:",)

        // Validate the request body here if necessary
        // if (!stockId) {
        //     return res.status(400).json({ success: false, message: 'Stock ID is required' });
        // }

        // const updatedStock = await stockModel.findByIdAndUpdate(stockId, req.body, { new: true });

        let stock = await stockModel.updateOne({ _id: _id }, { stt, ma, giahientai, giangungmua, giacannhacban, cotuc, suatcotuc, tangtruonglnkyvong, muctangtruongtonghangnam, ghichu })
        if (!stock) {
            return res.status(404).json({ success: false, message: 'Stock not found' });
        }
        res.status(200).json({ success: true, message: 'Stock updated successfully', stock });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};



// delet user ap
const Delete = async (req, res) => {
    try {
        const stockId = req.params.id
        const deleteStock = await stockModel.findByIdAndDelete(stockId)
        if (!deleteStock) {
            return res.status(404).json({ success: false, message: 'user Not found' });
        }
        res.status(200).json({ success: true, message: 'user Deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

module.exports = { create, get, updateStock, Delete }