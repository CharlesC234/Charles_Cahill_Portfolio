function Submit() {
  var x = document.getElementById("password").value;
  console.log(x);
  var url = "/login";
  var data = { password: x };
  var options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.accessToken != null) {
      } else {
        document.getElementsByClassName(
          "form__input-error-message"
        )[0].innerHTML = "Wrong Password";
      }
    });
}
