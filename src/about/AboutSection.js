import React from 'react';
import Detail from './Detail';

class AboutSection extends React.Component {
    render(){
        const {details}=this.props
        return (
            <Detail 
                    key={details.id} 
                    name={details.name}
                    phone={details.phone}
                    email = {details.email}
                    github={details.github}
                    linkedin={details.linkedin}
                />
        );
    }
}

export default AboutSection;