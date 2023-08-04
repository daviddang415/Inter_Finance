import { useEffect, useState } from 'react';
import './Summary.css';

export function Summary(props) {
    const [finance_info_summary_dict, setFinance_info_summary_dict] = useState({});
    const [profile_data, setProfile_data] = useState({});
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle:'Summary',
            content: <SummaryTable/>
        },
        {
            id: 2,
            tabTitle:'Profile',
            content: <ProfileTable/>
        }
    ];

    useEffect(()=> {
        let API_Call = `/finance_summary/${props.company}`;
        let API_Call_2 = `/profile_data/${props.company}`;

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    //console.log(data["finance_summary"]);
                    setFinance_info_summary_dict(data["finance_summary"]);
                }
            )

        fetch(API_Call_2)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data["profile_data"]);
                    setProfile_data(data["profile_data"]);
                }
            )
      }, [props.company])

    function SummaryTable() {
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

    function ProfileTable() {
        return (
            <div className="profileTable">
                <table className='actualTable'>
                    <tbody>
                        <tr>
                            <td className='key'>Name</td>
                            <td className='value'>{profile_data["Name"]}</td>
                        </tr>
                        <tr>
                            <td className='key'>Address</td>
                            <td className='value'>{profile_data["Address"]}<br></br>{profile_data["City"] + ", " + profile_data["State"] + " " + profile_data["Zip"]}<br></br>{profile_data["Country"]}</td>
                        </tr>
                        <tr>
                            <td className='key'>Phone Number</td>
                            <td className='value'>{profile_data["Phone Number"]}</td>
                        </tr>
                        <tr>
                            <td className='key'>Website</td>
                            <td className='value'><a href={profile_data["Website"]}>{profile_data["Website"]}</a></td>
                        </tr>
                        <tr>
                            <td className='key'>Industry</td>
                            <td className='value'>{profile_data["Industry"]}</td>
                        </tr>
                        <tr>
                            <td className='key'>Sector</td>
                            <td className='value'>{profile_data["Sector"]}</td>
                        </tr>
                        <tr>
                            <td className='key'>Full Time Employees</td>
                            <td className='value'>{profile_data["Full Time Employees"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);  
    }
    
    return (
        <div className="container2">
            <div className='tabs2'>
                {tabs.map((tab,i)=>
                <button 
                key={i} 
                id={tab.id} 
                disabled={currentTab === `${tab.id}`}
                onClick={(handleTabClick)}>{tab.tabTitle}</button>)}
            </div>
            <div className='content2'>
                {tabs.map((tab,i) =>
                <div key={i}>
                {currentTab === `${tab.id}` && <div className='tableData'>{tab.content}</div>}
                </div>
                )}
            </div>
        </div>
    );
}