import React, { useEffect, useState } from 'react';
import './TableMain.css';
import { FakeData } from '../Body/DependentData';
import { Text } from '../../../stories/Text/Text';

export const TableMain = ({ data, backgroundColor, TableHeight, TableWidth, BorderRadius }) => {

    const [newData, setNewData] = useState(data);

    useEffect(() => {
        setNewData(data);
    }, []);

    //console.log(newData);

    
    const style = {
        height: TableHeight + '%',
        width: TableWidth + '%',
        backgroundColor: backgroundColor,
        BorderRadius: BorderRadius + 'px',
    } 

    return (
        <div className="TableMain" style={style}>
            {newData.map((person, index) => {
            return ( 
                <div className="card" key={index}>
                    <div className="dependencyLevel" id={person.dependencyLevel}></div>
                    <div className="avatarWrapper" key={index}>
                        <div key={index} className="avatarDependent" style={{ backgroundImage: `url("${person.avatar.url}")` }}>
                        </div>
                    </div>
                    <div className="name_info">
                        <Text key={index} fontSize={0.8} label={person.name} />
                    </div>
                    <div className="age_info">
                        <Text key={index} fontSize={0.8} label={person.age.toString()} />
                    </div>
                    <div className="email_info">
                        <Text key={index} fontSize={0.8} label={person.email} />
                    </div>
                    <div className="phone_info">
                        <Text key={index} fontSize={0.8} label={person.contactPhone.toString()} />
                    </div>
                </div> 
            );
        })}
        </div>
    )
}
