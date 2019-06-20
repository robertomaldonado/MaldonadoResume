import React from 'react'

class VolunteerSection extends React.Component{
    render(){
        const {volunteering} = this.props
        return(
            <div className="ui text container">
                <div className="ui segment">
                    <p className="large text">
                        <i className="large thumbs up outline icon"></i>
                        <b> VOLUNTEERING </b> 
                    </p>
                    <div className="ui text segment">
                        <div className="ui two column stackable left aligned grid">
                          <div className="middle aligned row">
                          { volunteering.map(
                          (volunteer_item, i) =>
                              <div className="column left aligned" key={i}>
                                <b>{volunteer_item.organization}</b> | {volunteer_item.position} ({volunteer_item.startDate})
                                <ul>
                                { volunteer_item.highlights.map(
                                    (item, k) => 
                                    <li key={k}>
                                        {item}
                                    </li>
                                )
                                }
                                </ul>
                              </div> 
                             
                          )}
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

export default VolunteerSection