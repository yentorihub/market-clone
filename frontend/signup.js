const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");

  if (password1 === password2) {
    return true;
  } else return false;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);
  console.log(formData.get("password"));

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data === "200") {
      div.innerText = "비밀번호가 일치합니다";
      div.style.color = "green";
    }
  } else {
    div.innerText = "비밀번호가 일치하지 않습니다.";
    div.style.color = "red";
  }

  const res = await fetch("/signup", {
    method: "POST",
    body: formData,
  });
};

form.addEventListener("submit", handleSubmit);
