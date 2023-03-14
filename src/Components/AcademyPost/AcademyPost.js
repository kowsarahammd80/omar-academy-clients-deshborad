import React from "react";



const AcademyPost = () => {

  return (
    <div>
     
      {/* course post */}

      <div className="mt-5 mb-5">

        <div className="card mx-3 lg:mx-0 bg-blue-200 shadow-xl">

          <div className="card-body">

             {/* head line */}

              <div className="text-2xl lg:text-3xl font-semibold  text-center">

                  <h1>Academy Course Post</h1>

              </div>

            <form className="mx-5">

              <p className="font-semibold mb-3">Course Image</p>

              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
              />

              <p className="font-semibold mb-3">Course's Teacher Image</p>

              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
              />

              <p className="font-semibold mb-3">Course's Video Upload here</p>

              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
              />

              {/* input grid start */}

              <div className="grid-none lg:grid grid-cols-2 gap-3">

                <div>

                  <p className="font-semibold mb-3"> Video count </p>

                  <input
                    type="text"
                    placeholder="example 50+"
                    className="input input-bordered w-full mb-3 lg:mb-0"
                  />

                </div>

                <div>

                  <p className="font-semibold mb-3"> Chapter </p>

                  <input
                    type="text"
                    placeholder="example 50+"
                    className="input input-bordered w-full mb-3 lg:mb-0"
                  />

                </div>

                <div>

                  <p className="font-semibold mb-3"> Video count </p>

                  <input
                    type="text"
                    placeholder="example 50+"
                    className="input input-bordered w-full mb-3 lg:mb-0"
                  />

                </div>

                <div>

                  <p className="font-semibold mb-3"> Video count </p>

                  <input
                    type="text"
                    placeholder="example 50+"
                    className="input input-bordered w-full mb-3 lg:mb-0"
                  />

                </div>

               
              </div>

              {/* input grid end */}
                

              <textarea className="textarea textarea-bordered w-full mt-5" placeholder="Course Details"></textarea>


            </form>

            <div className="card-actions justify-end mt-5">
              <button className="btn bg-orange-500">Post</button>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AcademyPost;
