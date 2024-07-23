import json
import pandas as pd
from vnstock import stock_historical_data
from datetime import datetime, timedelta
from pymongo import MongoClient
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Step 1: Connect to MongoDB
try:
    client = MongoClient('mongodb+srv://DoAnLienNganh:GaxmRzJmhsL1Nm8n@cluster0.rheq0an.mongodb.net/')
    db = client['jwtnodejs']  # replace with your database name
    collection = db['TimesSeries']  # replace with your collection name
    logging.info("Connected to MongoDB successfully.")
except Exception as e:
    logging.error(f"Failed to connect to MongoDB: {e}")
    raise

# Xóa toàn bộ dữ liệu cũ trong collection
try:
    collection.delete_many({})
    logging.info("Deleted old data from MongoDB.")
except Exception as e:
    logging.error(f"Failed to delete old data from MongoDB: {e}")
    raise

# Danh sách các mã cổ phiếu
symbols = ["ACB", "BCM", "BID", "BVH", "CTG", "FPT", "GAS", "GVR", "HDB", "HPG", "MBB", "MSN", "MWG", "PLX", "POW", "SAB", "SHB", "SSB", "SSI", "STB", "TCB", "TPB", "VCB", "VHM", "VIB", "VIC", "VJC", "VNM", "VPB", "VRE"]
start_date = (datetime.today() - timedelta(days=2)).strftime('%Y-%m-%d')
end_date = datetime.today().strftime('%Y-%m-%d')
interval = "1D"
data_type = 'stock'

# Tạo dictionary để lưu dữ liệu
data = {}

# Lấy dữ liệu cho từng mã cổ phiếu và thêm vào dictionary
for symbol in symbols:
    try:
        df = stock_historical_data(symbol, start_date, end_date, interval, data_type)
        if df.empty:
            logging.warning(f"No data found for symbol: {symbol}")
            continue
        
        # Chuyển đổi cột thời gian sang chuỗi
        df['time'] = df['time'].astype(str)
        
        # Thêm dữ liệu vào dictionary với key là mã cổ phiếu
        data[symbol] = df.to_dict(orient='records')
    except Exception as e:
        logging.error(f"Failed to fetch data for symbol {symbol}: {e}")

# Lưu dữ liệu vào file JSON
# output_file = 'TimesSeries.json'  # Tên của file JSON bạn muốn xuất ra
# with open(output_file, 'w') as f:
#     json.dump(data, f, indent=4)

# print(f"Dữ liệu đã được lưu vào file {output_file}")

# Lưu dữ liệu mới vào MongoDB
try:
    for symbol, records in data.items():
        for record in records:
            record['symbol'] = symbol  # Thêm mã cổ phiếu vào từng record
            collection.insert_one(record)
    logging.info("Dữ liệu mới đã được lưu vào MongoDB")
except Exception as e:
    logging.error(f"Failed to insert new data into MongoDB: {e}")
    raise
