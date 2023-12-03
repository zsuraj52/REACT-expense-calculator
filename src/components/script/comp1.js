import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import '../styles/comp1.css';
import DateComp from './dateComp';
import Nested from './nestedComp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comp1(props) {

    const [enteredDate, setEnteredDate] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredReason, setEnteredReason] = useState("");

    function resetData(event) {
        event.preventDefault();
        setEnteredDate ("");
        setEnteredAmount ("");
        setEnteredReason("");
    }

    function SaveEnteredData(event) {
        event.preventDefault();
        event.stopPropagation();
        let dates = new Date(enteredDate || props.date);
        
        let index = props.arrays.findIndex((item) => {
            return item.id === props.uuid
        })

        props.arrays[index] = { ...{ id: props.uuid, Date:  dates ? dates : props.date , Amount: enteredAmount ? enteredAmount  : props.amount, Reason: enteredReason ? enteredReason : props.reason }};
        props.setExpense([...props.arrays]);

        setEnteredDate ("");
        setEnteredAmount ("");
        setEnteredReason("");
        showEditToast();
    }

    const [showModal, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = (props) => {
        console.log("props : ",props);
        setShow(true)
    };


    const [showDeleteModal, setDeleteShow] = useState(false);
    
    const handleDelete = () => setDeleteShow(false);
    const handleDeleteShow = (props) => {
        console.log("props : ",props);
        setDeleteShow(true)
    };

    const showDeleteToast = () => {
        toast.success('Expense Deleted...', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showEditToast = () => {
        toast.success('Expense Edited...', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    function DeleteExpense(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("props.arrays length====> ", props.arrays.length);
        console.log("props.uuid ======> ", props.uuid);
        let arrayObj = props.arrays.findIndex( item => item.id === props.uuid )
        console.log("arrayObj =========> ", arrayObj);
        props.arrays.splice(arrayObj, 1);
        console.log("newArray ===> ", props.arrays);
        props.setExpense([...props.arrays]);
        setDeleteShow(false);
        showDeleteToast();
    }

    return (
        <div>
            <Nested className='m5'>

                <div className='expenses mt-4'>
                    <div className='topic mx-5'> <DateComp date={props.date} /> <span className='mx-5'>{props.reason} </span>  </div>
                    <div className='mar mx-5'><button className='btn btn-success btns'>$ {props.amount}</button> </div>
                    <div className='d-flex'>
                        <div className='mar me-5'><button className='btn btn-warning' onClick={() => { handleShow(props) }}>Edit</button> </div>
                        <div className='mar me-5'><button className='btn btn-danger' onClick={() => { handleDeleteShow(props) }}>Delete</button> </div>
                    </div>
                </div>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Expense Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div>
                            <form onSubmit = {SaveEnteredData} className="w-20 m-auto">

                                <div className="mr">
                                    <div className="input-group mb-3 w1">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                                        <input type="date" className="form-control width" max={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]} name="date" value={enteredDate} onChange={(e) => setEnteredDate(e.target.value)}></input>
                                    </div>

                                    <div className="input-group mb-3 w1">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Reason</span>
                                        <input type="text" className="form-control width"  value={enteredReason} onChange={(e) => setEnteredReason(e.target.value)} name="reason"></input>
                                    </div>

                                    <div className="input-group mb-3 w1">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Amount: "$"</span>
                                        <input type="number" className="form-control width"  value={enteredAmount} onChange={(e) => setEnteredAmount(e.target.value)} name="amount"></input>
                                    </div>

                                    <div className="mt-4">
                                        <Button onClick={resetData} className = "me-3 btn btn-primary"> Clear </Button>
                                        <Button onClick={handleClose} className="me-3 btn btn-danger"> Close </Button>
                                        <Button onClick={handleClose} className="btn btn-success" type="submit"> Save Changes </Button>
                                    </div>
                                </div>
                
                            </form>
                        </div>

                    </Modal.Body>
                </  Modal>


                <Modal show={showDeleteModal} onHide={handleDelete}>
                    <Modal.Header closeButton>
                        <h4>Delete Expense..</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <h5> Are You Sure To Delete this Expense?</h5>
                        <div className="mt-4 d-flex justify-content-center">
                            <Button onClick={DeleteExpense} className="me-3 btn btn-success" > Yes </Button>
                            <Button onClick={handleDelete} className = "btn btn-danger"> Close </Button>
                        </div>
                    </Modal.Body>
                    
                    
                </  Modal>

            </Nested>
            <ToastContainer autoClose={2000}/>
            
        </div>

    );
}
export default Comp1;