import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

export function Stock(props) {
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);

    useEffect(()=> {
        let API_Call = `/${props.company}`;

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    //console.log(data);
                    let finance_info_dict = data["finance_info"];
                    let x = [];
                    let y = [];
                    for (var key in finance_info_dict) {
                        x.push(key);
                        y.push(finance_info_dict[key]);
                    }
                    setstockChartXValues(x);
                    //console.log(stockChartXValues);
                    setstockChartYValues(y);
                    //console.log(stockChartYValues);
                }
            )
      }, [props.company])

    function fetchStock() {
        let API_Call = `/${props.company}`;

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    //console.log(data);
                    let finance_info_dict = data["finance_info"];
                    let x = [];
                    let y = [];
                    for (var key in finance_info_dict) {
                        x.push(key);
                        y.push(finance_info_dict[key]);
                    }
                    setstockChartXValues(x);
                    console.log(stockChartXValues);
                    setstockChartYValues(y);
                    console.log(stockChartYValues);
                }
            )
    }

    function StockMarketPlot() {
        return (
            <Plot
              data={[
                {
                  x: stockChartXValues,
                  y: stockChartYValues,
                   type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'},
                },
              ]}
              layout={{width: 720, height: 440, title: 'Opening Stock Prices The Past 100 Days'}}
            />
          );
    }

    return (
        <div>
            <StockMarketPlot/>
        </div>
      );
}