import React from 'react'

 function Confirmation({title,msg, img, closemodal,  successAction,modalData}) {
  return (
<>


<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal  text-center">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
   <div className='flex w-20 m-auto h-20 justify-center my-2 items-center'>
    {
      img ?  <img  src={img} className="rounded-full w-20 h-20 object-cover text-center" />:  <img  src="https://i.ibb.co/T47bsjy/download.png" className="rounded-full" />
    }
  
   </div>
    <p className="py-4">{msg}</p>
    <div className="modal-action">
      <label  onClick={()=>successAction(modalData)} htmlFor="confirmation-modal" className="btn">Delete</label>
    <button className='btn' onClick={closemodal}>cancel</button>
    </div>
  </div>
</div>

</>
  )
}






export default  Confirmation 