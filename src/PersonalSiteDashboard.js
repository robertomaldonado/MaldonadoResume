import React from 'react';
import EducationSection from './EducationSection';
import AboutSection from './about/AboutSection';
import WorkExperienceSection from './WorkExperienceSection';
import ResearchExpSection from './ResearchExpSection';
import CertSection from './CertSection';
import VolunteerSection from './VolunteerSection';
import SkillsSection from './SkillsSection';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {detail_items, education_items, work_items, research, 
            certificates, volunteer, languages, skills} = this.props
        return (
            <div> 
                <AboutSection detail_items={detail_items} />
                <EducationSection education_items={education_items} />
                <WorkExperienceSection work_items={work_items} />
                <ResearchExpSection research={research} />
                <VolunteerSection volunteering={volunteer} />
                <CertSection certificates={certificates} />
                <SkillsSection 
                    languages={languages}
                    skills={skills}
                />
            </div>
        );
    }
};

export default PersonalSiteDashboard;