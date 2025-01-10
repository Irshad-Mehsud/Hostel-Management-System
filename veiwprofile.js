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
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  // Reference to the Firebase database for adminForm
  const adminFormDB = db.ref("adminForm");
//   const userId = "specificUserId"; // This would be dynamically assigned based on the logged-in user
//   adminFormDB = db.ref("adminForm");

  
  /**
   * Fetch and Display Profile (Admin or others)
   */
  function fetchAndDisplayProfile() {
    console.log("Fetching data from Firebase...");
  
    adminFormDB.once("value")
      .then(snapshot => {
        const admins = snapshot.val();
        console.log("Snapshot data:", admins);
  
        if (!admins) {
          alert("No profile data found.");
          return;
        }
  
        // Find the first profile (you can modify this logic if needed)
        const profile = Object.values(admins)[0]; // This can be adjusted based on your needs
  
        if (!profile) {
          alert("No profile available.");
          return;
        }
  
        console.log("Profile found:", profile);
        updateProfile(profile);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
        alert("Failed to fetch profile data. Please try again.");
      });
  }
  
  /**
   * Update Profile Card UI
   */
  function updateProfile(profile) {
    let cardContainer = document.getElementById("container");
  
    // Dynamically create the profile card with fetched data
    cardContainer.innerHTML = `
      <div class="profile-card">
        <div class="profile-header">
          <img id="profile-photo" class="profile-img" src="" alt="Profile Photo" />
          <h2 id="profile-name">${profile.name}</h2>
        </div>
        <div class="profile-details">
          <p><strong>Email:</strong> <span id="profile-email">${profile.email}</span></p>
          <p><strong>Role:</strong> <span id="profile-role">${profile.role}</span></p>
        </div>
        <button class="close-btn" onclick="hideProfile()">×</button>
      </div>
    `;
  
    // Update profile photo, name, email, and role dynamically
    document.getElementById("profile-photo").src = profile.photo || "./Assets/images.png";
    document.getElementById("profile-name").textContent = profile.name;
    document.getElementById("profile-email").textContent = profile.email;
    document.getElementById("profile-role").textContent = profile.role;
  
    // Show the profile card
    cardContainer.style.display = "flex";
  }
  
  /**
   * Hide Profile Card and Redirect
   */
  function hideProfile() {
    window.location.href = "index.html"; // Redirect to index.html
  }
  
  // Call the fetchAndDisplayProfile function when the page loads
  window.onload = fetchAndDisplayProfile;
  