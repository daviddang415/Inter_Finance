import yfinance as yf
import math
import datetime
import pandas as pd

def getFinancialInfo(ticker, price_point, period, interval):
    data = yf.download(tickers=ticker, period=period, interval=interval)
    price_point_data = data[price_point].to_dict()
    finance_info_dict = {}
    for date in price_point_data:
        if period == '1d':
            finance_info_dict[str(date.time())[:-3]] = price_point_data[date]
        elif period == '5d':
            finance_info_dict[str(date.strftime('%d %X')[:-3])] = price_point_data[date]
        else:
            finance_info_dict[str(date.date())] = price_point_data[date]
    return finance_info_dict

"""
#print(getFinancialInfo('V', 'Open', '5d', '5m'))
off = yf.Ticker("MSFT")
for key in off.info.keys():
    print("-----------------------------")
    print(key)
    print(off.info[key])
    print("-----------------------------")
#print(yf.Ticker("AAPL").info.values())
ES = off.get_earnings_dates()
print(ES)
"""

def getFinancialSummary(ticker):
    company = yf.Ticker(ticker)
    company_info = company.info
    finance_info = {}

    if "previousClose" in company_info:
        finance_info["Previous Close"] = str(company_info["previousClose"])
    else:
        finance_info["Previous Close"] = "N/A"
    
    if "Open" in company_info: 
        finance_info["Open"] = str(company_info["open"])
    else:
        finance_info["Open"] = "N/A"

    if "bid" in company_info and "bidSize" in company_info:
        finance_info["Bid"] = str(company_info["bid"]) + " x " + str(company_info["bidSize"])
    else:
        finance_info["Bid"] = "N/A"
    
    if "askSize" in company_info:
        finance_info["Ask"] = str(company_info["ask"]) + " x " + str(company_info["askSize"])
    else:
        finance_info["Ask"] = "N/A"

    if "regularMarketDayLow" in company_info and "regularMarketDayHigh" in company_info:
        finance_info["Day's Range"] = str(company_info["regularMarketDayLow"]) + " - " + str(company_info["regularMarketDayHigh"])
    else:
        finance_info["Day's Range"] = "N/A"

    if "fiftyTwoWeekLow" in company_info and "fiftyTwoWeekHigh" in company_info:
        finance_info["52 Week Range"] = str(company_info["fiftyTwoWeekLow"]) + " - " + str(company_info["fiftyTwoWeekHigh"])
    else:
        finance_info["52 Week Range"] = "N/A"

    if "volume" in company_info:
        finance_info["Volume"] = str(company_info["volume"])
    else:
        finance_info["Volume"] = "N/A"

    if "averageVolume" in company_info:
        finance_info["Avg. Volume"] = str(company_info["averageVolume"])
    else:
        finance_info["Avg. Volume"] = "N/A"

    if "marketCap" in company_info:
        finance_info["Market Cap"] = str(round(company_info["marketCap"] / (10**12),2)) + "T"
    else:
        finance_info["Market Cap"] = "N/A"

    if "beta" in company_info:
        finance_info["Beta (5Y Monthly)"] = str(company_info["beta"])
    else:
        finance_info["Beta (5Y Monthly)"] = "N/A"

    if "trailingPE" in company_info:
        finance_info["PE Ratio (TTM)"] = str(company_info["trailingPE"])
    else:
        finance_info["PE Ratio (TTM)"] = "N/A"
    
    if "trailingEps" in company_info:
        finance_info["EPS (TTM)"] = str(company_info["trailingEps"])
    else:
        finance_info["EPS (TTM)"] = "N/A"

    finance_info["Earnings Date"] = getEarningsDate(ticker)

    if "dividendRate" in company_info and "dividendYield" in company_info:
        finance_info["Forward Dividend & Yield"] = str(company_info["dividendRate"]) + " (" + str(company_info["dividendYield"] * 100) + "%)"
    else:
        finance_info["Forward Dividend & Yield"] = "N/A"

    if "exDividendDate" in company_info:
        finance_info["Ex-Dividend Date"] = str(pd.Timestamp(company_info["exDividendDate"], unit='s').date())
    else:
        finance_info["Ex-Dividend Date"] = "N/A"

    if "targetMeanPrice" in company_info:   
        finance_info["1y Target Est"] = str(company_info["targetMeanPrice"])
    else:
        finance_info["1y Target Est"] = "N/A"

    return finance_info

# ['EPS Estimate', 'Reported EPS', 'Surprise(%)']
def getEarningsDate(ticker):
    company = yf.Ticker(ticker)
    ES = company.get_earnings_dates()
    ES_dict = ES.to_dict()
    EPS_Estimate_dict = ES_dict['EPS Estimate']
    Reported_EPS_dict = ES_dict['Reported EPS']
    for key in EPS_Estimate_dict.keys():
        value_1 = float(EPS_Estimate_dict[key])
        value_2 = float(Reported_EPS_dict[key])
        if math.isnan(value_1) == False and math.isnan(value_2) == True:
            return str(key.date())
    return "N/A"

#print(getFinancialSummary('V'))