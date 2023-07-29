from flask import Flask, jsonify
import pickle
import getFinanceData

app = Flask(__name__)

@app.route("/", methods=['GET'])
@app.route("/home", methods=['GET'])
def home():
    data = {
        "companies": pickle.load(open("sp500tickers.pickle", "rb"))
    }
    return jsonify(data)

@app.route('/<company>', methods=['POST', 'GET'])
def handle_data(company):
    company_dict = pickle.load(open("sp500tickers.pickle", "rb"))
    finance_info = getFinanceData.getFinancialInfo(company_dict[company], 'Open', '100d', '1d')
    return {'company': company, 'finance_info': finance_info}


@app.route('/finance_data/<company>/<period>/<interval>', methods=['GET'])
def get_finance_data(company, period, interval):
    company_dict = pickle.load(open("sp500tickers.pickle", "rb"))
    finance_info = getFinanceData.getFinancialInfo(company_dict[company], 'Open', period, interval)
    return {'finance_info': finance_info}

@app.route('/finance_summary/<company>', methods=['GET'])
def get_finance_summary_data(company):
    company_dict = pickle.load(open("sp500tickers.pickle", "rb"))
    finance_summary = getFinanceData.getFinancialSummary(company_dict[company])
    return {'finance_summary': finance_summary}


if __name__ == "__main__":
    app.run(debug=True)