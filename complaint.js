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

// DOMContentLoaded to toggle visibility of complaint form
document.addEventListener('DOMContentLoaded', function () {
  const complaintsToggle = document.getElementById('complaints');
  const makeComplaint = document.getElementById('make-complaints');
  const complaintForm = document.getElementById('complaint-form');
  const complaintFormDetails = document.getElementById('complaint-form-details');

  // Show the complaint form when "Make a Complaint" is clicked
  if (makeComplaint) {
    makeComplaint.addEventListener('click', function (event) {
      event.preventDefault();
      complaintForm.style.display = "flex"; // Show the complaint form
    });
  }

  // Form submit logic
  if (complaintFormDetails) {
    complaintFormDetails.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      const title = document.getElementById('complaint-title').value;
      const description = document.getElementById('complaint-description').value;
      const category = document.getElementById('complaint-category').value;
      const attachment = document.getElementById('complaint-attachment').files[0];

      // Logging form data for debugging purposes
      console.log('Complaint Title:', title);
      console.log('Complaint Description:', description);
      console.log('Complaint Category:', category);
      if (attachment) {
        console.log('Attachment:', attachment.name);
      }

      // Validate Required Fields
      if (!title || !description || !category) {
        alert("Please fill all required fields.");
        return;
      }

      const complaintsDB = firebase.database().ref('Complaints');

      // Handle attachment if exists
      if (attachment) {
        const attachmentRef = firebase.storage().ref().child(`complaints/${attachment.name}`);
        attachmentRef.put(attachment).then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            const complaintData = {
              complaintTitle: title,
              complaintDescription: description,
              complaintCategory: category,
              attachmentUrl: downloadURL,
              studentName: "Student Name", // Replace with actual student name if available
              studentPhoto: "student-photo.png", // Replace with student photo URL if available
              timestamp: new Date().toISOString(),
            };

            complaintsDB.push(complaintData).then(() => {
              alert("Complaint submitted successfully!");
              complaintFormDetails.reset(); // Clear form fields
              renderComplaints(); // Refresh complaints display
            }).catch((error) => {
              console.error("Error submitting complaint:", error);
            });
          });
        }).catch((error) => {
          console.error("Error uploading attachment:", error);
          alert("Failed to upload attachment.");
        });
      } else {
        // If no attachment, just save complaint without it
        const complaintData = {
          complaintTitle: title,
          complaintDescription: description,
          complaintCategory: category,
          attachmentUrl: null,
          studentName: "Student Name", // Replace with actual student name
          studentPhoto: "student-photo.png", // Replace with student photo URL if available
          timestamp: new Date().toISOString(),
        };

        complaintsDB.push(complaintData).then(() => {
          alert("Complaint submitted successfully!");
          complaintFormDetails.reset(); // Clear form fields
          renderComplaints(); // Refresh complaints display
        }).catch((error) => {
          console.error("Error submitting complaint:", error);
        });
      }
    });
  }
});

// Function to Retrieve and Render Complaints
// function redirectToComplaints() {
//   console.log("Redirect function triggered."); // For debugging
//   window.location.href = "complaint.html";
// }


// Function to Retrieve and Render Complaints
function renderComplaints() {
  const complaintContainer = document.getElementById("complaint-container");
  if (complaintContainer) {
    complaintContainer.innerHTML = ""; // Clear existing cards
  } else {
    console.error("Complaint container not found.");
    return;
  }

  const complaintsDB = firebase.database().ref('Complaints');
  complaintsDB.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const complaint = childSnapshot.val();
      const complaintKey = childSnapshot.key;

      // Create Complaint Card
      const card = document.createElement('div');
      card.classList.add('social-card');
      card.innerHTML = `
        <div class="card-header">
          <img src="${complaint.studentPhoto || 'default-photo.png'}" alt="User Avatar" class="user-avatar">
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
  redirectToComplaints();
}

// Function to Delete Complaint Post
function deleteComplaint(complaintKey) {
  const isConfirmed = confirm("Are you sure you want to delete this complaint?");
  if (isConfirmed) {
    const complaintsDB = firebase.database().ref('Complaints');
    complaintsDB.child(complaintKey).remove()
      .then(() => {
        alert("Complaint deleted successfully!");
        renderComplaints(); // Re-render the complaints after deletion
      })
      .catch((error) => {
        console.error("Error deleting complaint:", error);
        alert("Failed to delete complaint. Please try again.");
      });
  }
}

// On Page Load (For complaint.html)
document.addEventListener('DOMContentLoaded', function () {
  const complaintPageIndicator = window.location.pathname.endsWith("complaint.html");
  if (complaintPageIndicator) {
    renderComplaints();
  }
});


function backToHomeHandler() {
  // Redirect to index.html
  window.location.href = "index.html";
}

// Called when the window is loaded
window.onload = function () {
  renderComplaints();
};
