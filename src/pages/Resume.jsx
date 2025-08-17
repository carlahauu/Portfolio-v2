import React from 'react'
import ResumePDF from '../assets/Resume.pdf'

function Resume() {
  return (
    <div>
        <h3>Want a copy of my resume? <a style={{color: "#9BB657", textDecoration: "underline"}} href={ResumePDF}>Click here to download my resume!</a></h3>
        <object 
            style={{backgroundColor: "white"}}
            data={ResumePDF}
            type="application/pdf"
            width="100%"
            height="550px"
        >
        </object>
    </div>
  )
}

export default Resume