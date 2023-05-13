import React from 'react'

export default function ContentTemplate() {
  return (
    <div style={{position:'relative'}} >
        <div>
            <img src={require('../assets/bg-img.jpg')} alt="udemy logo" style={{width:'550px',position:'absolute',zIndex:'-1',left:'0px' }}/>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', border:'1px solid gray',zIndex:'1' }}>
            <h1 style={{textAlign:'center',fontSize:'14px'}}>Certificate of Completion</h1>
            <h3 style={{textAlign:'center',fontSize:'8px'}}>This is to certify that</h3>
            <h1 style={{textAlign:'center',fontSize:'14px'}}>John Doe</h1>
            <h3 style={{textAlign:'center',fontSize:'8px'}}>has completed the course</h3>
            <h1 style={{textAlign:'center',fontSize:'14px'}}>PDF Generation - PDF Generation in reactjs using jsPDF</h1>
            <h3 style={{textAlign:'center',fontSize:'8px'}}>with score of</h3>
            <h1 style={{textAlign:'center',fontSize:'14px'}}>100%</h1>
            <h3 style={{textAlign:'center',fontSize:'8px'}}>on 1st January 2021</h3>
        </div>
    </div>
  )
}
