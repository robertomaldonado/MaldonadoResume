import React from "react"
import '../App.css'

const Detail = ({name,phone,email,location}) => {
    return(
        <div className='ui text container'>
            <div className="ui text segment">
            <div className="ui two column stackable center aligned grid"></div>
            <div className="ui segment center aligned">
                <h2> {name} </h2> 
                <p className="large text">
                {/* <b>Phone: 
                    </b> {phone} <br />  */}
                <b>Email: 
                    </b> {email} <br />
                <a target="blank" href="https://www.google.com/maps/d/viewer?msa=0&mid=1FH6ia4pV462HVCwHUJZT3cJyVfM&ll=30.39646700000002%2C-84.35447599999998&z=17" >
                  <i className="location arrow icon"></i>
                </a>
                    {location.city},{location.region} <br />
                <b>LinkedIn: </b>  
                    <a target="blank" href="https://www.linkedin.com/in/roberto-maldonado-470009116/" >
                        <i className="linkedin icon"></i>
                    </a>
                <b> Github: </b> 
                    <a target="blank" href="https://github.com/robertomaldonado/" >
                        <i className="github icon"></i> <br />
                    </a>
                </p>
                This site was built with React JS components and a customized version of JSON Resume Schema. 
                Source code can be found in <a target="blank" href="https://github.com/robertomaldonado/MaldonadoResume/" > my github repository</a>.
            </div>
        </div>
        </div>
    )
}

export default Detail