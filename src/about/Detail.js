import React from "react";
import '../App.css';

const Detail = ({name,phone,email,location}) => {
    return(
        <div className='ui text container'>
            <div className="ui text segment">
            <div className="ui two column stackable center aligned grid"></div>
            <div className="ui segment center aligned">
            <p className="large text"> 
                {/* <div className="ui center aligned icon header"> */}
                    <i class="large address card outline icon"></i>
                    <b> {name} </b> 
                </p>
                <p class="large text">
                <b>Phone: 
                    </b> {phone} <br /> 
                <b>Email: 
                    </b> {email} <br />
                <i className="location arrow icon"></i>
                    {location.city},{location.region} <br />
                <b>LinkedIn: </b>  
                    <i className="linkedin icon"></i> | 
                <b> Github: </b> 
                    <i className="github icon"></i> <br />
                </p>
                This site was built with React JS components and a customized version of JSON Resume Schema. 
                Source code can be found in my <a href="./" > github </a>.
            </div>
        </div>
        </div>
    )
}

export default Detail