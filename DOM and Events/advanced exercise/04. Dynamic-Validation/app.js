function validate() { 
  const emailInput = document.getElementById("email");
  const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

  function handleChange() {
    const email = emailInput.value;

    if (!emailRegex.test(email)) {
      emailInput.classList.add("error");
    } else {
      const emailLowercase = email.toLowerCase();
      if (email !== emailLowercase) {
        emailInput.classList.add("error");
      } else {
        emailInput.classList.remove("error");
      }
    }
  }
  emailInput.addEventListener("change", handleChange);
}