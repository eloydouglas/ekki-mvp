import React from "react"


const UserData = ({user, account}) => {
    return( 
        <div>
            <div>Hello, {user.name}!</div>
            <br/>
            <div>Your balance</div>
            <div>{account.balance.toFixed(2)}</div>
        </div>)
    
}

export default UserData;