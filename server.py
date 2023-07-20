from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

@app.route("/", methods=['GET'])
@app.route("/home", methods=['GET'])
def home():
    data = {
        "companies": pickle.load(open("sp500tickers.pickle", "rb"))
    }
    return jsonify(data)

@app.route('/<company>', methods=['POST'])
def handle_data(company):
    return {'message': company}

if __name__ == "__main__":
    app.run(debug=True)