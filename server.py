from flask import Flask, jsonify
import pickle

app = Flask(__name__)

@app.route("/", methods=['GET'])
@app.route("/home", methods=['GET'])
def home():
    data = {
        "companies": pickle.load(open("sp500tickers.pickle", "rb"))
    }
    return jsonify(data)

'''
@app.route("/<company>", methods=['GET'])
def get_company(company):
    data = {
        "companies": pickle.load(open("sp500tickers.pickle", "rb"))
    }
    return jsonify(data)
'''

if __name__ == "__main__":
    app.run(debug=True)