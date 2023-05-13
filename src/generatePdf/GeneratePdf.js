import jsPDF from 'jspdf'
import React, { useRef } from 'react'
import ContentTemplate from './ContentTemplate'

export default function GeneratePdf() {

    const certificateContentRef = useRef(null)

    const handleGeneratePdf = () => {
        const doc = new jsPDF({
            orientation: 'landscape',
            format:"a4",
            unit:"px",
        })

        doc.html(certificateContentRef.current,{
            callback: function (doc) {
                doc.save("certificate.pdf")
            }
        })
    }

  return (
    <div style={{padding:'40px'}}>
        <h3 style={{alignItems:'center'}}>Ticket Generator</h3>
        <button onClick={handleGeneratePdf}>Generate PDF</button>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div  ref={certificateContentRef} style={{width:'550px',padding:'30px'}}>
                <ContentTemplate/>
            </div>
        </div>
        
    </div>
  )
}
