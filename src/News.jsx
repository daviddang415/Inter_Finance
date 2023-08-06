import { useState } from 'react';
import './News.css';

export function News(props) {
    return (
        <div className='container3'>
            <div className='content3'>
                <ul className='listContainer'>
                {Object.keys(props.news['News']).map((i) => (
                    <li className = "article" key = {i}>
                        <img src={props.news['News'][i]['Thumbnail']} alt="article image" className='image'></img>
                        <div className='words'>
                            <a href={props.news['News'][i]['Link']} target="_blank" className='title'>{props.news['News'][i]['Title']}</a>
                            <p className='publisher'>{props.news['News'][i]['Publisher']}</p>
                            <p className='date'>{props.news['News'][i]['Publisher Date']}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}
