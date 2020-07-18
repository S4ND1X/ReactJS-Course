import React ,{useState} from 'react'

export default function Expenses() {
    return (
        <form>
            <h2>
                Expenses
            </h2>
            <div className="campo">
                <label>Expense Name</label>
                <input type="text"
                className="u-full-width"
                placeholder="Mortage"/>
            </div>
            <div className="campo">
                <label>Expense Quantity</label>
                <input type="number"
                className="u-full-width"
                placeholder="200"/>
            </div>
            <input type="submit" className="button-primary u-full-width"
            value="Add expense"/>
        </form>
    )
}
