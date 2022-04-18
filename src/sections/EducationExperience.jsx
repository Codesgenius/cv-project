import React from 'react'
import DateRange from '../components/DateRange'
import './experience.css'

const EducationExperience = () => {
    return (
        <div className='section-main-con'>
            <div className='section-title'><h2>Education</h2></div>
            <hr />
            <div className='section-body'>
                <div className='date-range-con'><DateRange start="2021-02-09" end="2021-07-19" /></div>

                <div className='section-detail'>
                    <h2>B.sc Electrical and Electronics Engineering</h2>
                    <h3>Obafemin Awolowo University, Osun</h3>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                </div>
            </div>
        </div>
    )
}

export default EducationExperience