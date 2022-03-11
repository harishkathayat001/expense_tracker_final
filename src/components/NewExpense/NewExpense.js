import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {


    const [isEditing, setEditing] = useState();

    const savaExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData)
        props.onReceivedData(expenseData);
        setEditing(false);

    };

    const showExpenseForm = () => {
        setEditing(true);
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={showExpenseForm}>Add New Expense</button>}
            {isEditing && <ExpenseForm cancelButton={stopEditingHandler} onSaveExpenseData={savaExpenseDataHandler} />}
        </div>
    )
};

export default NewExpense;