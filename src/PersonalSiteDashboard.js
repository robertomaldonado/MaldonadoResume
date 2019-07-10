import React from 'react';
import EducationSection from './components/EducationSection';
import AboutSection from './components/about/AboutSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ResearchExpSection from './components/ResearchExpSection';
import CertSection from './components/CertSection';
import VolunteerSection from './components/VolunteerSection';
import SkillsSection from './components/SkillsSection';

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