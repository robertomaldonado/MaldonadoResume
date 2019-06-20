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
                                {skills.map( (skill, k) => 
                                <li key={k}>
                                  <b>{skill.name} </b> |
                                  {/* <ul> */}
                                      {skill.contents.map(
                                          (skill,m) => 
                                        <span key={m}>
                                            { skill } |
                                        </span>
                                      )}
                                  {/* </ul> */}
                                </li>
                                )}
                                <li> <b>Languages</b> </li>
                                {languages.map(
                                  (lang, i) => 
                                  <span key={i} className="column left aligned">
                                    {lang.language}: {lang.fluency} <br/>
                                  </span> 
                                )}
                              <ul>
                            </ul>
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