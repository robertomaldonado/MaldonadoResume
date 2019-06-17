import React from "react"

const Detail = ({name,phone,email,linkedin,github}) => {
    return(
        <section>
            <h3>{name}</h3>
            <h4>Phone: {phone} | Email: {email} </h4>
            <h4>LinkedIn: {linkedin} </h4>
            <h4>Github: {github}</h4>
        </section>
    )
}

export default Detail