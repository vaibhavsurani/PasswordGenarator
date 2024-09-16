const passwordInput = document.getElementById("strongPasswordValue");
const copySuccess = document.getElementById("CopySuccess");
const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");
const generatePassword = document.querySelector(".generatePassword");
const options = document.querySelectorAll(".options input");
for (const opt of options) {
  opt.addEventListener("click", generateStrongPassword);
}

const Characters = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Numbers: "0123456789",
    Symbols: "~!@#$%^&*()_+{}[].,:;|",
  };

  function CopyStrongPassword() {
    if (passwordInput.value !== "") {
      copySuccess.setAttribute("src", "data:image/png;base64,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");
      navigator.clipboard.writeText(passwordInput.value);
  
      setTimeout(function () {
        copySuccess.setAttribute("src", "https://static.thenounproject.com/png/5117212-200.png");
      }, 2000);
    }
  }



  generatePassword.addEventListener("click", generateStrongPassword);
  function generateStrongPassword() {
    let randomPassword = "",
      strongPassword = "",
      excludeDuplicate = false;
  
    options.forEach((option) => {
      if (option.checked && option.id !== "Duplicate") {
        randomPassword += Characters[option.id];
      }
      if (option.checked && option.id === "Duplicate") {
        excludeDuplicate = true;
      }
    });
  
    if (randomPassword !== "") {
      if (excludeDuplicate && randomPassword.length < rangeInput.value) {
        alert(
          "We Can't get password without Duplicate for selected options and length!"
        );
        passwordInput.value = "";
      } else {
        for (let i = 0; i < rangeInput.value; i++) {
          let charAt =
            randomPassword[Math.floor(Math.random() * randomPassword.length)];
          if (excludeDuplicate) {
            !strongPassword.includes(charAt) ? (strongPassword += charAt) : i--;
          } else {
            strongPassword += charAt;
          }
        }
        passwordInput.value = strongPassword;
      }
    } else {
      passwordInput.value = "";
    }
  }