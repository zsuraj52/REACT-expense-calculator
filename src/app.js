import './app.css';
import AddExpenses from './components/script/addExpenses';
import TotalExpense from './components/script/totalExpense';
import Expenses from './components/script/expense';
import { useState } from 'react';

function AppComponent() {

    const [expenses, setExpense] = useState([]);
    const getEnteredData = (value) => {
        setExpense(expenses => [...expenses, value]);
    }

    let totalExpenses = 0; 
    for (let obj in expenses) {
        totalExpenses += Number(expenses[obj].Amount);
    }
    console.log("expenses array content: ",expenses);
    return (
        <>
            <h1 className='title mt-3'>&#128203;&#128184;  The Expense Calculator  &#128184;&#128203;</h1>
            <hr className='new2'></hr>
            <AddExpenses data={getEnteredData}></AddExpenses>
            <Expenses array={expenses} setExpense={setExpense} ></Expenses>
            <TotalExpense total={totalExpenses}></TotalExpense>

        </>
    );
}
export default AppComponent;