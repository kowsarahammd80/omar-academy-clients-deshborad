import React, { useState } from 'react'
import Pdfviwer from './pdfViwer/Pdfviwer'
import { Document, Page } from 'react-pdf';

 function Sbook({book}) {
    const {pdf,bookType,aboutbook,bookimg, authorimg,authorname,bookname,bookprice}=book
    
  return (
<div className="card capitalize card-compact  bg-base-100 shadow-xl">
  <figure className='h-56 '><img className='h-full w-full object-cover' src={bookimg} alt="book" /></figure>
  <div className="card-body">
    <h2 className="card-title">name: {bookname}</h2>
    <p>{aboutbook.slice(0, 40)+ '...'}</p>
    <hr></hr>
    <div className="flex justify-between items-center">
    <div class="text-center flex  justify-start items-center">
  <img
    src={authorimg}
    class="mx-auto mb-4 mr-2 w-16  rounded-full"
    alt="Avatar" />
  <h5 class="mb-2 text-md font-medium leading-tight">{authorname}</h5>

</div>
    </div>
  </div>

  <iframe  src={`http://localhost:5000${pdf.url}`}/>


</div>
  )
}


export default Sbook