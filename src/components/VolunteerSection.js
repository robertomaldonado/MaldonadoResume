import React from 'react'

class VolunteerSection extends React.Component{
    render(){
        const {volunteering} = this.props
        return(
            <div className="ui text container">
                <div className="ui segment">
                    <p className="large text">
                        <i className="large thumbs up icon"></i>
                        <b> VOLUNTEERING </b> 
                    </p>
                    { volunteering.map(
                        (volunt_item, i) => 
                        <div className="ui text segment"  key={i}>
                        <div className="ui two column stackable left aligned grid">
                          <div className="middle aligned row">
                          <div className="column left aligned">
                            <b>{volunt_item.organization}</b> <br />
                            {volunt_item.position}
                          </div >
                          <div className="column right aligned">
                            {volunt_item.location} | {volunt_item.startDate}
                          </div>  
                          <div className="">
                          <ul>
                              {volunt_item.highlights.map( (highlight, k) =>
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

export default VolunteerSection