
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

function Roomhandler(event) {
  const button = event.target; // Get the clicked button
  const roomNumber = button.textContent; // Get the room number from the button text

  // Highlight the selected room
  document.querySelectorAll('.roomsdiv button').forEach(btn => btn.style.background = '');
  button.style.background = 'red';

  // Fetch and display students for the selected room
  alert(`Loading details for ${roomNumber}`);
  
  // Dynamically fetch students from Firebase for the selected room
  fetchStudents(roomNumber);
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
                              <button id="room1" onclick="Roomhandler(event)">Room 1</button>
                              <button onclick="Roomhandler(event)">Room 2</button>
                              <button onclick="Roomhandler(event)">Room 3</button>
                          </div>
                      </div>

                      <!-- Sub-card 2 for Block 1 (Rooms 4-6) -->
                      <div class="sub-card">
                          <h2>Rooms 4-6</h2>
                          <div class="roomsdiv">
                              <button onclick="Roomhandler(event)">Room 4</button>
                              <button onclick="Roomhandler(event)">Room 5</button>
                              <button onclick="Roomhandler(event)">Room 6</button>
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
                              <button onclick="Roomhandler(event)">Room 1</button>
                              <button onclick="Roomhandler(event)">Room 2</button>
                              <button onclick="Roomhandler(event)">Room 3</button>
                          </div>
                      </div>

                      <!-- Sub-card 2 for Block 2 (Rooms 4-6) -->
                      <div class="sub-card">
                          <h2>Rooms 4-6</h2>
                          <div class="roomsdiv">
                              <button onclick="Roomhandler(event)">Room 4</button>
                              <button onclick="Roomhandler(event)">Room 5</button>
                              <button onclick="Roomhandler(event)">Room 6</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
  container.innerHTML = roomCardsHTML;
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

  // Check if Admin already exists only when creating a new admin
  const adminRole = document.getElementById("admin-role").value;
  if (adminRole === "Admin") {
    adminFormDB.once("value").then(snapshot => {
      const existingAdmins = snapshot.val();
      if (existingAdmins) {
        // If an admin already exists, alert and stop the form submission
        const adminExists = Object.values(existingAdmins).some(admin => admin.role === "Admin");
        if (adminExists) {
          alert("An admin already exists. You cannot create another admin.");
          return; // Stop the admin form submission
        }
      }

      // Get Admin Form Values
      const adminName = document.getElementById("admin-name").value;
      const adminEmail = document.getElementById("admin-email").value;
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
    }).catch(error => {
      console.error("Error checking for existing admins:", error);
    });
  } else {
    // If the role is not Admin, proceed with the form submission (e.g., adding student)
    const adminName = document.getElementById("admin-name").value;
    const adminEmail = document.getElementById("admin-email").value;
    const adminRole = document.getElementById("admin-role").value;
    const adminPhoto = document.getElementById("admin-photo").value;
    const adminPassword = document.getElementById("admin-password").value;

    // Prepare Admin Data (this should allow role change, as it's not for creating an admin)
    const adminData = {
      name: adminName,
      email: adminEmail,
      role: adminRole,
      photo: adminPhoto || './Assets/images.png', // Default photo
      password: adminPassword // Consider hashing in production
    };

    // Save Admin Data to Firebase
    adminFormDB.push(adminData).then(() => {
      alert(`${adminData.role} updated successfully!`);
      updateProfile(adminData);
      hideAdminForm();
      document.getElementById("admin-form").reset(); // Reset form
    }).catch(error => {
      console.error("Error saving admin data:", error);
      alert("Failed to update admin. Try again.");
    });
  }
});

// Update Profile Section
function updateProfile(data) {
  document.getElementById("profile-name").textContent = data.name || "No Profile";
  document.getElementById("profile-role").textContent = data.role || "No Role";
  document.getElementById("profile-photo").src = data.photo || "./Assets/images.png";

  hideAddStudentOption(data);  // Ensure the "Add Student" option is updated
}

// Hide Admin Form
function hideAdminForm() {
  document.getElementById("form-container").style.display = "none";
}

// Load Admin Profile on Init
 function loadAdminProfile() {
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
};

// Function to hide Add Student Option based on Role
function hideAddStudentOption(data) {
  const addStudentOption = document.getElementById("add-student-option");
  if (data.role === "Student") {
    addStudentOption.style.display = "none"; // Hide for non-admin roles
  } else {
    addStudentOption.style.display = "flex"; // Show for admin roles
  }
}

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
  // fetchStudents(roomNo);
}


function fetchStudents(roomNo) {
  const tableBody = document.getElementById("studentTableBody");
  const tableHeader = document.getElementById("studentTableHeader");

  // Clear any previous rows in the table
  tableBody.innerHTML = "";
  tableHeader.innerHTML = ""; // Clear the table header

  // Create the table header
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
      <th>Name</th>
      <th>CNIC</th>
      <th>Address</th>
      <th>Block No</th>
      <th>Room No</th>
      <th>Photo</th>
  `;
  tableHeader.appendChild(headerRow); // Append header row to the table header

  // Query Firebase for students data
  studentFormDB.get().then(snapshot => {
      const students = snapshot.val();
      if (students) {
          Object.values(students).forEach(student => {
              if (student.roomNo == roomNo) {
                  // Create a new row for each student
                  const row = document.createElement("tr");
                  row.innerHTML = `
                      <td>${student.name}</td>
                      <td>${student.cnic}</td>
                      <td>${student.address}</td>
                      <td>${student.blockNo}</td>
                      <td>${student.roomNo}</td>
                      <td><img src="${student.photo}" alt="Photo" width="50"></td>
                  `;
                  tableBody.appendChild(row); // Append the row to the table body
              }
          });
      } else {
          // If no students found for the selected room, show a message
          tableBody.innerHTML = `<tr><td colspan="6">No students found in this room</td></tr>`;
      }
  }).catch(error => {
      console.error("Error fetching students:", error);
      tableBody.innerHTML = `<tr><td colspan="6">Error fetching data. Please try again later.</td></tr>`;
  });
  
}

function showAlert(adminData) {
  const alertBox = document.getElementById("alertBox");
  const progressBar = document.getElementById("progressBar");
  const roleSpan = document.getElementById("Role-spn");

  // Set role-specific message
  switch (adminData.role) {
    case "Admin":
      roleSpan.textContent = "Admin Created";
      break;
    case "Student":
      roleSpan.textContent = "Student Registered";
      break;
    default:
      roleSpan.textContent = "User Created";
      break;
  }

  // Display the alert box
  alertBox.style.display = "block";

  // Start filling the progress bar after a slight delay
  setTimeout(() => {
    progressBar.style.transition = "width 2s linear"; // Smooth transition for progress bar
    progressBar.style.width = "100%";
  }, 100); // Slight delay for smoother animation

  // Automatically hide the alert after the progress bar animation completes
  setTimeout(() => {
    // Fade out the alert box
    alertBox.style.animation = "fadeOut 0.5s ease forwards";
    
    // After fade-out animation completes, hide alert and reset progress bar
    setTimeout(() => {
      alertBox.style.display = "none";  // Hide the alert box
      progressBar.style.width = "0%";  // Reset the progress bar width
    }, 500); // Duration of fade-out animation
  }, 3000); // Duration of progress bar animation
}





// =======================================complaint dropdown js=======================
document.addEventListener('DOMContentLoaded', function () {
  const complaintsToggle = document.getElementById('complaints');
  const makeComplaint = document.getElementById('make-complaints');
  const seeComplaints = document.getElementById('see-complaints');

  // Toggle visibility of the complaint options
  complaintsToggle.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Toggle the visibility of the complaint options
    makeComplaint.classList.toggle('hidden');
    seeComplaints.classList.toggle('hidden');
  });
});

// =======================================complaint dropdown js end=======================
window.onload = function () {
  // renderComplaints();
  loadAdminProfile();
  hideAdminForm();
  addCards();
};


// ===================Alert box js end==========================




function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Here, you can process the form data if needed (e.g., send it to a server)
  // For now, we'll just redirect to another page.

  // Redirect to "complaintform.html"
  window.location.href = "complaintform.html";
}
function redirectToComplaints() {
  console.log("Redirect function triggered."); // For debugging
  window.location.href = "complaint.html";
}

function logout() {
  const userId = sessionStorage.getItem('userId');
console.log('User ID from sessionStorage:', userId)
  // Get the user ID from sessionStorage (this assumes you store user ID upon login)
  // const userId = sessionStorage.getItem('userId');  // Example: User ID saved in sessionStorage

  if (userId) {
    // Reference to the database (user data stored in 'adminForm' or 'StudentForm')
    const userRef = firebase.database().ref('adminForm').child(userId);  // Adjust to the appropriate path

    // Delete the user from Firebase
    userRef.remove()
      .then(() => {
        alert('User has been logged out and deleted successfully!');
        
        // Optionally, clear user data from sessionStorage or localStorage
        sessionStorage.removeItem('userId');
        
        // Redirect user to login page (or any other page as needed)
        window.location.href = 'login.html';  // Adjust based on your requirement
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user data.');
      });
  } else {
    alert('No user logged in.');
  }
}










function viewProfile() {
  alert("Viewing profile...");
  // Logic to display profile details
}

function loadProfileForEditing() {
  alert("Loading profile for editing...");
  // Logic to load profile data into the editing form
}

