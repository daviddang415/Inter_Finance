import { useEffect, useState } from 'react';
import './Summary.css';

export function Summary(props) {
    const [finance_info_summary_dict, setFinance_info_summary_dict] = useState({});

    useEffect(()=> {
        let API_Call = `/finance_summary/${props.company}`;

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data["finance_summary"]);
                    setFinance_info_summary_dict(data["finance_summary"]);
                }
            )
      }, [props.company])
    
    return (
        <div className="summaryTable">
            <table className='tableOne'>
                <tbody>
                    <tr>
                        <td className='key'>Previous Close</td>
                        <td className='value'>{finance_info_summary_dict["Previous Close"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Open</td>
                        <td className='value'>{finance_info_summary_dict["Open"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Bid</td>
                        <td className='value'>{finance_info_summary_dict["Bid"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Ask</td>
                        <td className='value'>{finance_info_summary_dict["Ask"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Day's Range</td>
                        <td className='value'>{finance_info_summary_dict["Day's Range"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>52 Week Range</td>
                        <td className='value'>{finance_info_summary_dict["52 Week Range"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Volume</td>
                        <td className='value'>{finance_info_summary_dict["Volume"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Avg. Volume</td>
                        <td className='value'>{finance_info_summary_dict["Avg. Volume"]}</td>
                    </tr>
                </tbody>
            </table>
            <table className='tableTwo'>
                <tbody>
                    <tr>
                        <td className='key'>Market Cap</td>
                        <td className='value'>{finance_info_summary_dict["Market Cap"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Beta (5Y Monthly)</td>
                        <td className='value'>{finance_info_summary_dict["Beta (5Y Monthly)"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>PE Ratio (TTM)</td>
                        <td className='value'>{finance_info_summary_dict["PE Ratio (TTM)"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>EPS (TTM)</td>
                        <td className='value'>{finance_info_summary_dict["EPS (TTM)"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Earnings Date</td>
                        <td className='value'>{finance_info_summary_dict["Earnings Date"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Forward Dividend & Yield</td>
                        <td className='value'>{finance_info_summary_dict["Forward Dividend & Yield"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Ex-Dividend Date</td>
                        <td className='value'>{finance_info_summary_dict["Ex-Dividend Date"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>1y Target Est</td>
                        <td className='value'>{finance_info_summary_dict["1y Target Est"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}