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

function Roomhandler() {
    // var allRooms=document.getElementsByClassName("rooms");
  var Rooms = document.getElementById("room1");
  // allRooms.style.display = "none";
  Rooms.style.background = "red";
  alert("chal raha hon");
  var allRooms = document.getElementById("myroom");
  allRooms.style.display = "block";
    
}



// Function to display Income and Expense cards
function addCards() {
    var allRooms = document.getElementById("myroom");
    const container = document.querySelector('.insight-section');
    const cardsHTML = `
        <div class="expense-income-div">
            <div class="card income-section">
                <div class="icon">
                    <span class="material-symbols-outlined">trending_up</span>
                </div>
                <div class="content">
                    <h2>Income</h2>
                    <p>$10,000</p>
                </div>
            </div>
            <div class="card expense-section">
                <div class="icon">
                    <span class="material-symbols-outlined">trending_down</span>
                </div>
                <div class="content">
                    <h2>Expenses</h2>
                    <p>$5,000</p>
                </div>
            </div>
        </div>
    `;
    container.innerHTML = cardsHTML;
    allRooms.style.display = "none";

}
// Call addCards() when the page is loaded
// window.onload = function() {
//     addCards(); // Display the income and expense cards initially
// };



// Function to display the rooms
function showBothBlocks() {
    const container = document.querySelector('.insight-section');
    const roomCardsHTML = `
        <div class="first-rooms-section">
    <div class="middle">
        <div class="left">
            <h1>Block 1 Rooms</h1>
            <!-- Main Card for Block 1 -->
            <div class="main-card">
                <!-- Sub-card 1 for Block 1 (Rooms 1-3) -->
                <div class="sub-card">
                    <h2>Rooms 1-3</h2>
                    <div class="roomsdiv">
                        <button id="room1" onclick="Roomhandler()">Room 1</button>
                        <button>Room 2</button>
                        <button>Room 3</button>
                    </div>
                </div>

                <!-- Sub-card 2 for Block 1 (Rooms 4-6) -->
                <div class="sub-card">
                    <h2>Rooms 4-6</h2>
                    <div class="roomsdiv">
                        <button>Room 4</button>
                        <button>Room 5</button>
                        <button>Room 6</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="second-rooms-section">
    <div class="middle">
        <div class="left">
            <h1>Block 2 Rooms</h1>
            <!-- Main Card for Block 2 -->
            <div class="main-card">
                <!-- Sub-card 1 for Block 2 (Rooms 1-3) -->
                <div class="sub-card">
                    <h2>Rooms 1-3</h2>
                    <div class="roomsdiv">
                        <button>Room 1</button>
                        <button>Room 2</button>
                        <button>Room 3</button>
                    </div>
                </div>

                <!-- Sub-card 2 for Block 2 (Rooms 4-6) -->
                <div class="sub-card">
                    <h2>Rooms 4-6</h2>
                    <div class="roomsdiv">
                        <button>Room 4</button>
                        <button>Room 5</button>
                        <button>Room 6</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    `;
    container.innerHTML = roomCardsHTML;
}



// =====================Admin Form Js==============


// Event listener for form submission
// Event listener for form submission
// document.getElementById("admin-form").addEventListener("submit", function (e) {
//     e.preventDefault();
  
//     // Get form values
//     const name = document.getElementById("admin-name").value.trim();
//     const email = document.getElementById("admin-email").value.trim();
//     const role = document.getElementById("admin-role").value.trim();
//     const photoURL = document.getElementById("admin-photo").value.trim();
//     const password = document.getElementById("admin-password").value.trim();
//     const confirmPassword = document.getElementById("confirm-password").value.trim();
  
//     // Check if passwords match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
  
//     // Create an object to store the admin data
//     const adminData = {
//       name,
//       email,
//       role,
//       photoURL,
//     };
  
//     // Store the data in localStorage
//     localStorage.setItem("adminProfile", JSON.stringify(adminData));
  
//     // Call the function to update profile immediately
//     updateProfile();
  
//     // Clear the form
//     document.getElementById("admin-form").reset();
  
//     alert("Admin profile created successfully!");
//   });
  
//   // Function to update profile from localStorage
//   function updateProfile() {
//     const savedProfile = localStorage.getItem("adminProfile");
  
//     if (savedProfile) {
//       const profileData = JSON.parse(savedProfile);
  
//       // Only update the profile section
//       const profileName = document.getElementById("profile-name");
//       const profileRole = document.getElementById("profile-role");
//       const profilePhoto = document.getElementById("profile-photo");
  
//       // Update the profile information dynamically
//       profileName.textContent = profileData.name;
//       profileRole.textContent = profileData.role;
//       profilePhoto.src = profileData.photoURL || './default-image.jpg';
//     }
//   }


// Submit handler for creating admin profile

  
  


// =====================Admin Form Js End==========

// =====================admin dropdown==============



// Function to show the form
function showAdminForm() {
    // Ensure the form is visible
    document.getElementById("form-container").style.display = "flex";
  }
  
  // Function to hide the form
  function hideAdminForm() {
    // Hide the form
    document.getElementById("form-container").style.display = "none";
  }
  
  // Wait for the DOM to load before setting up the event listener
  var ShowAdminOnLoad= function() {
    document.getElementById("form-container").style.display = "none";
    
  };


    // On page load, update the profile if data exists in localStorage
    window.onload = function () {

        addCards(); // Display the income and expense cards initially
        // Call updateProfile only if there is data stored in localStorage
    
        ShowAdminOnLoad();
        // if (localStorage.getItem("adminProfile")) {
        //   updateProfile();
          
    
    
        // }
        updateProfile();
      };


    //   ====================Logout Functionaity===============
    // Function to logout the admin (remove data from localStorage)
// Function to logout the admin (remove data from localStorage)
function logoutAdmin() {
    // Remove the admin profile from localStorage
    localStorage.removeItem("adminProfile");
  
    // Optionally, reset form and profile section
    document.getElementById("admin-form").reset(); // Clear the form
    const profileName = document.getElementById("profile-name");
    const profileRole = document.getElementById("profile-role");
    const profilePhoto = document.getElementById("profile-photo");
  
    profileName.textContent = 'Profile';
    profileRole.textContent = 'Role';
    profilePhoto.src = './Assets/images.png'; // Reset to default image
  
    alert("You have logged out successfully!");
  }
  
  // Add event listener for logout
  document.getElementById("logout-button").addEventListener("click", logoutAdmin);



  // Submit handler for creating admin profile
document.getElementById("admin-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Check if the profile already exists in localStorage
    const savedProfile = localStorage.getItem("adminProfile");
    if (savedProfile) {
      alert("Admin profile already exists!");
      return; // Exit if the profile already exists
    }
  
    // Get form values
    const name = document.getElementById("admin-name").value.trim();
    const email = document.getElementById("admin-email").value.trim();
    const role = document.getElementById("admin-role").value.trim();
    const photoURL = document.getElementById("admin-photo").value.trim();
    const password = document.getElementById("admin-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Create admin data object
    const adminData = {
      name,
      email,
      role,
      photoURL,
    };
  
    // Store in localStorage
    localStorage.setItem("adminProfile", JSON.stringify(adminData));
  
    // Update profile immediately
    updateProfile();
  
    // Clear the form
    document.getElementById("admin-form").reset();
  
    alert("Admin profile created successfully!");
  });
// Function to update profile from localStorage
function updateProfile() {
  const savedProfile = localStorage.getItem("adminProfile");

  if (savedProfile) {
    const profileData = JSON.parse(savedProfile);

    // Update the profile section with the data from localStorage
    const profileName = document.getElementById("profile-name");
    const profileRole = document.getElementById("profile-role");
    const profilePhoto = document.getElementById("profile-photo");

    profileName.textContent = profileData.name;
    profileRole.textContent = profileData.role;
    profilePhoto.src = profileData.photoURL || './default-image.jpg';
  } else {
    // If no profile exists, ensure the profile section is empty
    const profileName = document.getElementById("profile-name");
    const profileRole = document.getElementById("profile-role");
    const profilePhoto = document.getElementById("profile-photo");

    profileName.textContent = 'No Profile';
    profileRole.textContent = 'No Role';
    profilePhoto.src = './Assets/images.png'; // Default image
  }
}
// =============================Logout Functionality End================  


// Function to toggle the dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  

// =====================admin dropdown end==========




