import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

 function AddThecher() {

 const [img,setImage]=useState("")
 
 const navigate=useNavigate()
 

    const handleImageHost = (e) => {

        const img = e.target.files[0];
        const formData = new FormData();
        formData.append("image", img);
    
        fetch(
          `https://api.imgbb.com/1/upload?key=1378f6494e6b39ad2fd39769a2d2ffef`,
          {
            method: "POST",
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((imageData) => {
            const image = imageData.data.display_url;
            console.log(image);
            setImage(image);
          })
          .catch((e) => console.log(e));
      };



      //save thecher
    const  saveThecher=(e)=>{
        e.preventDefault()
  const from=e.target
   const  name=from.name.value
   const  email=from.email.value 
const number=from.number.value
   const info={
    name,
    email,
    photoURL:img,
    role: "thecher",
    phonNumber:number   
   }


    fetch(`http://localhost:5000/addThecher/${info.email}`,{
        method: 'PUT',
        headers: {
            authorization:`bearer ${localStorage.getItem("accessToken")} `,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        from.reset()
        setImage("")
        navigate("/allusers/thecher")
        toast.success("thecher add succesfully")
    })
    }




 

  return (
    <div className="mx-3">


    {/* singIn form  */}

    <div className="flex justify-center items-center mt-10 mb-5">

      <div className="card shadow-xl w-full lg:w-3/5 md:w-full xl:w-3/5 bg-slate-100">

        <div className="card-body">

          <div className="text-center font-semibold">

            <h1 className="text-2xl font-serif">Add Thecher</h1>

          </div>


          <div className="flex justify-center my-3">

            {img && (
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} alt="" />
                </div>
              </div>

            )}

          </div>

          {/* form Start */}

          <form onSubmit={saveThecher} className="flex justify-center mt-5">

            <div className="w-full mx-0 lg:mx-28 xl:mx-28">

              <input
                onChange={handleImageHost}
                type="file"
                name="image"
                placeholder="image"
                className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
              />

              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
              />
              <input
                type="number"
                required
                name="number"
                placeholder="Phone"
                className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
              />



 



               <button
                type="submit"
                className="mt-8 bg-blue-400 w-full sign-in-button"
               >
                 Add
               </button>
            </div>

          </form>

        </div>

      </div>

    </div>

  </div>
  )
}



export default AddThecher





