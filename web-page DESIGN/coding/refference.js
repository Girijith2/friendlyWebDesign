class Login {
  constructor() {
    this.email = document.getElementById("email");
    this.pass = document.getElementById("password");
    this.btn = document.getElementById("login");

    let arr=[
        {user:"sarmi" , pass:"149"},
        {user:"giri", pass:"116"}
    ]

    this.btn.addEventListener("click", (u) => {
      u.preventDefault();

      const checks=arr.find(e => 
        e.user === this.email.value && 
        e.pass === this.pass.value);

      if (checks) {
          window.location.assign("login.html");
      }else{
        alert("Try valid email & password");
      }
    });
  }
}

new Login();
