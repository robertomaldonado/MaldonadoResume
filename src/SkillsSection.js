import React from 'react'

class SkillsSection extends React.Component{
    render(){
        const {languages, skills} = this.props
         return(
            <div className="ui text container" >
                <div className="ui segment">
                    <p className="large text">
                        <i className="large code icon"></i>
                        <b> SKILLS </b> 
                    </p>
                    <div className="ui text segment">
                        <div className="ui two column stackable left aligned grid">
                          <div className="middle aligned row">
                          <ul>
                          {/* {certificates.map(
                          (cert, i) => 
                            // {key={i}}
                            <li key={i} >
                              <div className="column left aligned">
                                <b>{cert.title}</b>
                                ({cert.date})
                              </div> 
                            </li> 
                          )} */}
                          </ul>
                          </div>
                        </div>
                    </div>
                    {/* <button
                    className="ui basic button icon">
                    <i className="plus icon" />
                    </button> */}
                </div>
            </div>
        )
    }
}

export default SkillsSection