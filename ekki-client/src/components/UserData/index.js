import React from "react"

const UserData = ({user, account}) => {
    return(
        <div>
            <div>{user.name}</div>
            <div>Your balance: {account.balance}</div>
        </div>
    )
}

export default UserData;