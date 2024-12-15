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
                        <button onclick="Roomhandler()">Room 2</button>
                        <button onclick="Roomhandler()">Room 3</button>
                    </div>
                </div>

                <!-- Sub-card 2 for Block 1 (Rooms 4-6) -->
                <div class="sub-card">
                    <h2>Rooms 4-6</h2>
                    <div class="roomsdiv">
                        <button onclick="Roomhandler()">Room 4</button>
                        <button onclick="Roomhandler()">Room 5</button>
                        <button onclick="Roomhandler()">Room 6</button>
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
                        <button onclick="Roomhandler()">Room 1</button>
                        <button onclick="Roomhandler()">Room 2</button>
                        <button onclick="Roomhandler()">Room 3</button>
                    </div>
                </div>

                <!-- Sub-card 2 for Block 2 (Rooms 4-6) -->
                <div class="sub-card">
                    <h2>Rooms 4-6</h2>
                    <div class="roomsdiv">
                        <button onclick="Roomhandler()">Room 4</button>
                        <button onclick="Roomhandler()">Room 5</button>
                        <button onclick="Roomhandler()">Room 6</button>
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
// function validateAndSubmitForm() {
//   // Get form fields
//   const name = document.getElementById("admin-name").value.trim();
//   const email = document.getElementById("admin-email").value.trim();
//   const role = document.getElementById("admin-role").value.trim();
//   const photo = document.getElementById("admin-photo").value.trim();
//   const password = document.getElementById("admin-password").value.trim();
//   const confirmPassword = document.getElementById("confirm-password").value.trim();

//   // Check if all fields are filled
//   if (!name || !email || !role || !photo || !password || !confirmPassword) {
//     alert("Please fill out all fields.");
//     return false; // Prevent form submission
//   }

//   // Check if passwords match
//   if (password !== confirmPassword) {
//     alert("Passwords do not match!");
//     return false; // Prevent form submission
//   }

//   // If validation passes
//   alert("Form submitted successfully!");
//   hideAdminForm(); // Hide the form
//   return true; // Allow form submission
// }

// function hideAdminForm() {
//   const adminForm = document.getElementById("form-container");
//   adminForm.style.display = "none";
// }

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
// Firebase Configuration
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

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// References to Firebase Database
const adminFormDB = firebase.database().ref("adminForm");
const studentFormDB = firebase.database().ref("StudentForm");

/**
 * Admin Form Functionality
 */
// Handle Admin Form Submission
document.getElementById("admin-form").addEventListener("submit", function submitAdminForm(e) {
  e.preventDefault(); // Prevent form refresh

  // Get Admin Form Values
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

  // Prepare Admin Data
  const adminData = {
    name: adminName,
    email: adminEmail,
    role: adminRole,
    photo: adminPhoto || './Assets/images.png', // Default photo
    password: adminPassword // Consider hashing in production
  };

  // Save Admin Data to Firebase
  adminFormDB.push(adminData).then(() => {
    alert(`${adminData.role} added successfully!`);
    updateProfile(adminData);
    hideAdminForm();
    document.getElementById("admin-form").reset(); // Reset form
  }).catch(error => {
    console.error("Error saving admin data:", error);
    alert("Failed to add admin. Try again.");
  });
});

// Update Profile Section
function updateProfile(data) {
  document.getElementById("profile-name").textContent = data.name || "No Profile";
  document.getElementById("profile-role").textContent = data.role || "No Role";
  document.getElementById("profile-photo").src = data.photo || "./Assets/images.png";
}

// Hide Admin Form
function hideAdminForm() {
  document.getElementById("form-container").style.display = "none";
}

// Load Admin Profile on Init
document.addEventListener("DOMContentLoaded", function loadAdminProfile() {
  adminFormDB.once("value").then(snapshot => {
    const data = snapshot.val();
    if (data) {
      const latestAdmin = Object.values(data).pop(); // Get the most recent admin
      updateProfile(latestAdmin);
    } else {
      console.log("No admin profiles found.");
    }
  }).catch(error => {
    console.error("Error loading admin profile:", error);
  });
});

/**
 * Student Form Functionality
 */
// Handle Student Form Submission
document.getElementById("Addstdform").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get Student Form Values
  const name = document.getElementById("name").value.trim();
  const fatherName = document.getElementById("father_name").value.trim();
  const cnic = document.getElementById("cnic").value.trim();
  const address = document.getElementById("address").value.trim();
  const blockNo = document.getElementById("block_no").value.trim();
  const roomNo = document.getElementById("room_no").value.trim();
  const photoUrl = document.getElementById("photo_url").value.trim();

  // Validate Required Fields
  if (!name || !fatherName || !cnic || !address || !blockNo || !roomNo || !photoUrl) {
    alert("Please fill all fields.");
    return;
  }

  // Check Room Capacity
  checkRoomCapacity(blockNo, roomNo).then(isRoomFull => {
    if (isRoomFull) {
      alert(`Room ${roomNo} in Block ${blockNo} is full! No more than 4 students can be added.`);
    } else {
      // Prepare Student Data
      const studentData = { name, fatherName, cnic, address, blockNo, roomNo, photo: photoUrl };

      // Save Student Data to Firebase
      studentFormDB.push(studentData).then(() => {
        alert("Student added successfully!");
        document.getElementById("Addstdform").reset(); // Reset form
        fetchStudents(roomNo); // Refresh students table
      }).catch(error => {
        console.error("Error saving student data:", error);
        alert("Failed to add student. Try again.");
      });
    }
  });
});

// Check Room Capacity
async function checkRoomCapacity(blockNo, roomNo) {
  const snapshot = await studentFormDB.get();
  const students = snapshot.val();
  let studentCount = 0;

  if (students) {
    Object.values(students).forEach(student => {
      if (student.blockNo == blockNo && student.roomNo == roomNo) {
        studentCount++;
      }
    });
  }

  return studentCount >= 4; // True if room is full
}

// Fetch and Display Students
function fetchStudents(roomNo) {
  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = `        
     <thead>
              <th>Name</th>
              <th>CNIC</th>
              <th>Address</th>
              <th>Block No</th>
              <th>Room No</th>
              <th>Photo</th>
      </thead>
      `; // Clear existing rows

  studentFormDB.get().then(snapshot => {
    const students = snapshot.val();
    if (students) {
      Object.values(students).forEach(student => {
        if (student.roomNo == roomNo) {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.cnic}</td>
            <td>${student.address}</td>
            <td>${student.blockNo}</td>
            <td>${student.roomNo}</td>
            <td><img src="${student.photo}" alt="Photo" width="50"></td>
          `;
          tableBody.appendChild(row);
        }
      });
    } else {
      tableBody.innerHTML = `<tr><td colspan="6">No students found in this room</td></tr>`;
    }
  }).catch(error => {
    console.error("Error fetching students:", error);
  });
}
const roomNo = document.getElementById("room_no").value.trim();

// Initial Fetch of Students in Room 1



window.onload = function () {
  // fetchStudents();
  // loadProfileOnInit();
  fetchStudents(roomNo);
  hideAdminForm()
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
