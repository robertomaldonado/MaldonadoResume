import React from "react";

class EducationSection extends React.Component {
    render(){
        const {education_items}=this.props
        return (
        <div className="ui text container">
            <div className="ui segment">
                <p className="large text"> 
                {/* <div className="ui center aligned icon header"> */}
                    <i class="large graduation cap icon"></i>
                    <b> EDUCATION </b> 
                </p>
                {education_items.map(
                    (item, i) => 
                    <div className="ui text segment">
                    <div className="ui two column stackable center aligned grid">
                      <div className="middle aligned row">
                      <div className="column left aligned">
                            <b> {item.institution} </b> <br />
                            {item.studyType} <br />
                            {/* GPA: {item.gpa}/4.0 */}
                      </div>
                      <div className="column right aligned">
                        {item.area} | {item.startDate} - {item.endDate} 
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
        );
    }
}

export default EducationSection;

// "institution": "Universidad San Francisco de Quito",
//           "area": "Computer Science",
//           "studyType": "Bachelor",
//           "startDate": "August 2010",
//           "endDate": "November 2015",
//           "gpa": "3.5",
//           "courses": [
//             "Basic SQL"
//           ]