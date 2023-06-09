import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveuserInfo } from "../../../api/userinfo/userinfo";
import useToken from "../../../CustomHook/useToken";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import GoogleSignIn from "../../GooleSingIn/GoogleSignIn";



const SignUp = () => {

  const { signUpUser, setProfile, emailVerification } = useContext(AuthContext);

  const [imageShow, setImageShow] = useState("");
  const navigate = useNavigate()
  const [signUpEmail,setSingupEmail]=useState("")
  const [error, setError] = useState("")
  const [token]=useToken(signUpEmail)


   if(token){
    navigate('/')
   }


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
        setImageShow(image);
      })
      .catch((e) => console.log(e));
  };

  const handleSignUp = (event,) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    


   signUpUser(email,password)
   .then(result => {
     const user = result.user

    //  email verification
     emailVerification().then(() => {
      alert("Please check your email address for email verification")
    })
     const profile = {
      displayName: name,
      photoURL: imageShow,
    }

    setProfile(profile)
    .then(() => {
      const information = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL:imageShow,
      };
  
//get  token
setSingupEmail(user?.email)

//save data base 
      saveuserInfo(information)
  
    

    })




   
   })
   .catch(e => {
    console.error(e)
    setError(e.message)
  })
  
  };

 


  return (

    <div className="mx-3">

      <div className="mt-16 lg:mt-16 xl:mt-16 mb-10 text-center">

        <h1 className="text-2xl lg:text-4xl xl:text-4xl font-semibold">

          Welcome to Amor Academy Admin Panel

        </h1>

      </div>

      {/* singIn form  */}

      <div className="flex justify-center items-center mt-10 mb-5">

        <div className="card shadow-xl w-full lg:w-3/5 md:w-full xl:w-3/5">

          <div className="card-body">

            <div className="text-center font-semibold">

              <h1 className="text-2xl font-serif">Sign Up</h1>

            </div>


            <div className="flex justify-center my-3">

              {imageShow && (
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={imageShow} alt="" />
                  </div>
                </div>

              )}

            </div>

            {/* form Start */}

            <form onSubmit={handleSignUp} className="flex justify-center mt-5">

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
                  placeholder="Full Name"
                  className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full mb-3"
                />

                <div className="text-center font-bold text-red-500">

                  <p> Already have an admin account ? </p>

                      <Link to="/" className="text-center text-blue-500"> Sign In Now </Link>

                </div>

                <p className="font-semibold text-red-500 my-5">

                  {error}

                </p>

                 <button
                  type="submit"
                  className="mt-8 bg-blue-400 w-full sign-in-button"
                 >

                  Sign Up

                 </button>

             

              </div>

            </form>

            <div>
            <GoogleSignIn/>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default SignUp;
