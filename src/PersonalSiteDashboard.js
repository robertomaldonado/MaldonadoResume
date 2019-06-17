import React from 'react';
// import AboutSection from './AboutSection';
// import EducationSection from './EducationSection';
import Detail from './Detail';

export class PersonalSiteDashboard extends React.Component {
    
    render(){
        const {details} = this.props
        return (
            <div> 
                <Detail 
                    key={details.id} 
                    name={details.name}
                    phone={details.phone}
                    email = {details.email}
                    github={details.github}
                    linkedin={details.linkedin}
                />
            </div>
        );
    }
};

export default PersonalSiteDashboard;