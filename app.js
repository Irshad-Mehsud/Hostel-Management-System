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
//=============11/12/2024=========================
//================Form Show and Hide Functionaity================ 
function validateAndSubmitForm() {
  // Get form fields
  const name = document.getElementById("admin-name").value.trim();
  const email = document.getElementById("admin-email").value.trim();
  const role = document.getElementById("admin-role").value.trim();
  const photo = document.getElementById("admin-photo").value.trim();
  const password = document.getElementById("admin-password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  // Check if all fields are filled
  if (!name || !email || !role || !photo || !password || !confirmPassword) {
    alert("Please fill out all fields.");
    return false; // Prevent form submission
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false; // Prevent form submission
  }

  // If validation passes
  alert("Form submitted successfully!");
  hideAdminForm(); // Hide the form
  return true; // Allow form submission
}

function hideAdminForm() {
  const adminForm = document.getElementById("form-container");
  adminForm.style.display = "none";
}

function showAdminForm(){
  let adminForm=document.getElementById("form-container");
  adminForm.style.display="flex";
}
// Check visibility on window load

//================Form Show and Hide Functionaity End================ 

//==============To Show and Hide the Dropdown==================
function toggleDropdown() {
  const dropdown = document.getElementById("profile-dropdown");
  if (dropdown) {
    // Check current display state and toggle
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
}
// Close the dropdown menu when clicking outside
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("profile-dropdown");
  const profile = document.querySelector(".profile");
  // Check if the click is outside the dropdown and profile
  if (dropdown && !profile.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
//==============To Show and Hide the Dropdown  End==================
// Firebase configuration
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBhFbglhN1Qoig5tlkWhhD0zrF6MNgPVE",
  authDomain: "hostel-management-system-4725f.firebaseapp.com",
  databaseURL: "https://hostel-management-system-4725f-default-rtdb.firebaseio.com",
  projectId: "hostel-management-system-4725f",
  storageBucket: "hostel-management-system-4725f.appspot.com",
  messagingSenderId: "172390574707",
  appId: "1:172390574707:web:000114bf8d124e0cf09806",
  measurementId: "G-41P2WQQ19F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const adminFormDB = firebase.database().ref("adminForm");

// Listen for form submission
document.getElementById("admin-form").addEventListener("submit", submitAdminForm);

function submitAdminForm(e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const adminName = document.getElementById("admin-name").value;
  const adminEmail = document.getElementById("admin-email").value;
  const adminRole = document.getElementById("admin-role").value;
  const adminPhoto = document.getElementById("admin-photo").value;
  const adminPassword = document.getElementById("admin-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if passwords match
  if (adminPassword !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Prepare the data object
  const adminData = {
    name: adminName,
    email: adminEmail,
    role: adminRole,
    photo: adminPhoto || './Assets/images.png', // Default photo if none provided
    password: adminPassword, // In production, consider hashing the password
  };

  // Save data to Firebase Realtime Database
  adminFormDB.push(adminData)
    .then(() => {
      // Show success alert with the role
      showAlert(adminData);

      // Optionally, update the profile section on the UI with the newly added data
      updateProfile(adminData);

      // Hide the form (optional)
      hideAdminForm();
    })
    .catch((error) => {
      console.error("Error saving data to Firebase:", error);
      alert("An error occurred. Please try again.");
    });

  // Reset the form
  document.getElementById("admin-form").reset();
}

function hideAddStudentOption(role) {
  const addStudentOption = document.getElementById("add-student-option");

  if (role === "Student") {
    // Hide the Add Student option if role is "Student"
    addStudentOption.style.display = "none";
  } else {
    // Ensure the Add Student option is visible for other roles
    addStudentOption.style.display = "flex";
  }
}

// Update the profile section with data from Firebase
function updateProfile(data) {
  const profileName = document.getElementById("profile-name");
  const profileRole = document.getElementById("profile-role");
  const profilePhoto = document.getElementById("profile-photo");

  if (data) {
    profileName.textContent = data.name || "No Profile";
    profileRole.textContent = data.role || "No Role";
    profilePhoto.src = data.photo || "./Assets/images.png";
  } else {
    profileName.textContent = "No Profile";
    profileRole.textContent = "No Role";
    profilePhoto.src = "./Assets/images.png";
  }
}

// Load profile data from Firebase on page load (or reload)
function loadProfileOnInit() {
  // Fetch data from Firebase
  adminFormDB.once("value")
    .then(snapshot => {
      const profileData = snapshot.val();

      if (profileData) {
        // Extract and sort profiles by 'createdAt'
        const profiles = Object.entries(profileData)
          .map(([key, value]) => ({ key, ...value }))
          .filter(profile => profile.createdAt) // Ensure 'createdAt' exists
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Descending by 'createdAt'

        if (profiles.length > 0) {
          const latestProfile = profiles[0];
          updateProfile(latestProfile); // Update UI with the latest profile
        } else {
          console.log("No profiles found with valid 'createdAt'.");
          updateDefaultProfile();
        }
      } else {
        console.log("No data available in Firebase.");
        updateDefaultProfile();
      }
    })
    .catch(error => {
      console.error("Error loading data from Firebase:", error);
    });
}

// Default profile updater
// function updateDefaultProfile() {
//   updateProfile({
//     name: "No Profile",
//     role: "No Role",
//     photo: "./Assets/images.png",
//   });
// }


// Hide the admin form after successful submission
function hideAdminForm() {
  const adminForm = document.getElementById("form-container");
  adminForm.style.display = "none";
}

// Initialize the profile data on page load
document.addEventListener("DOMContentLoaded", loadProfileOnInit);


// Function to hide the Add Student option based on role
function hideAddStudentOption(role) {
  const addStudentOption = document.getElementById("add-student-option");

  if (role === "Student") {
    // Hide the Add Student option if role is "Student"
    addStudentOption.style.display = "none";
  } else {
    // Ensure the Add Student option is visible for other roles
    addStudentOption.style.display = "flex";
  }
}




function hideAddStudentOption(role) {
  const addStudentOption = document.getElementById("add-student-option");

  if (role === "Student") {
    // Hide the Add Student option if role is "Student"
    addStudentOption.style.display = "none";
  } else {
    // Ensure the Add Student option is visible for other roles
    addStudentOption.style.display = "flex";
  }
}

// ============================Adding student to tabble======================
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const firebaseConfig = {
//   apiKey: "AIzaSyDBhFbglhN1Qoig5tlkWhhD0zrF6MNgPVE",
//   authDomain: "hostel-management-system-4725f.firebaseapp.com",
//   databaseURL:
//     "https://hostel-management-system-4725f-default-rtdb.firebaseio.com",
//   projectId: "hostel-management-system-4725f",
//   storageBucket: "hostel-management-system-4725f.appspot.com",
//   messagingSenderId: "172390574707",
//   appId: "1:172390574707:web:000114bf8d124e0cf09806",
//   measurementId: "G-41P2WQQ19F",
// };

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Reference to Firebase Realtime Database
const studentFormDB = firebase.database().ref("StudentForm");

// Handle Form Submission
document
  .getElementById("Addstdform")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    CloseAddStudentForm()
    // Collect student data from the form
    const name = document.getElementById("name").value.trim();
    const fatherName = document
      .getElementById("father_name")
      .value.trim();
    const cnic = document.getElementById("cnic").value.trim();
    const address = document.getElementById("address").value.trim();
    const blockNo = document.getElementById("block_no").value.trim();
    const roomNo = document.getElementById("room_no").value.trim();
    const photoUrl = document.getElementById("photo_url").value.trim();

    // Validate required fields
    if (
      !name ||
      !fatherName ||
      !cnic ||
      !address ||
      !blockNo ||
      !roomNo ||
      !photoUrl
    ) {
      alert("Please fill in all fields, including the photo URL.");
      return;
    }

    // Prepare the student data object
    const studentData = {
      name,
      fatherName,
      cnic,
      address,
      blockNo,
      roomNo,
      photo: photoUrl,
    };

    // Log the data to console for debugging
    console.log("Student Data to Push:", studentData);

    // Push student data to Firebase
    studentFormDB
      .push(studentData)
      .then(() => {
        alert("Student added successfully!");
        document.getElementById("Addstdform").reset(); // Reset the form after successful submission
        fetchStudents(); // Refresh the table to show the new data
      })
      .catch((error) => {
        console.error("Error sending data to Firebase:", error);
        // alert("Failed to send data. Check console for details.");
      });
  });



window.onload = function () {
  // fetchStudents();
  loadProfileOnInit();
 hideAdminForm();
 addCards();
};
// ============================Adding student to tabble end======================


// function updateProfile(data) {
//   const profileName = document.getElementById("profile-name");
//   const profileRole = document.getElementById("profile-role");
//   const profilePhoto = document.getElementById("profile-photo");

//   if (data) {
//     profileName.textContent = data.name || "No Profile";
//     profileRole.textContent = data.role || "No Role";
//     profilePhoto.src = data.photo || "./Assets/images.png";
//   } else {
//     profileName.textContent = "No Profile";
//     profileRole.textContent = "No Role";
//     profilePhoto.src = "./Assets/images.png";
//   }
// }

function hideAdminForm() {
  const adminForm = document.getElementById("form-container");
  adminForm.style.display = "none";
  
}


// Function to show the alert box and start the progress bar
function showAlert(adminData) {
  const alertBox = document.getElementById("alertBox");
  const progressBar = document.getElementById("progressBar");
  const roleSpan = document.getElementById("Role-spn");

  // Set role-specific message
  if (adminData.role === "Admin") {
    roleSpan.textContent = "Admin Created";
  } else if (adminData.role === "Student") {
    roleSpan.textContent = "Student Registered";
  } else {
    roleSpan.textContent = "User Created";
  }

  // Display the alert box
  alertBox.style.display = "block";

  // Start filling the progress bar
  setTimeout(() => {
    progressBar.style.width = "100%";
  }, 100); // Slight delay for smoother animation

  // Automatically hide the alert after the progress bar animation completes
  setTimeout(() => {
    alertBox.style.animation = "fadeOut 0.5s ease forwards";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 500); // Matches fadeOut duration
  }, 3000); // Matches progress bar duration
  hideAddStudentOption(adminData.role)
}





// ===================Alert box js end==========================



























function viewProfile() {
  alert("Viewing profile...");
  // Logic to display profile details
}

function loadProfileForEditing() {
  alert("Loading profile for editing...");
  // Logic to load profile data into the editing form
}

function logoutAdmin() {
  alert("Logging out...");
  // Logic for admin logout
}
