import datetime

timestamp = 1704153600000 / 1000  # Chia cho 1000 để chuyển từ milliseconds sang seconds
dt_object = datetime.datetime.fromtimestamp(timestamp)
formatted_date = dt_object.strftime('%Y-%m-%d %H:%M:%S')

print(f"Formatted date: {formatted_date}")
