import React from 'react';
import { List } from '../shared';
import '../shared/shared.css';


const ActivityList = ({ activityList }) => {
    return (<List>{activityList.length === 0 ? <div>No transactions found</div> : 
                <ul className="list">
                    {activityList.map(activity => {
                        return (<li 
                                    className="listItem"
                                    key={activity._id}
                                >
                                <p>From: {activity.sender_name}</p>
                                <p>To: {activity.receiver_name}</p>
                                <p>Ammount: {activity.ammount}</p>
                                <p>Date: {activity.createdAt}</p>
                                </li>)
                    })}
                </ul>}
            </List>);
}

export default ActivityList;