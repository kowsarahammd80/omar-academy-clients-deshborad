import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const AdminAvatar = () => {

  const {user} = useContext(AuthContext)

  return (

    <div className="">

          <div className="avatar ml-10">

            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

              <img
                src={user?.photoURL}
                alt="admin"
              />

            </div>

          </div>

          <div className="mt-5 mb-10 ml-5">

            <p className="text-md font-semibold ">{user?.displayName}</p>
            
            <p className="text-sm font-semibold ">{user?.email}</p>

          </div>
          
        </div>

  );
};

export default AdminAvatar;
