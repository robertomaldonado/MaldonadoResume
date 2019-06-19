import React from 'react';
import Detail from './Detail';

class AboutSection extends React.Component {
    render(){
        const {detail_items}=this.props
        return (
            <Detail 
                    key={detail_items.id} 
                    name={detail_items.name}
                    phone={detail_items.phone}
                    email = {detail_items.email}
                    github={detail_items.github}
                    linkedin={detail_items.linkedin}
                />
        );
    }
}

export default AboutSection;