let back = document.querySelector(".a-tag");

back.addEventListener("click", () => {
  location.replace("/CALC/html-files/calc.html");
});

// get the subtraction form
let subtractionForm = document.getElementById("subtraction-form");

let subBtn = (document.querySelector(".subBtn").onclick = (e) => {
  e.preventDefault();
  //  get first number and second number
  let firstNumber = parseInt(document.getElementById("fNumber").value);
  let secondNumber = parseInt(document.getElementById("sNumber").value);
  let getLoader = document.querySelector(".addAnim");
  let getBtn = document.querySelector(".subBtn");
  let displayResult = document.querySelector(".addition-result");
  let showResult = document.querySelector("#result");

  // check if first number and last number are not empty
  if (
    document.getElementById("fNumber").value === "" &&
    document.getElementById("sNumber").value === ""
  ) {
    //  don't do anything since the required validation is already there
  } else if (document.getElementById("sNumber").value === "") {
    // alert('sdsd')
  } else {
    subtractionForm.onclick = (e) => {
      e.preventDefault();
      getBtn.classList.add("hideBtn");
      getLoader.classList.add("showAddAnim");

      getResult();
      setTimeout(() => {
        function reload() {
          location.reload();
        }
        reload();
      }, 12000);
    };

    let getResult = () => {
      setTimeout(() => {
        getLoader.classList.remove("showAddAnim");
        let result = firstNumber - secondNumber;
        displayResult.classList.add("showResult");
        displayResult.innerHTML = `The result for adding  ${firstNumber} - ${secondNumber}  is  ${(showResult.innerHTML =
          result)} `;
        setTimeout(() => {
          getBtn.classList.remove("hideBtn");
          displayResult.classList.remove("showResult");
          document.getElementById("fNumber").value = "";
          document.getElementById("sNumber").value = "";
        }, 5000);
      }, 6000);
    };
  }
});

//  subtraction ends here
