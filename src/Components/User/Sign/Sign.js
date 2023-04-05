import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveuserInfo } from "../../../api/userinfo/userinfo";
import useToken from "../../../CustomHook/useToken";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import GoogleSignIn from "../../GooleSingIn/GoogleSignIn";
import "./SignIn.css";


const Sign = () => {

  const { loginUser, loading, setLoading, forgatPassword, emailVerification} = useContext(AuthContext);

  const [userEmailForForgetPassword, setUserEmailForForgetPassword] =
    useState("");

  const navigate = useNavigate()
   
    const[singinEmail,setSinginEmail]=useState("")

    const [error, setError] = useState("")

    const[token]=useToken(singinEmail)



      if(token){
        navigate('/dashboard')
      }


  const handleAdminLogin = (event) => {

    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then((result) => {
      
      const user = result.user;
      console.log(user);
     

      const information = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
      };

     //get  token 
     

     setSinginEmail(user?.email)


       ///sava info data base
      saveuserInfo(information)
     
      if(loading){
        return <h1>loading...</h1>
      }
    
      
    })
    .catch(e => {
      console.error(e)
      setError(e.message)
    })
    
  };

  const emailBlurHandle = (event) => {

    const email = event.target.value;
    setUserEmailForForgetPassword(email);
    //  console.log(email)

  };

  const forgetPasswordHandle = () => {
    
    if (!userEmailForForgetPassword) {
      alert("Please provide your email address");
      return;
    }

    forgatPassword(userEmailForForgetPassword)
      .then(() => {
        alert("Reset password link send your email. Please check your email");
      })
      .catch((e) => console.error(e));

  };


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

            {/* form Start */}

            <form
              onSubmit={handleAdminLogin}
              className="flex justify-center mt-5"
            >
              <div className="w-full mx-0 lg:mx-28 xl:mx-28">
                <input
                 onBlur={emailBlurHandle}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mb-5 lg:mb-10 xl:mb-10"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                />

                <div className="text-center font-bold text-red-500 my-4 grid-node lg:grid xl:grid md:grid grid-cols-2">

                  <p> Do you have an admin account ? </p>

                  <Link to="/signUp" className="text-center text-blue-500">

                    Register Now
                    
                  </Link>

                </div>

                <p className="font-semibold text-red-500 my-5">{error}</p>

                <button
                  type="submit"
                  className="mt-8 bg-blue-400 w-full sign-in-button"
                >
                  Sign In
                </button>

             

                <p
                    onClick={forgetPasswordHandle}
                    className="text-blue-600 font-semibold mb-5 lg:mb-10 text-center cursor-pointer"
                  >
                    Forget password?
                  </p>

              </div>


            </form>

            <div>   <GoogleSignIn /></div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sign;
