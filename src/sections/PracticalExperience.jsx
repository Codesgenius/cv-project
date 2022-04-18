import React from 'react'
import DateRange from '../components/DateRange'
import './experience.css'

const PracticalExperience = () => {
    return (
        <div className='section-main-con'>
            <div className='section-title'><h2>Experience</h2></div>
            <hr />
            <div className='section-body'>
                <div className='date-range-con'><DateRange start="2021-02-09" /></div>

                <div className='section-detail'>
                    <h2>Frontend Web Developer Intern</h2>
                    <h3>Toptal Freelance Platform</h3>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                </div>
            </div>
            <br />
            <div className='section-body'>
                <div className='date-range-con'><DateRange start="2021-02-09" /></div>

                <div className='section-detail'>
                    <h2>React Developer Intern</h2>
                    <h3>Side Hustle Internship Program</h3>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                    <p>Managed a student project to develop a weekly engineering podcast</p>
                </div>
            </div>
        </div>
    )
}

export default PracticalExperience