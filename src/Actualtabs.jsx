import { useState } from 'react';
import { ProfileTable } from './ProfileTable';
import { Summary } from './Summary';
import { News } from './News';
import { Reviews } from './Reviews';
import './Actualtabs.css';

export function Actualtabs(props) {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle:'Summary',
            content: <Summary company = {props.company} finance_info_summary_dict={props.finance_info_summary_dict}></Summary>
        },
        {
            id: 2,
            tabTitle:'Profile',
            content: <ProfileTable profile_data={props.profile_data}></ProfileTable>
        },
        {
            id: 3,
            tabTitle:'News',
            content: <News news={props.news}></News>
        },
        {
            id: 4,
            tabTitle:'Reviews',
            content: <p></p>
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);  
    }

    return (
        <div className="actual_tabs_container">
            <div className='actual_tabs_tabs'>
                {tabs.map((tab,i)=>
                <button 
                key={i} 
                id={tab.id} 
                disabled={currentTab === `${tab.id}`}
                onClick={(handleTabClick)}>{tab.tabTitle}</button>)}
            </div>
            <div className='actual_tabs_content'>
                {tabs.map((tab,i) =>
                <div key={i}>
                {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                </div>
                )}
            </div>
        </div>
    )
}