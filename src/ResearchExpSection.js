import React from 'react';

class ResearchExpSection extends React.Component {
    render(){
        const {research}=this.props
        return (
            <div className="ui text container">
                <div className="ui segment">
                    <p className="large text">
                        <i className="large folder open icon"></i>
                        <b> PROJECT - RESEARCH EXPERIENCE </b> 
                    </p>
                    { research.map(
                        (research_item, i) => 
                        <div className="ui text segment"  key={i}>
                        <div className="ui two column stackable left aligned grid">
                          <div className="middle aligned row">
                          <div className="column left aligned">
                            <b>{research_item.name}</b> <br />
                          </div >
                          <div className="column right aligned">
                            {research_item.location} | {research_item.releaseDate}
                          </div>  
                          <div className="">
                          <ul>
                              {research_item.highlights.map( (highlight, k) =>
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

export default ResearchExpSection;