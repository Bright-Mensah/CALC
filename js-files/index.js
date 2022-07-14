// display the toast message
$(".toast").toast("show");

let form = document.getElementById("forms");

let btn = (document.querySelector(".btn").onclick = () => {
  form.onclick = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;

    if (name === "") {
      localStorage.setItem("userName", "user");
      document.querySelector(".btn").classList.add("hideBtn");
      document.querySelector(".hideAnim").classList.add("showAnim");

      wait();
    } else {
      localStorage.setItem("userName", name);
      document.querySelector(".btn").classList.add("hideBtn");
      document.querySelector(".hideAnim").classList.add("showAnim");
      wait();
    }
  };
});

function wait() {
  setTimeout(() => {
    window.location.href = "./calc.html";
  }, 4000);
}

// get the addition form
let additionForm = document.getElementById("addition-form");

let addBtn = (document.querySelector(".addBtn").onclick = (e) => {
  e.preventDefault();
  //  get first number and second number
  let firstNumber = parseInt(document.getElementById("fNumber").value);
  let secondNumber = parseInt(document.getElementById("sNumber").value);
  let getLoader = document.querySelector(".addAnim");
  let getBtn = document.querySelector(".addBtn");
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
    additionForm.onclick = (e) => {
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
        let result = firstNumber + secondNumber;
        displayResult.classList.add("showResult");
        displayResult.innerHTML = `The result for adding  ${firstNumber} + ${secondNumber}  is  ${(showResult.innerHTML =
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

//  addition ends here
