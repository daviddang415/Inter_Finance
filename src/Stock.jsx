import { useState } from 'react';

export function Stock(props) {
    const [stockChartXValues, setstockChartXValues] = useState([]);
    const [stockChartYValues, setstockChartYValues] = useState([]);

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
                    console.log(data);
                }
            )
    }

    return (
        <div>
            <h1 onClick = {fetchStock}>Stock Market</h1> 
        </div>
      );
}