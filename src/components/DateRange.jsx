import React from 'react'
import './daterange.css'

const DateRange = ({ start, end }) => {
    return (
        <p className='date-range'>{`${start} - ${end || "present"}`}</p>
    )
}

export default DateRange