import yfinance as yf

def getFinancialInfo(ticker):
    data = yf.download(tickers=ticker, period='100d', interval='1d')
    return data["Open"].to_json()

#print(getFinancialInfo('MMM'))