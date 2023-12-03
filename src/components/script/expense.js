import Comp1 from './comp1';
function Expenses(props) {
    return (
        <div>
            { props.array.sort((a,b)=>{ return new Date(a.Date) - new Date(b.Date)}).map((item,index) => {
                return ( <Comp1 uuid={item.id} date={item.Date} amount={item.Amount} reason={item.Reason} arrays={props.array} setExpense={props.setExpense} > </Comp1>)
                }
            ) }
        </div>
    );
}

export default Expenses;