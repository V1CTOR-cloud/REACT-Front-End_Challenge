import React, { useEffect, useState } from 'react';
import './TableMain.css';
import { FakeData } from '../Body/DependentData';
import { Text } from '../../../stories/Text/Text';

export const TableMain = ({ data, backgroundColor, TableHeight, TableWidth, BorderRadius }) => {

    const [newData, setNewData] = useState(data);

    useEffect(() => {
        setNewData(data);
    });
    
    const style = {
        height: TableHeight + '%',
        width: TableWidth + '%',
        backgroundColor: backgroundColor,
        BorderRadius: BorderRadius + 'px',
    }

    return (
        <div className="TableMain" style={style}>
            {newData.map((person) => {
            return (
                <div className="card" key={person.id}>
                    <div className="dependencyLevel" id={person.dependencyLevel}></div>
                    <div className="avatarWrapper" key={person.id}>
                        <div key={person.id} className="avatarDependent" style={{ backgroundImage: `url("${person.avatar.url}")` }}>
                        </div>
                    </div>
                    <div className="name_info">
                        <Text key={person.id} fontSize={0.8} label={person.name} />
                    </div>
                    <div className="age_info">
                        <Text key={person.id} fontSize={0.8} label={person.age.toString()} />
                    </div>
                    <div className="email_info">
                        <Text key={person.id} fontSize={0.8} label={person.email} />
                    </div>
                    <div className="phone_info">
                        <Text key={person.id} fontSize={0.8} label={person.contactPhone.toString()} />
                    </div>
                </div> 
            );
        })}
        </div>
    )
}
