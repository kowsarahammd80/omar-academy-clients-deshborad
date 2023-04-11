import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Auth/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const BookPost = () => {
    const {user}=useContext(AuthContext)
    const [file, setFile] = useState(null);
    const [keyPoint, setKeypoint] = useState([{ name: "" }]);
    const [chapters,setChapters] = useState([{ name: "", details: "" }]);
    const [bookType, setBooktype] = useState('');
    const [bookname,setBookname]=useState("")
    const [bookprice,setBookprice]=useState("")
    const [authorname,setAuthorname]=useState("")
    const [bookimg, setBookimg] = useState("");
    const [authorimg, setAuthorimg] = useState("");
    const [aboutbook,setAboutbook]=useState("")
  


    const navigate=useNavigate()
  
    

    ///book img
    const  handlebookThumnil = (e) => {
      const img = e.target.files[0];
      const formData = new FormData();
      formData.append("image", img);
      const url =
        "https://api.imgbb.com/1/upload?key=1378f6494e6b39ad2fd39769a2d2ffef";
  
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const img = imgData.data.url;
          setBookimg(img);
        })
        .catch((e) => {
          alert("internet  problem");
        });
    };

    const  handleAuthorimg = (e) => {
      const img = e.target.files[0];
      const formData = new FormData();
      formData.append("image", img);
      const url =
        "https://api.imgbb.com/1/upload?key=1378f6494e6b39ad2fd39769a2d2ffef";
  
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const img = imgData.data.url;
          setAuthorimg(img);
        })
        .catch((e) => {
          alert("internet  problem");
        });
    };
  
    const handleChapterNameChange = (index, event) => {
      const newChapters = [...chapters];
      newChapters[index].name = event.target.value;
      setChapters(newChapters);
    };
  
    const handleChapterDetailsChange = (index, event) => {
      const newChapters = [...chapters];
      newChapters[index].details = event.target.value;
      setChapters(newChapters);
    };
  
    const handleAddChapter = () => {
      setChapters([...chapters, { name: "", details: "" }]);
    };
  
    ///key point add
  
  
    const handleKeypoint = () => {
      setKeypoint([...keyPoint, { name: "", details: "" }]);
    };
  
    const handleKeypointName = (index, event) => {
      const newkeyPoint = [...keyPoint];
      newkeyPoint[index].name = event.target.value;
      setKeypoint(newkeyPoint);
    };
  
    //type of cours
    
    const handleSelectChange = (event) => {
      setBooktype(event.target.value);
    }



    //save book 
    const handlebook = async(event) => {
      event.preventDefault();
      
      const formData = new FormData();

    

      for (let i = 0; i < chapters.length; i++) {
       console.log(chapters[i]," here chapter all chapter is here ")
       formData.append("chapters", JSON.stringify(chapters[i]))
      }

      for (let i = 0; i < keyPoint.length; i++) {
        formData.append("keyPoint",JSON.stringify(keyPoint[i]));
   
      }
      formData.append("pdf", file);
      formData.append("bookname",bookname );
      formData.append("bookType",bookType );
      formData.append("bookprice",bookprice);
      formData.append("authorname",authorname);
      formData.append("authorimg",authorimg);
      formData.append("bookimg",bookimg);
      formData.append("aboutbook",aboutbook);
      formData.append("owner", user?.email);
      formData.append("ownerName", user?.displayName);
      formData.append("ownerimg", user?.photoURL);
      
       
  
      axios
        .post("http://localhost:5000/books", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data)
   
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
             Book post 
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
                    <p className="text-xl font-semibold">Book Details</p>
                  </div>
  
                  <div className="mt-3 mb-2 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div>
                      <p className="font-semibold mb-2">Book Name</p>
                      <input
                        type="text"
                        required
                        name="bookname"
                        onChange={(e)=>setBookname(e.target.value)}
                        placeholder="book name"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                  
       <p  className="font-semibold pb-2 capitalize text-md"> <label htmlFor="selectOption">Book Type</label></p>
        <select required className="p-3 select select-bordered w-full max-w-xs" id="selectOption" onChange={handleSelectChange}>
          <option  className="select select-bordered w-full max-w-xs" value="" selected>please select your  Book Type </option>
          <option className="select select-bordered w-full max-w-xs" value="Academic">Academic</option>
          <option className="select select-bordered w-full max-w-xs" value="universityAdmission">University-Test</option>
          <option className="select select-bordered w-full max-w-xs" value="jobpreParetion">Jobs-Preparession</option>
  
        </select>
       
      </div>
  
                    <div>
                      <p className="font-semibold mb-2">Book thumnil</p>
                      <input
                        required
                        onChange={ handlebookThumnil}
                        accept="image/*"
                        type="file"
                        name="image"
                        id="image"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Book Price</p>
                      <input
                        required
                        placeholder="Taka:500"
                        name="price"
                        type="number"
                        onChange={(e)=>setBookprice(e.target.value)}
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
  
                  <div className="mt-5">
                    <p className="font-semibold text-xl">
                     Book Author Details
                    </p>
                  </div>
  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3 mb-3">
                    <div>
                      <p className="font-semibold mb-2">Author Name</p>
  
                      <input
                        type="text"
                        required
                        name="AuthorName"
                        onChange={(e)=>setAuthorname(e.target.value)}
                        placeholder="Type here"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold mb-2"> Author Image</p>
                      <input
                        onChange={ handleAuthorimg}
                        accept="image/*"
                        type="file"
                        name="image"
                        id="image"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-5 lg:mt-10 mb-5">
                    <h1 className="text-xl font-semibold">
                       index
                    </h1>
                  </div>
                  <div>
                    {keyPoint.map((keyp, index) => (
                      <div key={index}>
                        <label className="font-semibold">
                            some index here
                          <input
                            type="text"
                            className="input input-bordered w-full mb-3"
                            value={keyp.name}
                            placeholder="algebra"
                            onChange={(event) => handleKeypointName(index, event)}
                          />
                        </label>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleKeypoint}
                      className="add-subject mt-5 mb-2"
                    >
                    Add more index
                    </button>
                  </div>
  
                  <div>
                    <textarea
                      name="aboutbook"
                      onChange={(e)=>setAboutbook(e.target.value)}
                      className="textarea textarea-bordered w-full mt-5"
                      placeholder="write in more details about this book "
                    ></textarea>
                  </div>
  
                  <div>
                    <h1 className="text-xl font-semibold mt-5 lg:mt-10 mb-3">
                      Features
                    </h1>
                  </div>
  
                  <div className="grid grid-cols-2 gap-4">
                    {chapters.map((chapter, index) => (
                      <div key={index}>
                        <label className="font-semibold">
                          Chapter {index + 1} name:
                          <input
                            type="text"
                            value={chapter.name}
                            className="input input-bordered w-full mb-2"
                            onChange={(event) =>
                              handleChapterNameChange(index, event)
                            }
                          />
                        </label>
  
                        <label className="font-semibold">
                          Chapter {index + 1} details:
                          <input
                            value={chapter.details}
                            className="input input-bordered w-full"
                            onChange={(event) =>
                              handleChapterDetailsChange(index, event)
                            }
                          />
                        </label>
                      </div>
                    ))}
                  </div>
  
                  <button
                    type="button"
                    onClick={handleAddChapter}
                    className="add-chapter-button mt-5"
                  >
                    Add chapter
                  </button>
  
                  <div>
                    <h1 className="text-xl font-semibold mt-5 lg:mt-10">
                    Add summary
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
};

export default BookPost
