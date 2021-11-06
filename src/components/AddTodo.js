import React from 'react'

const AddTodo = () => {
//     let newDate = new Date()
// let date_raw = newDate.getDate();
// let month_raw = newDate.getMonth() + 1;
// let year = newDate.getFullYear();
// var date, month
  
// if (date_raw<10)  {  date ="0"+date_raw.toString()} else {  date =date_raw.toString()}
// if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()}


//     <div>{year}{separator}{month}{separator}{date}</div>
    return (
    <>
         <h3>Add new Event</h3>
      <form>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="date" value='date' placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input type="text" value='text' placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="eventdate">Event Date</label>
          <input type="date" value='date' placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="cartegory">Cartegory</label>
          <input type="text" value='text' placeholder="Enter text..." />
        </div>
        <button className="btn">Add Event</button>
      </form>
    </>   
        
    )
}

export default AddTodo
