import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

export function Stock(props) {
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);

    useEffect(()=> {
        let API_Call = `/finance_data/${props.company}/${props.period}/${props.interval}`;
        //console.log(props.company);
        //console.log(props.period);
        //console.log(props.interval);

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
      }, [props.company, props.period, props.interval])
      
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
              layout={{width: 780, height: 260, title: `Opening Stock Prices In The Period of ${props.period} At The Interval Of ${props.interval}`}}
              config={{responsive: true}}/>
          );
    }

    return (
        <div>
            <StockMarketPlot/>
        </div>
      );
}