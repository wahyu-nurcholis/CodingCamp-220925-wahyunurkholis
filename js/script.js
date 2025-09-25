// Update waktu realtime
function welcomeMessage() {
  /// Prompt user for their name
  let username = prompt("Enter your name:");
  /// If a name is entered, display it in the header; otherwise, show a default message
  if (username) {
    /// Display the username in the header
    document.getElementById("username").innerHTML = username;
  } else {
    /// If no name is entered, show a default welcome message
    alert("Welcome to my portfolio!");
  }
}

function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toString();
}
setInterval(updateTime, 1000);

// Handle form submit
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input, select, textarea");
  const infoBox = document.getElementById("infoBox").querySelectorAll("p");

  infoBox[1].innerHTML = "<b>Nama:</b> " + inputs[0].value;
  infoBox[2].innerHTML = "<b>Tanggal Lahir:</b> " + inputs[1].value;
  infoBox[3].innerHTML = "<b>Jenis Kelamin:</b> " + inputs[2].value;
  infoBox[4].innerHTML = "<b>Pesan:</b> " + inputs[3].value;
});

function validateForm() {
  /// Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  /// Simple validation
  if (name === "" || email === "" || message === "") {
    /// If any field is empty, show an alert
    alert("Please fill in all fields.");
  } else {
    /// If all fields are filled, show a success message
    alert(`Thanks, ${name}! Form submitted successfully!`);
  }
}
