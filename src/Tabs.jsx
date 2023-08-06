import { useState } from 'react';
import { Stock } from './Stock';
import './Tabs.css';

export function Tabs(props) {

    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1,
            tabTitle:'1D',
            content: <Stock company = {props.company} period={"1d"} interval={"2m"}/>
        },
        {
            id: 2,
            tabTitle:'5D',
            content: <Stock company = {props.company} period={"5d"} interval={"5m"}/>
        },
        {
            id: 3,
            tabTitle:'1M',
            content: <Stock company = {props.company} period={"1mo"} interval={"1d"}/>
        },
        {
            id: 4,
            tabTitle:'6M',
            content: <Stock company = {props.company} period={"6mo"} interval={"1d"}/>
        },
        {
            id: 5,
            tabTitle:'1Y',
            content: <Stock company = {props.company} period={"1y"} interval={"1d"}/>
        },
        {
            id: 6,
            tabTitle:'5Y',
            content: <Stock company = {props.company} period={"5y"} interval={"1d"}/>
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