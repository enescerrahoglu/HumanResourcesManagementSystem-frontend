import React, { Component } from 'react'
import CvList from '../pages/cv/CvList'
import CvEducationInformationList from '../pages/cvEducationInformation/CvEducationInformationList'
import JobSeekerList from '../pages/jobSeekers/JobSeekerList'
import UniversityList from '../pages/cvEducationInformation/UniversityList'

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <UniversityList/>
            </div>
        )
    }
}