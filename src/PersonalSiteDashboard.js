import React from 'react';
import EducationSection from './EducationSection';
import AboutSection from './about/AboutSection';
import WorkExperienceSection from './WorkExperienceSection';
import ResearchExpSection from './ResearchExpSection';
import CertSection from './CertSection';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {detail_items, education_items, work_items, research, certificates} = this.props
        return (
            <div> 
                <AboutSection detail_items={detail_items} />
                <EducationSection education_items={education_items} />
                <WorkExperienceSection work_items={work_items} />
                <ResearchExpSection research={research} />
                <CertSection certificates={certificates} />
            </div>
        );
    }
};

export default PersonalSiteDashboard;