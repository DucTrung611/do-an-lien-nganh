import { CrownOutlined } from '@ant-design/icons';
import { notification, Result } from 'antd';
import { getFinancialDataBySymbol } from '../util/api';
import { useEffect, useState } from 'react';

const HomePage = () => {


    const [dataSource, setDataSource] = useState({})

    useEffect(() => {
        const fetchDataStock = async () => {
            const res = await getFinancialDataBySymbol("HPG");
            console.log("res: ", res.data)
            if (res) {
                setDataSource(res.data);
            }
        }
        fetchDataStock();
    }, [])

    console.log("dataSource: ", dataSource)
    return (
        <div style={{ padding: 20 }}>
            <Result
                icon={<CrownOutlined />}
                title="Welcome to my website"
            />
        </div>
    )
}

export default HomePage;
