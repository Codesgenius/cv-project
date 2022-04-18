import React from 'react'
import './userdetail.css'

const UserDetail = ({ label, detail }) => {
    return (
        <div className='user-detail-con'>
            <span className='user-label'>{label} : </span>
            <span className='user-detail'>{detail}</span>
        </div>
    )
}

export default UserDetail