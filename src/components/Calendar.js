import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

//calender that will be shown on our main page
export default function CalenderApp() {
    //main date functions to initialize our date state
    const [dateState, setDateState] = useState(new Date())
    //changes date to current selection on calender
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        //returns the calender as rendered cal
        <div className="container mb-3">
            <div className="favorites-header">
                <h2>CALENDAR</h2>
            </div>
            <div className="calendar-main">
                <div className="card opacity-75">
                    <div className="calendar-card-body">
                        <>
                            <Calendar
                                value={dateState}
                                onChange={changeDate}
                                className="calendar-body"
                            />
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}