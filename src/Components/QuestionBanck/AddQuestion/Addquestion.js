import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import axios from 'axios';


 function Addquestion() {
    const {user}=useContext(AuthContext)
    const [file, setFile] = useState(null);
    const [questiontype, setQuestiontype] = useState('');
    const [subjectname, setSubjectname]=useState("")
    const [className,setClassname]=useState("")
    
    


    const  handleClassChange=(e)=>{
         setClassname(e.target.value)
    } 
  


    const navigate=useNavigate()
    //type of cours
    
    const handleSelectChange = (event) => {
      setQuestiontype(event.target.value);
    }



    //save book 
    const handlebook = async(event) => {
      event.preventDefault();
      
      const formData = new FormData();

    

      
      formData.append("pdf", file);
      formData.append("subjectname",subjectname );
      formData.append("questiontype",questiontype );
      formData.append("classname",className? className:"");
      formData.append("owner",user?.email);
      axios
        .post("http://localhost:5000/questionbank", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data)
          navigate("/teacherQuestionbank")
          // handle success
        })
        .catch((error) => {
          console.log(error);
          // handle error
        }); 
      
    };
  
    return (
      <div>
        {/* headline */}
  
        <div className="text-center mt-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">
             Question  post 
          </h1>
        </div>
        {/* post input */}
        <div className="mx-5">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-center ">
                {/* form start */}
  
                <form onSubmit={handlebook} enctype="multipart/form-data">
                  <div className="">
                    <p className="text-xl font-semibold">Question Details</p>
                  </div>
  
                  <div className="mt-3 mb-2 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                      <p className="font-semibold mb-2">Subject Name</p>
                      <input
                        type="text"
                        required
                        name="subjectname"
                        onChange={(e)=> setSubjectname(e.target.value)}
                        placeholder="maths"
                        className="input input-bordered w-full"
                      />
                    </div>

                  

                    <div>  
       <p  className="font-semibold pb-2 capitalize text-md"> <label htmlFor="selectOption">Question Type</label></p>
        <select required className="p-3 select select-bordered w-full max-w-xs" id="selectOption" onChange={handleSelectChange}>
          <option  className="select select-bordered w-full max-w-xs" value="" selected>please select your  Question  Type </option>
          <option className="select select-bordered w-full max-w-xs" value="Academic">Academic</option>
          <option className="select select-bordered w-full max-w-xs" value="universityAdmission">University-Test</option>
          <option className="select select-bordered w-full max-w-xs" value="jobpreParetion">Jobs-Preparession</option>
  
        </select>
       
      </div>





  
                    <div>
                      <p className="font-semibold mb-2">Question Title</p>
                      <input
                        required
                   
                        type="text"
                        name="questiontitile"
                        placeholder='math question '
                        className="input input-bordered w-full"
                      />
                    </div>

                    
             
  

  {
    questiontype==="Academic" && <div>
                  
    <p  className="font-semibold pb-2 capitalize text-md"> <label htmlFor="selectOption">class</label></p>
     <select required className="p-3 select select-bordered w-full max-w-xs" id="selectOption" onChange={handleClassChange}>
       <option  className="select select-bordered w-full max-w-xs" value="" selected>please select class </option>
       <option className="select select-bordered w-full max-w-xs" value="10">class 10</option>
       <option className="select select-bordered w-full max-w-xs" value="11">class 11</option>
       <option className="select select-bordered w-full max-w-xs" value="12">class 12</option>

     </select>
    
   </div>
  }

     
                   
                  </div>







                  
                    
                  <div>
                    <h1 className="text-xl font-semibold mt-5 lg:mt-10">
                    Add  Question 
                    </h1>
                  </div>
  
                  <div className="grid grid-cols-2 gap-3 mt-5">
                  <input   type="file" id="pdf" onChange={(e) => setFile(e.target.files[0])} />
                  </div>
                  <div className="flex justify-center">
                    <button type="submit" className="academy-post-button mt-6">
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>     
    
  );
}

export default Addquestion
