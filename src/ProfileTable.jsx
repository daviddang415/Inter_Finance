import { useEffect, useState } from 'react';
import './ProfileTable.css';

export function ProfileTable(props) {

     console.log(props.profile_data)

      return (
        <div className="profileTable">
            <table className='actualTable'>
                <tbody>
                    <tr>
                        <td className='key'>Name</td>
                        <td className='value'>{props.profile_data["Name"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Address</td>
                        <td className='value'>{props.profile_data["Address"]}<br></br>{props.profile_data["City"] + ", " + props.profile_data["State"] + " " + props.profile_data["Zip"]}<br></br>{props.profile_data["Country"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Phone Number</td>
                        <td className='value'>{props.profile_data["Phone Number"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Website</td>
                        <td className='value'><a href={props.profile_data["Website"]}>{props.profile_data["Website"]}</a></td>
                    </tr>
                    <tr>
                        <td className='key'>Industry</td>
                        <td className='value'>{props.profile_data["Industry"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Sector</td>
                        <td className='value'>{props.profile_data["Sector"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Full Time Employees</td>
                        <td className='value'>{props.profile_data["Full Time Employees"]}</td>
                    </tr>
                    <tr>
                        <td className='key'>Long Business Summary</td>
                        <td className='description'>{props.profile_data["Long Business Summary"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}