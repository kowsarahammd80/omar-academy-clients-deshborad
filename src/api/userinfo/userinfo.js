//save user info

export const saveuserInfo = (info) => {
  fetch(`http://localhost:5000/user/${info?.email}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
