import React from 'react';

class WorkExperienceSection extends React.Component {
    render(){
        return (
            <div className='ui text container'>
            <div className="ui center aligned segment">
                <h3>
                    Work Experience
                </h3>
                <button
                className='ui basic button icon'>
                <i className='plus icon' />
                </button>
            </div>
            </div>
        );
    }
}

export default WorkExperienceSection;