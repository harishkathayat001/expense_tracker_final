import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    };

    const filteredData = props.items.filter( filteredExpense  => {
        return filteredExpense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                selected={filteredYear}
                 onChangeFilter={filterChangeHandler}/>

                 <ExpenseChart expenses={filteredData}/>

                 <ExpensesList items={filteredData}/>

                 {/* 1st approach using ? Ternary operator

                {filteredData.length === 0 ? ( <p>There is no expense to display</p> ) : (
                filteredData.map( (expense) => (
                    <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
                ))
                )}*/}


                {/* 2nd approach using && operator

                {filteredData.length === 0  && <p>There is no expense to display</p>}  
                {filteredData.length > 0  && 
                 filteredData.map( (expense) => (
                    <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
                ))
                } */}
                

                {/* STATIC LIST EXAMPLE */}
                
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}

            </Card>
        </div> 
    )
};

export default Expenses;