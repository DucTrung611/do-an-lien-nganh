import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { getStockAPI, updateStockAPI, updateUserAPI } from "../util/api";

const UpdateStockModal = (props) => {
    const [id, setId] = useState("");
    // const [fullName, setFullName] = useState("");
    // const [phone, setPhone] = useState("");

    const [stt, setStt] = useState("");
    const [ma, setMa] = useState("");
    const [giahientai, setGiahientai] = useState("");
    const [giangungmua, setGiangungmua] = useState("");
    const [giacannhacban, setGiacannhacban] = useState("");
    const [cotuc, setCotuc] = useState("");
    const [suatcotuc, setSuatcotuc] = useState("");
    const [tangtruonglnkyvong, setTangtruonglnkyvong] = useState("");
    const [muctangtruongtonghangnam, setMuctangtruongtonghangnam] = useState("");
    const [ghichu, setGhichu] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen,
        dataUpdate, setDataUpdate,

    } = props;

    //next dataUpdate != prev dataUpdate
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            // setFullName(dataUpdate.fullName);
            // setPhone(dataUpdate.phone);

            setStt(dataUpdate.stt)
            setMa(dataUpdate.ma);
            setGiahientai(dataUpdate.giahientai);
            setGiangungmua(dataUpdate.giangungmua);
            setGiacannhacban(dataUpdate.giacannhacban);
            setCotuc(dataUpdate.cotuc);
            setSuatcotuc(dataUpdate.suatcotuc);
            setTangtruonglnkyvong(dataUpdate.tangtruonglnkyvong);
            setMuctangtruongtonghangnam(dataUpdate.muctangtruongtonghangnam);
            setGhichu(dataUpdate.ghichu);
        }
    }, [dataUpdate])
    const loadStock = async () => {
        const res = await getStockAPI();
        if (!res?.message) {
            setDataSource(res.stocks);
        } else {
            notification.error({
                message: "unauthorized",
                description: res.message
            })
        }

    }
    const handleSubmitBtn = async () => {
        const res = await updateStockAPI(
            id,
            stt,
            ma,
            giahientai,
            giangungmua,
            giacannhacban,
            cotuc,
            suatcotuc,
            tangtruonglnkyvong,
            muctangtruongtonghangnam,
            ghichu);
        console.log(">>res: ", res.data)
        if (res.success) {
            notification.success({
                message: "Update user",
                description: "Cập nhât thành công"
            })
            resetAndCloseModal();
            loadStock();
        } else {
            notification.error({
                message: "Error update user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setStt("")
        setMa("");
        setGiahientai("");
        setGiangungmua("");
        setGiacannhacban("");
        setCotuc("");
        setSuatcotuc("");
        setTangtruonglnkyvong("");
        setMuctangtruongtonghangnam("");
        setGhichu("");
        setDataUpdate(null);
        fetchStock();
    }


    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>

                <div>
                    <span>STT</span>
                    <Input
                        value={stt}
                        onChange={(event) => { setStt(event.target.value) }}
                        disabled
                    />
                </div>

                <div>
                    <span>Mã</span>
                    <Input
                        value={ma}
                        onChange={(event) => { setMa(event.target.value) }}
                        disabled
                    />
                </div>

                <div>
                    <span>Giá hiện tại</span>
                    <Input
                        value={giahientai}
                        onChange={(event) => { setGiahientai(event.target.value) }}
                        disabled
                    />
                </div>

                <div>
                    <span>Giá ngừng mua	</span>
                    <Input
                        value={giangungmua}
                        onChange={(event) => { setGiangungmua(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Giá cân nhắc bán</span>
                    <Input
                        value={giacannhacban}
                        onChange={(event) => { setGiacannhacban(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Cổ tức (k/cp)</span>
                    <Input
                        value={cotuc}
                        onChange={(event) => { setCotuc(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Suất cổ tức(cổ tức/ giá)</span>
                    <Input
                        value={suatcotuc}
                        onChange={(event) => { setSuatcotuc(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Tăng trưởng LN kỳ vọng 3-5 năm</span>
                    <Input
                        value={tangtruonglnkyvong}
                        onChange={(event) => { setTangtruonglnkyvong(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Mức tăng trưởng tổng hàng năm(kỳ vọng)</span>
                    <Input
                        value={muctangtruongtonghangnam}
                        onChange={(event) => { setMuctangtruongtonghangnam(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Ghi chú</span>
                    <Input
                        value={ghichu}
                        onChange={(event) => { setGhichu(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}


export default UpdateStockModal;