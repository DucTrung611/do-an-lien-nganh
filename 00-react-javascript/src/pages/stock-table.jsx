import { notification, Table } from "antd";
import { getStockAPI } from "../util/api";
import { useContext, useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import UpdateStockModal from "./update.stock";
import { AuthContext } from '../components/context/auth.context';
import { useNavigate } from "react-router-dom";

const StockPage = () => {
    const navigate = useNavigate();
    const [dataSource, setDataSource] = useState([])
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const { auth, setAuth } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    useEffect(() => {
        const fetchStock = async () => {
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
        fetchStock();
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',

        },
        {
            title: 'STT',
            dataIndex: 'stt1',
            render: (text, record, index) => {
                return (currentPage - 1) * pageSize + index + 1;
            }
        },
        {
            title: 'Mã',
            dataIndex: 'ma',
            render: (_, record) => {
                return (
                    <a
                        // href='${record.ma}'
                        onClick={() => {
                            navigate(record.ma)
                            setDataDetail(record);
                            setIsDetailOpen(true);
                        }}
                    >{record.ma}</a>

                )
            }
        },
        {
            title: 'Giá hiện tại',
            dataIndex: 'giahientai',
        },
        {
            title: 'Giá ngừng mua',
            dataIndex: 'giangungmua',
        },
        {
            title: 'Giá cân nhắc bán',
            dataIndex: 'giacannhacban',
        },
        {
            title: 'Cổ tức (k/cp)',
            dataIndex: 'cotuc',
        },
        {
            title: 'Suất cổ tức(cổ tức/ giá)',
            dataIndex: 'suatcotuc',
        },
        {
            title: 'Tăng trưởng LN kỳ vọng 3-5 năm',
            dataIndex: 'tangtruonglnkyvong',
        },
        {
            title: 'Mức tăng trưởng tổng hàng năm(kỳ vọng)',
            dataIndex: 'muctangtruongtonghangnam',
        },
        {
            title: 'Ghi chú',
            dataIndex: 'ghichu',
        },
        ...((auth.user.role === "ADMIN" || auth.user.role === "EXPERT") ? [
            {
                title: 'Actions',
                // dataIndex: 'action',
                render: (_, record) => (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                            style={{ cursor: "pointer", color: "orange" }} />

                    </div>
                ),

            },


        ] : [
            {
                title: 'Actions',
                // dataIndex: 'action',
                render: (_, record) => (
                    <div style={{ display: "none", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                            style={{ cursor: "pointer", color: "orange" }} />

                    </div>
                ),

            },
        ]),

    ];
    return (
        <div> <Table dataSource={dataSource} columns={columns} bordered rowKey={"_id"} pagination={{ current: currentPage, pageSize: pageSize }} onChange={handleTableChange}

        />
            <UpdateStockModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </div>
    )
}

export default StockPage