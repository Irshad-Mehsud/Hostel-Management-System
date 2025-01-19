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

// Initialize Firebase (only if not already initialized)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// References to Firebase Database
const complaintsDB = firebase.database().ref("Complaints");
const adminFormDB = firebase.database().ref("adminForm");

// Function to get the admin photo
function getAdminPhoto(callback) {
  adminFormDB.once("value")
    .then(snapshot => {
      const admins = snapshot.val();
      if (admins) {
        const admin = Object.values(admins).find(admin => admin.role === "Admin");
        if (admin) {
          callback(admin.photo || './Assets/images.png'); // Default photo if none provided
          return;
        }
      }
      callback('./Assets/images.png'); // Default photo if no admin found
    })
    .catch(error => {
      console.error("Error retrieving admin photo:", error);
      callback('./Assets/images.png'); // Default photo on error
    });
}

// DOMContentLoaded to toggle visibility of complaint form
document.addEventListener('DOMContentLoaded', function () {
  const makeComplaint = document.getElementById('make-complaints');
  const complaintForm = document.getElementById('complaint-form');
  const complaintFormDetails = document.getElementById('complaint-form-details');

  // Show the complaint form when "Make a Complaint" is clicked
  if (makeComplaint) {
    makeComplaint.addEventListener('click', function (event) {
      event.preventDefault();
      complaintForm.style.display = "flex";
    });
  }

  // Handle complaint form submission
  if (complaintFormDetails) {
    complaintFormDetails.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form refresh

      const title = document.getElementById('complaint-title').value;
      const description = document.getElementById('complaint-description').value;
      const category = document.getElementById('complaint-category').value;
      const attachment = document.getElementById('complaint-attachment').files[0];

      // Validate required fields
      if (!title || !description || !category) {
        alert("Please fill all required fields.");
        return;
      }

      // Handle attachment if exists
      if (attachment) {
        const attachmentRef = firebase.storage().ref().child(`complaints/${attachment.name}`);
        attachmentRef.put(attachment).then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            saveComplaint(title, description, category, downloadURL);
          });
        }).catch(error => {
          console.error("Error uploading attachment:", error);
          alert("Failed to upload attachment.");
        });
      } else {
        saveComplaint(title, description, category, null);
      }
    });
  }
});

// Save complaint data to Firebase
function saveComplaint(title, description, category, attachmentUrl) {
  const complaintData = {
    complaintTitle: title,
    complaintDescription: description,
    complaintCategory: category,
    attachmentUrl: attachmentUrl,
    studentName: "Student Name", // Replace with actual student name if available
    studentPhoto: "student-photo.png", // Replace with student photo URL if available
    timestamp: new Date().toISOString(),
  };

  complaintsDB.push(complaintData).then(() => {
    alert("Complaint submitted successfully!");
    document.getElementById('complaint-form-details').reset();
    renderComplaints();
  }).catch(error => {
    console.error("Error submitting complaint:", error);
  });
}

// Render complaints from Firebase
function renderComplaints() {
  const complaintContainer = document.getElementById("complaint-container");
  if (!complaintContainer) {
    console.error("Complaint container not found.");
    return;
  }

  complaintContainer.innerHTML = ""; // Clear existing cards

  getAdminPhoto(adminPhoto => {
    complaintsDB.once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        const complaint = childSnapshot.val();
        const complaintKey = childSnapshot.key;

        // Create Complaint Card
        const card = document.createElement('div');
        card.classList.add('social-card');
        card.innerHTML = `
          <div class="card-header">
            <img src="${adminPhoto}" alt="Admin Avatar" class="user-avatar">
            <div class="user-info">
              <h4 class="user-name">${complaint.studentName || 'Anonymous'}</h4>
              <span class="post-time">${new Date(complaint.timestamp).toLocaleString()}</span>
            </div>
          </div>
          <div class="card-body">
            <p class="complaint-title"><strong>Title:</strong> ${complaint.complaintTitle}</p>
            <p class="complaint-description">${complaint.complaintDescription}</p>
            <p class="complaint-category"><strong>Category:</strong> ${complaint.complaintCategory}</p>
            ${complaint.attachmentUrl ? `
              <div class="attachment">
                <span><strong>Attachment:</strong></span>
                <img src="${complaint.attachmentUrl}" alt="Attached Image" class="attachment-img">
              </div>` : ''
            }
          </div>
          <div class="card-footer">
            <button class="btn-like">👍 Like</button>
            <button class="btn-comment">💬 Comment</button>
            <button class="btn-share">🔗 Share</button>
            <button class="btn-delete" onclick="deleteComplaint('${complaintKey}')">❌ Delete</button>
          </div>
        `;
        complaintContainer.appendChild(card);
      });
    });
  });
}

// Delete a complaint
function deleteComplaint(complaintKey) {
  const isConfirmed = confirm("Are you sure you want to delete this complaint?");
  if (isConfirmed) {
    complaintsDB.child(complaintKey).remove()
      .then(() => {
        alert("Complaint deleted successfully!");
        renderComplaints();
      })
      .catch(error => {
        console.error("Error deleting complaint:", error);
      });
  }
}

// On page load, render complaints
document.addEventListener('DOMContentLoaded', function () {
  renderComplaints();
});
