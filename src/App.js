import React , {useState} from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    {
        id : 'e1',
        title : 'School fee',
        amount : 800,
        date : new Date (2023 , 5 , 12)
    },

    {
        id : 'e2',
        title : 'Books',
        amount : 250,
        date : new Date (2023 , 4 , 2)
    },

    {
        id : 'e3',
        title : 'Tuition fee',
        amount : 350,
        date : new Date (2023 , 3 , 1)
    },

    {
        id : 'e4',
        title : 'Sports',
        amount : 550,
        date : new Date (2023 , 4 , 6)
    }
];

function App(){
    
    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense , ...expenses];
        setExpenses(updatedExpense);
        

    }
    return(
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses  item = {expenses}/>
     
        </div>
       
    ); 
}

export default App;