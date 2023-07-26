import { useEffect, useState } from 'react';

export function Stock(props) {
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);

    useEffect(()=> {
        fetchStock();
      }, [])

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

    return (
        <div>
            <h1>Stock Market</h1> 
        </div>
      );
}