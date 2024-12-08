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
  
    profileName.textContent = 'No Profile';
    profileRole.textContent = 'No Role';
    profilePhoto.src = './Assets/images.png'; // Reset to default image
  
    alert("You have logged out successfully!");
  }
      //   ====================Logout Functionaity End===============

    //   ====================Admin Creating and Edit Functionaity===============

// Function to handle form submission for creating or updating the profile
document.getElementById("admin-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("admin-name").value.trim();
  const email = document.getElementById("admin-email").value.trim();
  const role = document.getElementById("admin-role").value.trim();
  const photoURL = document.getElementById("admin-photo").value.trim();
  const password = document.getElementById("admin-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  // Validate passwords
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const adminData = { name, email, role, photoURL };

  // Check if profile exists
  if (localStorage.getItem("adminProfile")) {
    localStorage.setItem("adminProfile", JSON.stringify(adminData));
    alert("Admin profile updated successfully!");
  } else {
    localStorage.setItem("adminProfile", JSON.stringify(adminData));
    alert("Admin profile created successfully!");
  }

  updateProfile();
  hideAdminForm();
  document.getElementById("admin-form").reset();
});

function loadProfileForEditing() {
  const savedProfile = localStorage.getItem("adminProfile");
  if (!savedProfile) {
    alert("No profile found to edit!");
    return;
  }

  const adminProfile = JSON.parse(savedProfile);
  document.getElementById("admin-name").value = adminProfile.name;
  document.getElementById("admin-email").value = adminProfile.email;
  document.getElementById("admin-role").value = adminProfile.role;
  document.getElementById("admin-photo").value = adminProfile.photoURL;

  document.getElementById("form-container").style.display = "flex";
}

function hideAdminForm() {
  document.getElementById("form-container").style.display = "none";
}

function updateProfile() {
  const savedProfile = localStorage.getItem("adminProfile");
  const profileName = document.getElementById("profile-name");
  const profileRole = document.getElementById("profile-role");
  const profilePhoto = document.getElementById("profile-photo");

  if (savedProfile) {
    const profileData = JSON.parse(savedProfile);
    profileName.textContent = profileData.name;
    profileRole.textContent = profileData.role;
    profilePhoto.src = profileData.photoURL || "./Assets/images.png";
  } else {
    profileName.textContent = "No Profile";
    profileRole.textContent = "No Role";
    profilePhoto.src = "./Assets/images.png";
  }
}

// Wait for the DOM to fully load before adding the event listener
document.addEventListener("DOMContentLoaded", () => {
  const roleSelect = document.getElementById("admin-role");
  const addStudentOption = document.getElementById("add-student-option");
  const Submitbtn = document.getElementById("Submitbtn");

  // Add an event listener for the button click
  Submitbtn.addEventListener("click", function () {
    const selectedRole = roleSelect.value; // Get the selected role
    if (selectedRole === "Student") {
      addStudentOption.style.display = "none"; // Hide if role is Student
    } else {
      addStudentOption.style.display = "flex"; // Show otherwise
    }
  });

  // Initial check in case a default value is set
  if (roleSelect.value === "Student") {
    addStudentOption.style.display = "none";
  }
});



    //   ====================Admin Creating and Edit Functionaity End=============== 
// Function to toggle the dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  

// =====================admin dropdown end==========



// ==========================view profile ==========================
document.addEventListener("DOMContentLoaded", function() {
  // Function to view the profile
  function viewProfile() {
    const savedProfile = localStorage.getItem("adminProfile");
    const view_profile = document.getElementById("container");

    if (savedProfile) {
      const profileData = JSON.parse(savedProfile);
      view_profile.style.display = "flex"; // Make sure the profile card is visible
      view_profile.innerHTML = `
        <div class="profile-card">
          <button class="close-btn" id="close-button">×</button>
          <div class="profile-header">
            <img id="profile-photo" class="profile-img" 
                src="${profileData.photoURL || './Assets/images.png'}" 
                alt="Profile Photo" />
            <h2 id="profile-name">${profileData.name || 'No Name'}</h2>
          </div>
          <div class="profile-details">
            <p><strong>Email:</strong> <span id="profile-email">${profileData.email || 'No Email'}</span></p>
            <p><strong>Role:</strong> <span id="profile-role">${profileData.role || 'No Role'}</span></p>
          </div>
        </div>
      `;
       function closeProfileCard() {
    const view_profile = document.getElementById("container");
   
    if (view_profile) {
      view_profile.style.display = "none"; // Hide the profile container
    } else {
      console.error("Container element not found.");
    }
  }
      // Attach event listener to the close button after content is inserted
      const closeButton = document.querySelector("#close-button");
      if (closeButton) {
        closeButton.addEventListener("click", closeProfileCard);
      }

    } else {
      view_profile.style.display = "flex"; // Ensure the profile container is visible
      view_profile.innerHTML = `<p>No Profile Data Found</p>`;
    }
  }

  // Function to close the profile card
 

  // Call viewProfile when needed (you can hook it up to a button or event)
  document.getElementById("view-profile-btn").addEventListener("click", viewProfile);
  document.getElementById("close-button").addEventListener("click", closeProfileCard());

});

// ============================view profile end======================================
