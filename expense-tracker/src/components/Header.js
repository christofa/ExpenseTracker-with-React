import React from 'react'

export default function Header() {
    return (
        <div>
            <h2 className='top'>Expense Tracker</h2> 
            <div className='header'>
                <span>YOUR BALANCE</span>
                    <h1 className='balance'>0</h1 >
                <div className='clear'>
                <div className='income'>
                    <p>INCOME <br/>
                            <span className='num1'>0</span>
                    </p>
                </div>
                <div className='expense'>
                        <p>EXPENSE <br/>
                            <span className="num2">0</span>
                        </p>
                    </div>
                </div>
             </div>
         </div>
    )
}
