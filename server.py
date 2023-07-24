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
    finance_info = getFinanceData.getFinancialInfo(company_dict[company])
    return {'company': company, 'finance_info': finance_info}

if __name__ == "__main__":
    app.run(debug=True)