import React from 'react';
import EducationSection from './EducationSection';
import AboutSection from './about/AboutSection';
import WorkExperienceSection from './WorkExperienceSection';
import ResearchExpSection from './ResearchExpSection';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {detail_items, education_items, work_items, research} = this.props
        return (
            <div> 
                <AboutSection detail_items={detail_items} />
                <EducationSection education_items={education_items} />
                <WorkExperienceSection work_items={work_items} />
                <ResearchExpSection research={research} />
            </div>
        );
    }
};

export default PersonalSiteDashboard;