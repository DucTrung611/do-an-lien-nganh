import { notification, Table } from 'antd';
import { useEffect, useState } from 'react';
import { getUserAPI } from '../util/api';
const UserPage = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserAPI();
            console.log(">>>Check res: ", res)
            if (!res?.message) {
                setDataSource(res);
            } else {
                notification.error({
                    message: "unauthorized",
                    description: res.message
                })
            }
        }
        fetchUser();
    }, [])



    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },

    ];


    return (
        <div style={{ padding: '30px' }}>
            <Table dataSource={dataSource} columns={columns} bordered rowKey={"_id"} />
        </div>
    )
}

export default UserPage;