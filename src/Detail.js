import React from "react";
import './App.css';

const Detail = ({name,phone,email}) => {
    return(
        <div className='ui text container'>
            <div className="ui segment">
                <h3 className="ui center aligned icon header">
                <i className="circular user icon"></i>
                    {name}
                </h3>
                <p class="large text">
                <b>Phone: 
                    </b> {phone} <br /> 
                <b> Email: 
                    </b> {email} <br />
                <b>LinkedIn: </b>  
                    <i className="linkedin icon"></i>  <br />
                <b>Github: </b> 
                    <i className="github icon"></i> <br />
                </p>
            </div>
        </div>
    )
}

export default Detail