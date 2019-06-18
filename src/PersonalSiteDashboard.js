import React from 'react';
import EducationSection from './EducationSection';
import AboutSection from './AboutSection';
import WorkExperienceSection from './WorkExperienceSection';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {details, education} = this.props
        return (
            <div> 
                <AboutSection details={details} />
                <EducationSection education={education} />
                <WorkExperienceSection />
            </div>
        );
    }
};

export default PersonalSiteDashboard;