import React, { useState } from "react";

import { Document, Page } from "react-pdf";

function Book({ book, deleteBook }) {
  const {
    _id,
    pdf,
    bookType,
    aboutbook,
    bookimg,
    authorimg,
    authorname,
    bookname,
    bookprice,
    ownerName,
    ownerimg,
    owner
  } = book;

  console.log(book);

  return (
    <div className="card capitalize card-compact  bg-base-100 shadow-xl">
      <figure className="h-56 ">
        <img className="h-full w-full object-cover" src={bookimg} alt="book" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Book-name: {bookname}</h2>
        <h2 className="card-title">Book-Type: {bookType}</h2>
        <h2 className="card-title">Book-Price: {bookprice}</h2>
        <p>{aboutbook.slice(0, 40) + "..."}</p>
        <button className="btn" onClick={() => deleteBook(_id)}>
          {" "}
          Delete
        </button>
        <hr></hr>
        <div className="flex justify-between items-center">
          <div class="text-center flex  justify-between items-center">
            <img
              src={ownerimg}
              class="  mb-4 mr-2 w-16  h-16 rounded-full"
              alt="Avatar"
            />
            <div>
              <h5 class="mb-2 block text-md font-medium leading-tight">
                owner: {ownerName}
              </h5>
              <h5 class="mb-2 block text-md font-medium leading-tight">
                Email: {owner}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <iframe src={`http://localhost:5000${pdf.url}`} />
    </div>
  );
}

export default Book;
