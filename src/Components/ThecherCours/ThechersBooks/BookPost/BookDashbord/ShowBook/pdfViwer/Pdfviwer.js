import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';

 function Pdfviwer({pdf}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
   
  return (
   


 <>
<input type="checkbox" id="pdfviwer" className="modal-toggle" />
<div className="modal">

  <div className="modal-box w-11/12 max-w-5xl">
  
  <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div> 
  
     <div className="modal-action">
      <label htmlFor="pdfviwer" className="btn">Yay!</label>
    </div>
  </div>
</div></>
  )
}
export default Pdfviwer