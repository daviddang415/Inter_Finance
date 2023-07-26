import yfinance as yf

def getFinancialInfo(ticker, price_point):
    data = yf.download(tickers=ticker, period='100d', interval='1d')
    price_point_data = data[price_point].to_dict()
    finance_info_dict = {}
    for date in price_point_data:
        finance_info_dict[str(date.date())] = price_point_data[date]
    return finance_info_dict

#print(getFinancialInfo('MMM', 'Open'))