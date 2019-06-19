import React from 'react';
import EducationSection from './EducationSection';
import AboutSection from './about/AboutSection';
import WorkExperienceSection from './WorkExperienceSection';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {details, education, work_items} = this.props
        return (
            <div> 
                <AboutSection details={details} />
                <EducationSection education={education} />
                <WorkExperienceSection work_items={work_items} />
            </div>
        );
    }
};

export default PersonalSiteDashboard;