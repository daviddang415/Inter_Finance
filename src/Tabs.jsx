import { useState } from 'react';
import { Stock } from './Stock';
import './Tabs.css';

export function Tabs(props) {

    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle:'1D',
            title:'Title 1',
            content: <Stock company = {props.company}/>
        },
        {
            id: 2,
            tabTitle:'5D',
            title:'Title 2',
            content: <Stock company = {props.company}/>
        },
        {
            id: 3,
            tabTitle:'1M',
            title:'Title 3',
            content:<Stock company = {props.company}/>
        },
        {
            id: 4,
            tabTitle:'6M',
            title:'Title 4',
            content: <Stock company = {props.company}/>
        },
        {
            id: 5,
            tabTitle:'1Y',
            title:'Title 5',
            content: <Stock company = {props.company}/>
        },
        {
            id: 6,
            tabTitle:'5Y',
            title:'Title 6',
            content:<Stock company = {props.company}/>
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);  
    }

    return (
        <div className="container">
            <div className='tabs'>
                {tabs.map((tab,i)=>
                <button 
                key={i} 
                id={tab.id} 
                disabled={currentTab === `${tab.id}`}
                onClick={(handleTabClick)}>{tab.tabTitle}</button>)}
            </div>
            <div className='content'>
                {tabs.map((tab,i) =>
                <div key={i}>
                {currentTab === `${tab.id}` && <div className='graph'>{tab.content}</div>}
                </div>
                )}
            </div>
        </div>
    )
}