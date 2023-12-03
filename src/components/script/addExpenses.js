import React, { useState } from "react";
import '../styles/addExpenses.css'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddExpenses(props) {
    const [show, setShow] = useState(true);

    const [enteredDate, setEnteredDate] = useState("");
    const [enteredReason, setEnteredReason] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");

    function ChangeDate(event) {
        setEnteredDate(event.target.value)
    }

    function ChangeReason(event) {
        setEnteredReason(event.target.value)
    }

    function ChangeAmount(event) {
        setEnteredAmount(event.target.value)
    }
    
    
    function SaveData(event) {
        event.preventDefault();
        let date = new Date(new Date(event.target[0].value).getFullYear(), new Date(event.target[0].value).getMonth(), new Date(event.target[0].value).getDate());
        let obj = {
            id : uuidv4(),
            Date: date,
            Amount: event.target[2].value,
            Reason: event.target[1].value
        };
        console.log("obj after creating expense ====>  ",obj);
        props.data(obj); 
        setShow(false);
        setEnteredDate ("");
        setEnteredReason ("");
        setEnteredAmount ("");
        showAddedExpenseToast();
    }

    function resetData(event) {
        event.preventDefault();
        setEnteredDate ("");
        setEnteredReason ("");
        setEnteredAmount ("");
    }

    const showAddedExpenseToast = () => {
        toast.success('Expense Added Successfully!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <>
            <div className="mb-5 d-flex justify-content-center align-items-center">
                    <button className="btn btn-dark m-3 buttons bt" onClick={() => setShow(true)} >Add Expenses</button>
            </div>
                {
                    show ?
                        <div className="bor">
                            <form onSubmit ={SaveData} className="w-25 m-auto" action="null">

                                <div className="mr">
                                    <div className="input-group mb-3 w1">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                                        <input type="date" className="form-control width" max={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]} required={true} onChange = {ChangeDate} value = {enteredDate}></input>
                                    </div>

                                    <div className="input-group mb-3 w1">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Reason</span>
                                        <input type="text" className="form-control width" required={true} onChange={ChangeReason} value = {enteredReason}></input>
                                    </div>

                                    <div className="input-group mb-3 w1">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Amount: "$"</span>
                                        <input type="number" className="form-control width" required={true} onChange = {ChangeAmount} value = {enteredAmount}></input>
                                    </div>
                                </div>
                
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-success m-3 mt-5 buttons" type="submit">Add</button>
                                    <button className="btn btn-danger m-3 buttons mt-5" onClick={resetData}>Clear</button>
                                </div>
                            
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-warning buttonss" onClick={()=>setShow(false)} >Hide This</button>
                                </div>
                
                            </form>
                        </div>

                    : null
                    }
            <ToastContainer autoClose={2000} />
        </>
        
    );
}
export default AddExpenses; 