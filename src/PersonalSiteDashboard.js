import React from 'react';
import EducationSection from './EducationSection';
import AboutSection from './about/AboutSection';
import WorkExperienceSection from './WorkExperienceSection';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {detail_items, education_items, work_items} = this.props
        return (
            <div> 
                <AboutSection detail_items={detail_items} />
                <EducationSection education_items={education_items} />
                <WorkExperienceSection work_items={work_items} />
            </div>
        );
    }
};

export default PersonalSiteDashboard;