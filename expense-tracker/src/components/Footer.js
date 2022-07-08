import React from 'react'

export default function footer() {
    return (
        <div className="footer">
            <h3>Add new transaction</h3>
            <p className="text">
                Text <br/>
                <input type="text" id="txtSpace" placeholder="Enter text..."/>
            </p>
            <p className="amount">
                Amount <br/>
                (negative - expense, positive - income) <b/>
                <input type="number" id="numSpace" placeholder="Enter text" value="0"/>
            </p>

            <button className="btn">Add transaction</button>
        </div>
    )
}
