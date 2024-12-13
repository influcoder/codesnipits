const dummyUser = [
  {
    email: "user1@gmail.com",
    password: "abc123",
  },
  {
    email: "user2@gmail.com",
    password: "xyz123",
  },
];

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "Please Fill in All Fields";
  } else {
    const isUser = dummyUser.some(
      (user) => user.email === email && user.password === password
    );

    if (isUser) {
      message.style.color = "#4c7f78";
      message.textContent = "LOGIN SUCCESSFUL !";
    } else {
      message.style.color = "red";
      message.textContent = "INVALID EMAIL OR PASSWORD.";
    }
  }
});
