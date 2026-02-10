function signup() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (user === "" || pass === "") {
        alert("Please fill all fields");
        return;
      }

      alert("Signup successful");
      // signup complete aprm login page
       location.href = "website.html";
    }