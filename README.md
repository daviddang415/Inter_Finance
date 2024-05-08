# Inter Finance

Inter Finance is a dynamic web application that displays real-time stock prices, profiling, news, and ratings of S&P 500 companies. The home page of the web app displays a search bar for the user so that they can type in the name of a S&P 500 company or a company's ticker symbol. When a company has been entered into the search bar, the site will display relevant financial information using a tab layout. More specifically, the web application shows real-time stock prices of throughout the day and previous months, background information on the company, current news related to the company, and suggested ratings on the value of the company. The user still has the option to research other companies using the search bar located on the upper left corner of the web page or return to the home page by clicking on the Inter Finance company logo.

## Getting Started

### Installing

Enter a directory and clone this repo:

```
git clone https://github.com/daviddang415/Inter_Finance.git
```

Install dependencies:

```
pip install Flask
npm install
```

### Running application

Start the server:

```
python server.py
```

Start the react application in the ```src``` directory:

```
cd src
npm start
```

## Built With

### Backend
* [yfinance](https://developer.spotify.com/documentation/web-api) - Obtain real-time stock prices, profiling, and news
* [financialmodelingprep](https://site.financialmodelingprep.com/developer/docs#valuation) - Determine the ratings of a company according to its financial statements
* [Flask](https://flask.palletsprojects.com/en/3.0.x/) - Python web framework

### Frontend
* [React](https://react.dev/) - Frontend Javascript library
