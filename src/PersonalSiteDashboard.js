import React from 'react';
// import AboutSection from './AboutSection';
// import EducationSection from './EducationSection';
import Detail from './Detail';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {details} = this.props
        return (
            <div>
                {/* <AboutSection details={aboutMe} />
                <EducationSection /> */}
                {details.map(
                    (detail, i) => 
                        <Detail 
                            key={i} 
                            name={detail.name}
                            phone={detail.phone}
                            email = {detail.email}
                            github={detail.github}
                            linkedin={detail.linkedin}
                        />
                )}
            </div>
        );
    }
};

export default PersonalSiteDashboard;