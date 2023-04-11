import React, { useEffect, useState } from "react";

function Questionbank() {
  const [questions, setQuestions] = useState([]);

  /// get question bank
  useEffect(() => {
    fetch("http://localhost:5000/admin/questions")
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
      });
  }, []);

  //delete questions

  const deleteQuestions = id => {
    fetch(`http://localhost:5000/admin/deletquestions/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          const remeningQuestions = questions.filter(
            question => question._id !== id
          );
          setQuestions(remeningQuestions);
        }
      });
  };

  return (
    <div>
      <h1>All Question</h1>

      <form>
        <div class="flex">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            All categories{" "}
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="grid my-9 gap-5 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
        {questions?.map(question => (
          <div className="card bg-base-100 shadow-xl">
            <div className="w-full h-56 p-3 m-auto">
              <iframe
                className="w-full h-full "
                src={`http://localhost:5000${question.pdf.url}`}
              ></iframe>
            </div>

            <div className="card-body">
              <h2 className="card-title">
                Question-Type : {question.questiontype}
              </h2>
              <p>Subject-Name: {question.subjectname}</p>
              {question?.classname && <p>ClassName: {question.classname}</p>}

              <div class="flex items-center space-x-4">
                <img
                  class="w-20 h-20 rounded-full"
                  src={question?.ownerimg}
                  alt=""
                />
                <div class="font-medium dark:text-white">
                  <div>owner: {question?.ownername}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Email: {question.owner}
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteQuestions(question._id)}
                className="btn my-5"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questionbank;
