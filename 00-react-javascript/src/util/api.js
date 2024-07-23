import axios from "./axios.customize";

const createUserApi = (name, email, password) => {
    const URL_API = "/v1/api/register"
    const data = {
        name, email, password
    }
    return axios.post(URL_API, data)
}

const loginApi = (email, password) => {
    const URL_API = "/v1/api/login"
    const data = {
        name, email, password
    }
    return axios.post(URL_API, data)
}

const getUserAPI = () => {
    const URL_API = "/v1/api/user"

    return axios.get(URL_API)
}

const getStockAPI = () => {
    const URL_API = "/v1/api/get"

    return axios.get(URL_API)
}

const updateUserAPI = (_id, fullName, phone,) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone,
    }
    return axios.put(URL_BACKEND, data);
}

const updateStockAPI = (_id, stt,
    ma,
    giahientai,
    giangungmua,
    giacannhacban,
    cotuc,
    suatcotuc,
    tangtruonglnkyvong,
    muctangtruongtonghangnam,
    ghichu) => {
    const URL_BACKEND = "/v1/api/update";
    const data = {
        _id: _id,
        stt: stt,
        ma: ma,
        giahientai: giahientai,
        giangungmua: giangungmua,
        giacannhacban: giacannhacban,
        cotuc: cotuc,
        suatcotuc: suatcotuc,
        tangtruonglnkyvong: tangtruonglnkyvong,
        muctangtruongtonghangnam: muctangtruongtonghangnam,
        ghichu: ghichu,
    }
    return axios.put(URL_BACKEND, data);
}

const getFinancialDataBySymbol = (symbol) => {
    const URL_BACKEND = "/v1/api/getdata";
    const data = {
        symbol: symbol,
    }
    return axios.post(URL_BACKEND, data);
}
const getTimeSeriesDataBySymbol = (symbol) => {
    const URL_BACKEND = "/v1/api/getdata2";
    const data = {
        symbol: symbol,
    }
    return axios.post(URL_BACKEND, data);
}
export { createUserApi, loginApi, getUserAPI, getStockAPI, updateUserAPI, updateStockAPI, getFinancialDataBySymbol, getTimeSeriesDataBySymbol }