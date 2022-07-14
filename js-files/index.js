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
    window.location.href = "html-files/./calc.html";
  }, 5000);
}
