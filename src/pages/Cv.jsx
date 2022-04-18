import React from 'react'
import './cv.css'
import EducationExperience from '../sections/EducationExperience'
import GeneralInformation from '../sections/GeneralInformation'
import PracticalExperience from '../sections/PracticalExperience'

const Cv = () => {
  return (
    <div className='cv-con'>
      <GeneralInformation />
      <EducationExperience />
      <PracticalExperience />
    </div>
  )
}

export default Cv