import '../styles/totalExpense.css'

function TotalExpense(props) {
    return (
        <div className="martop">
            <div className='expenses mt-4 mb-5' >
                <div className='topic mx-5'> Total Expenses : <span className='mx-5'> </span>  </div>
                <div className='mar mx-5'><button className='btn btn-warning btns'>$ {props.total}</button> </div>
            </div>
        </div>
    );
}

export default TotalExpense;