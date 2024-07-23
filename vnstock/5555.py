import json
import numpy as np
from pymongo import MongoClient
from vnstock import financial_ratio  # Đảm bảo đã cài đặt và import thư viện này

# Danh sách các mã chứng khoán
symbols = ["ACB", "BCM", "BID", "BVH", "CTG", "FPT", "GAS", "GVR", "HDB", "HPG", "MBB", "MSN", "MWG", "PLX", "POW", "SAB", "SHB", "SSB", "SSI", "STB", "TCB", "TPB", "VCB", "VHM", "VIB", "VIC", "VJC", "VNM", "VPB", "VRE"]

# Khởi tạo dictionary để lưu trữ dữ liệu
financial_data = {}

# Hàm để thay thế giá trị NaN bằng null
def replace_nan_with_null(data):
    if isinstance(data, dict):
        return {key: replace_nan_with_null(value) for key, value in data.items()}
    elif isinstance(data, list):
        return [replace_nan_with_null(item) for item in data]
    elif isinstance(data, (int, float)) and (data != data):  # Check for NaN
        return None
    else:
        return data

# Hàm để loại bỏ trường 'ticker'
def remove_ticker_field(data):
    if isinstance(data, dict):
        data.pop('ticker', None)  # Loại bỏ trường 'ticker' nếu có
        for key in data:
            data[key] = remove_ticker_field(data[key])  # Đệ quy vào các giá trị
    elif isinstance(data, list):
        data = [remove_ticker_field(item) for item in data]
    return data

# Hàm để chuyển tất cả các khóa thành chuỗi
def convert_keys_to_strings(data):
    if isinstance(data, dict):
        new_data = {}
        for key, value in data.items():
            new_key = str(key)  # Chuyển khóa thành chuỗi
            new_data[new_key] = convert_keys_to_strings(value)  # Đệ quy vào các giá trị
        return new_data
    elif isinstance(data, list):
        return [convert_keys_to_strings(item) for item in data]
    else:
        return data
# Kết nối đến MongoDB
client = MongoClient('mongodb+srv://DoAnLienNganh:GaxmRzJmhsL1Nm8n@cluster0.rheq0an.mongodb.net/')  # Thay đổi URL nếu cần
db = client['jwtnodejs']  # Thay đổi tên cơ sở dữ liệu
collection = db['bctc']  # Thay đổi tên collection nếu cần

# Xóa tất cả dữ liệu cũ trong collection
collection.delete_many({})

# Lấy dữ liệu cho từng mã chứng khoán
for symbol in symbols:
    try:
        # Lấy dữ liệu báo cáo tài chính
        income_df = financial_ratio(symbol, 'yearly')
        
        # Kiểm tra cấu trúc dataframe
        print(f"Data for {symbol}:\n", income_df.head())
        
        # Chuyển đổi dữ liệu sang dạng dictionary
        data_dict = income_df.to_dict(orient='index')
        
        # Thay thế NaN bằng null
        data_dict = replace_nan_with_null(data_dict)
        
        # Loại bỏ trường 'ticker'
        data_dict = remove_ticker_field(data_dict)
        
        # Chuyển tất cả các khóa thành chuỗi
        data_dict = convert_keys_to_strings(data_dict)
        
        # Cập nhật dữ liệu vào MongoDB
        collection.update_one(
            {"symbol": symbol},  # Điều kiện để tìm tài liệu
            {"$set": {"data": data_dict}},  # Cập nhật dữ liệu
            upsert=True  # Nếu không tìm thấy tài liệu, sẽ tạo mới
        )
        
        print(f"Updated or inserted data for symbol: {symbol}")
        
    except KeyError as e:
        print(f"KeyError for symbol {symbol}: {e}")
    except Exception as e:
        print(f"An error occurred for symbol {symbol}: {e}")

print("Dữ liệu đã được lưu vào MongoDB.")