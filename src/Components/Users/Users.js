import React from "react";

const Users = () => {
  return (
    <div>
      {/* headline */}
      <div className="text-center font-bold">
        <h1 className="text-2xl lg:text-4xl mt-5 mb-5 lg:mt-10 lg:mb-8">
          {" "}
          User List{" "}
        </h1>
      </div>

      {/* user list  */}

      <div>

        <div className="overflow-x-auto w-full">

          <table className="table w-full">

            {/* head */}

            <thead>

              <tr>
                <th>
                  image
                </th>

                <th>Name</th>
                <th>email</th>
                <th>Phone Number</th>
                <th>User Type</th>

              </tr>

            </thead>

            <tbody>

              {/* row 1 */}
              
              <tr>

                <th>

                <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://thumbs.dreamstime.com/z/cute-girl-backpack-29662670.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                 
                </th>

                <td>

                  <div className="flex items-center space-x-3">
                    

                    <div>

                      <div className="font-bold">Aftab Nagar</div>
                      <div className="text-md">Dhaka</div>

                    </div>

                  </div>
                </td>

                <td>
                  example@gmail.com
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Collage Student
                  </span>
                </td>

                <td>O1234567890</td>

                <th>
                  <button className="btn btn-ghost btn-xs">Normal Users</button>
                </th>

              </tr>
              {/* row 2 */}
              
              {/* row 3 */}
              
              {/* row 4 */}
              
            </tbody>
            {/* foot */}
          
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
