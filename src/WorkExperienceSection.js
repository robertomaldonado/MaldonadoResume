import React from 'react';

class WorkExperienceSection extends React.Component {
    render(){
        const {work_items}=this.props
        return (
            <div className="ui text container">
                <div className="ui segment">
                    <p className="large text">
                        <i className="large briefcase icon"></i>
                        <b> WORK EXPERIENCE </b> 
                    </p>
                    { work_items.map(
                        (work_item, i) => 
                        <div className="ui text segment" key={i}>
                        <div className="ui two column stackable left aligned grid">
                          <div className="middle aligned row">
                          <div className="column left aligned">
                            <b>{work_item.company}</b> <br />
                            <b>{work_item.position}</b> <br />
                          </div >
                          <div className="column right aligned">
                            {work_item.location} | {work_item.startDate} - {work_item.endDate} 
                          </div>  
                          <div className="">
                          <ul>
                              {work_item.highlights.map( (highlight, k) =>
                              <li key={k}>{highlight}</li>
                              )}
                            </ul>
                          </div>
                          </div>
                        </div>
                        </div>
                    )}
                    {/* <button
                    className="ui basic button icon">
                    <i className="plus icon" />
                    </button> */}
                </div>
            </div>
            )
    }
}

export default WorkExperienceSection;