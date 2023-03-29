import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import GoogleSignIn from "../../GooleSingIn/GoogleSignIn";
import './SignIn.css'

const Sign = () => {

  const {loginUser} = useContext(AuthContext)

  const handleAdminLogin = (event) => {
    event.preventDefault()
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
     
  }

  return (

    <div className="mx-3">

      <div className="mt-16 lg:mt-16 xl:mt-16 mb-10 text-center">

        <h1 className="text-2xl lg:text-4xl xl:text-4xl font-semibold">

          Welcome to Amor Academy Admin Panel

        </h1>

      </div>

      {/* singIn form  */}

      <div className="flex justify-center items-center mt-10">

        <div className="card shadow-xl w-full lg:w-3/5 md:w-full xl:w-3/5">

          <div className="card-body">

             <div className="text-center font-semibold">

                <h1 className="text-2xl font-serif">Sign In</h1>

             </div>

             <div className="text-center font-bold text-red-500">

                 <p> Do you have an admin account ? </p>

                 <Link className="text-center text-blue-500"> Register Now </Link>

              </div>

             {/* form Start */}

             <form onSubmit={handleAdminLogin} className="flex justify-center mt-5">

                    
                <div className="w-full mx-0 lg:mx-10 xl:mx-10">

                  <input type="text" name="email" placeholder="Email" className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10" />

                  <input type="password" name="password" placeholder="password" className="input input-bordered w-full" />

                  <button type="submit" className="mt-10 bg-blue-400 w-full sign-in-button">Sign In</button>
                          
                  <GoogleSignIn/>
                         
                </div>

             </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sign;
