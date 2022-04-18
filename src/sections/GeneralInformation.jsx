import React from 'react'
import './generalinformation.css'
import UserDetail from '../components/UserDetail'

const GeneralInformation = () => {
    return (
        <div className='section-main-con'>
            <h1>Sanni Habib</h1>
            <h3>Frontend Web Developer</h3>
            <div className='user-detail-grid'>
                <UserDetail label="Phone" detail="23470 3358 298" />
                <UserDetail label="LinkedIn" detail="https://linkedin.com/in/sanni-habib-t" />
                <UserDetail label="Email" detail="santosdboss@gmail.com" />
                <UserDetail label="Twitter" detail="https://twitter.com/sannihabibt" />
            </div>
        </div>
    )
}

export default GeneralInformation