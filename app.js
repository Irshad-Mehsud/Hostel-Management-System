// const sideMenu = document.querySelector("aside");
// const menuBtn = document.querySelector("#menu_bar");
// const closeBtn = document.querySelector("#close_btn");
// // menuBtn.document.style.background="red";

// const themeToggler = document.querySelector(".theme-toggler");

// menuBtn.addEventListener("click", () => {
//     sideMenu.style.display = "block";
//     console.log("Menu is now visible");
//     console.log(document.querySelector("aside")); // Should log the <aside> element

// });

// // Optionally, you can add functionality for the close button:
// closeBtn.addEventListener("click", () => {
//     sideMenu.style.display = "none";
//     console.log("Menu is now hidden");

// });

// themeToggler.addEventListener("click",()=>{

//     document.body.classList.toggle("dark-theme-variables")

//     themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
//     themeToggler.querySelector("span:nth-child(2)").classList.toggle("active")
// })

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close_btn");

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active"); // Add 'active' class to make menu visible
  console.log("Menu is now visible");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active"); // Remove 'active' class to hide menu
  console.log("Menu is now hidden");
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// var Rooms=document.getElementsByClassName("rooms");
// Rooms.style.background="red";
// var allRooms=document.getElementById("myroom");
// allRooms.style.display = "none";
function Roomhandler() {
  // var allRooms=document.getElementsByClassName("rooms");
  var Rooms = document.getElementById("room1");
  // allRooms.style.display = "none";
  Rooms.style.background = "red";
  alert("chal raha hon");
  var allRooms = document.getElementById("myroom");
  allRooms.style.display = "block";
}


function AddStudentHandler() {
    const form = document.getElementById('addstudent');
    const backdrop = document.getElementById('addstudent-backdrop');

    // Show the form and backdrop
    form.style.display = 'block';
    backdrop.style.display = 'block';

    // Add event listener to backdrop to close the form
    backdrop.addEventListener('click', CloseAddStudentForm);
}

// Function to hide the form and backdrop
function CloseAddStudentForm() {
    const form = document.getElementById('addstudent');
    const backdrop = document.getElementById('addstudent-backdrop');

    // Hide the form and backdrop
    form.style.display = 'none';
    backdrop.style.display = 'none';
}


function showBothBlocks() {
  const insightContainer = document.querySelector('.insight');
  insightContainer.innerHTML = `
      <!-- Block 1 Rooms -->
      <div class="first-rooms-section">
          <div class="middle">
              <div class="left">
                  <h1>Block 1 Rooms</h1>
                  <div class="roomsdiv">
                      <div class="All-rooms">
                          <button>Room 1</button>
                          <button>Room 2</button>
                          <button>Room 3</button>
                      </div>
                      <div class="All-rooms">
                          <button>Room 4</button>
                          <button>Room 5</button>
                          <button>Room 6</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Block 2 Rooms -->
      <div class="second-rooms-section">
          <div class="middle">
              <div class="left">
                  <h1>Block 2 Rooms</h1>
                  <div class="roomsdiv">
                      <div class="All-rooms">
                          <button onclick="Roomhandler()" id="room1">Room 1</button>
                          <button>Room 2</button>
                          <button>Room 3</button>
                      </div>
                      <div class="All-rooms">
                          <button>Room 4</button>
                          <button>Room 5</button>
                          <button>Room 6</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
}

