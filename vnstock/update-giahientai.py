from pymongo import MongoClient
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Kết nối đến MongoDB
try:
    client = MongoClient('mongodb+srv://DoAnLienNganh:GaxmRzJmhsL1Nm8n@cluster0.rheq0an.mongodb.net/')
    db = client['jwtnodejs']  # replace with your database name
    times_series_collection = db['TimesSeries']  # replace with your TimesSeries collection name
    stocks_collection = db['stocks']  # replace with your stocks collection name
    logging.info("Connected to MongoDB successfully.")
except Exception as e:
    logging.error(f"Failed to connect to MongoDB: {e}")
    raise

# Lấy tất cả dữ liệu từ collection TimesSeries
try:
    times_series_data = list(times_series_collection.find({}))
    logging.info(f"Fetched {len(times_series_data)} records from TimesSeries collection.")
except Exception as e:
    logging.error(f"Failed to fetch data from TimesSeries collection: {e}")
    raise

# Cập nhật giá trị giahientai trong stocks_collection
try:
    for record in times_series_data:
        ticker = record['ticker']
        close_value = record['close']
        
        # Tìm và cập nhật giá trị giahientai trong stocks_collection
        result = stocks_collection.update_many(
            {"ma": ticker},
            {"$set": {"giahientai": close_value}}
        )
        
        if result.matched_count > 0:
            logging.info(f"Updated {result.matched_count} records for ticker: {ticker}")
        else:
            logging.warning(f"No records found for ticker: {ticker} in stocks collection")
except Exception as e:
    logging.error(f"Failed to update stocks collection: {e}")
    raise

logging.info("Completed updating stocks collection.")
