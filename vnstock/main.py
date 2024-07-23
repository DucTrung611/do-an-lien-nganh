import json
from vnstock import financial_flow  # Đảm bảo đã cài đặt và import thư viện này

# Danh sách các mã chứng khoán
symbols = ["ACB", "BCM", "BID", "BVH", "CTG", "FPT", "GAS", "GVR", "HDB", "HPG", "MBB", "MSN", "MWG", "PLX", "POW", "SAB", "SHB", "SSB", "SSI", "STB", "TCB", "TPB", "VCB", "VHM", "VIB", "VIC", "VJC", "VNM", "VPB", "VRE"]

# Khởi tạo dictionary để lưu trữ dữ liệu
financial_data = {}

# Lấy dữ liệu cho từng mã chứng khoán
for symbol in symbols:
    try:
        # Lấy dữ liệu báo cáo tài chính
        income_df = financial_flow(symbol=symbol, report_type='incomestatement', report_range='quarterly')
        
        # Kiểm tra cấu trúc dataframe
        print(f"Data for {symbol}:\n", income_df.head())
        
        # Chuyển đổi dữ liệu sang dạng dictionary
        financial_data[symbol] = income_df.to_dict(orient='index')
        
    except KeyError as e:
        print(f"KeyError for symbol {symbol}: {e}")
    except Exception as e:
        print(f"An error occurred for symbol {symbol}: {e}")

# Lưu dữ liệu vào file JSON
output_file = 'financial_data.json'  # Tên của file JSON bạn muốn xuất ra
with open(output_file, 'w') as json_file:
    json.dump(financial_data, json_file, indent=4, ensure_ascii=False)

# Duyệt qua từng mã chứng khoán và từng năm
for symbol, data in financial_data.items():
    for year, record in data.items():
        for key, value in record.items():
            if isinstance(value, float) and value != value:  # Kiểm tra xem value có phải là NaN không
                financial_data[symbol][year][key] = None  # Thay thế NaN bằng null

# Lưu lại dữ liệu đã cập nhật vào file JSON
with open('financial_data.json', 'w') as json_file:
    json.dump(financial_data, json_file, indent=4, ensure_ascii=False)

print(f"Dữ liệu đã được lưu vào file {output_file}")
