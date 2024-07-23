import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getFinancialDataBySymbol } from '../../util/api';
import SHBFinancialChart from '../chart/SHB-chart'; // Adjust the path if needed

const SHBTable = () => {
  const [dataSource, setDataSource] = useState({});
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hardcoding the symbol value
  const symbol = "SHB";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFinancialDataBySymbol(symbol);
        if (res) {
          setDataSource(res.data);
          setChartData(res.chartData || []); // Assume res.chartData contains chart data
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [symbol]);

  // Convert JSON data to format suitable for Ant Design Table
  const years = ["2023", "2022", "2021", "2020", "2019"];
  const tableData = [];

  const metrics = [
    "Giá/Thu nhập (P/E)",
    "Giá/Sổ sách (P/B)",
    "Cổ tức",
    "Lợi nhuận trên vốn chủ sở hữu (ROE)",
    "Lợi nhuận trên tài sản (ROA)",
    "Lợi nhuận trên mỗi cổ phiếu (EPS)",
    "Giá trị sổ sách trên mỗi cổ phần",
    "Biên độ lãi suất",
    "Thu nhập không lãi trên tổng thu nhập hoạt động",
    "Tỷ lệ nợ xấu",
    "Dự phòng nợ xấu",
    "Chi phí tài chính",
    "Vốn chủ sở hữu trên tổng tài sản",
    "Vốn chủ sở hữu trên khoản vay",
    "Chi phí trên thu nhập",
    "Vốn chủ sở hữu trên nợ phải trả",
    "Thay đổi EPS",
    "Tài sản trên vốn chủ sở hữu",
    "Trước dự phòng trên tổng thu nhập hoạt động",
    "Sau thuế trên tổng thu nhập hoạt động",
    "Khoản vay trên tài sản sinh lời",
    "Khoản vay trên tài sản",
    "Khoản vay trên tiền gửi",
    "Tiền gửi trên tài sản sinh lời",
    "Nợ xấu trên tài sản",
    "Tính thanh khoản trên nợ phải trả",
    "Nợ phải trả trên vốn chủ sở hữu",
    "Xóa nợ",
    "Thay đổi giá trị sổ sách trên mỗi cổ phần",
    "Tăng trưởng tín dụng"
  ];

  const metricKeys = [
    "priceToEarning",
    "priceToBook",
    "dividend",
    "roe",
    "roa",
    "earningPerShare",
    "bookValuePerShare",
    "interestMargin",
    "nonInterestOnToi",
    "badDebtPercentage",
    "provisionOnBadDebt",
    "costOfFinancing",
    "equityOnTotalAsset",
    "equityOnLoan",
    "costToIncome",
    "equityOnLiability",
    "epsChange",
    "assetOnEquity",
    "preProvisionOnToi",
    "postTaxOnToi",
    "loanOnEarnAsset",
    "loanOnAsset",
    "loanOnDeposit",
    "depositOnEarnAsset",
    "badDebtOnAsset",
    "liquidityOnLiability",
    "payableOnEquity",
    "cancelDebt",
    "bookValuePerShareChange",
    "creditGrowth"
  ];

  if (dataSource && Object.keys(dataSource).length > 0) {
    metricKeys.forEach((key, index) => {
      const rowData = { key, metric: metrics[index] };
      years.forEach((year) => {
        rowData[year] = dataSource[key]?.[year] ?? 'N/A';
      });
      tableData.push(rowData);
    });
  }

  // Columns for the Ant Design Table
  const columns = [
    { title: 'Chỉ số tài chính', dataIndex: 'metric', key: 'metric' },
    { title: '2023', dataIndex: '2023', key: '2023' },
    { title: '2022', dataIndex: '2022', key: '2022' },
    { title: '2021', dataIndex: '2021', key: '2021' },
    { title: '2020', dataIndex: '2020', key: '2020' },
    { title: '2019', dataIndex: '2019', key: '2019' },
  ];

  return (
    <>
      <div style={styles.container}>
        <div style={styles.tableWrapper}>
          <Table columns={columns} dataSource={tableData} pagination={false} size="small" />
        </div>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>{symbol} Financial Chart</h1>
        <SHBFinancialChart symbol={symbol} />
      </div>
    </>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'flex-start', // Align items to the top
    height: '100vh', // Full viewport height
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'auto', // Enable scrolling
  },
  tableWrapper: {
    width: '80%', // Adjust the width of the table wrapper
    maxWidth: '1000px', // Maximum width of the table
    overflowX: 'auto', // Enable horizontal scrolling if needed
    overflowY: 'auto', // Enable vertical scrolling if needed
    maxHeight: '80vh', // Set the maximum height of the table wrapper
  },
};

export default SHBTable;
