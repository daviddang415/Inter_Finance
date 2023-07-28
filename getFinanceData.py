import yfinance as yf

def getFinancialInfo(ticker, price_point, period, interval):
    data = yf.download(tickers=ticker, period=period, interval=interval)
    price_point_data = data[price_point].to_dict()
    print(price_point)
    finance_info_dict = {}
    for date in price_point_data:
        if period == '1d':
            finance_info_dict[str(date.time())[:-3]] = price_point_data[date]
        elif period == '5d':
            finance_info_dict[str(date.strftime('%d %X')[:-3])] = price_point_data[date]
        else:
            finance_info_dict[str(date.date())] = price_point_data[date]
    return finance_info_dict

#print(getFinancialInfo('V', 'Open', '5d', '5m'))