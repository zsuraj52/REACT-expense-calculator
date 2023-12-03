import '../styles/dateComp.css';

function DateComp(props) {
    
    let day =props.date? props.date.toLocaleString('en-US', { day: '2-digit' }) : null;
    let month = props.date ? props.date.toLocaleString('en-US', { month: 'long' }) : null;
    let year = props.date? props.date.getFullYear() :null;

    return (
        <div>
            <p className="topics">{month} {day} {year}</p>
        </div>
    );
}

export default DateComp;