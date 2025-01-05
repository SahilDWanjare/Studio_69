function openGallery() {
    document.getElementById("galleryPopup").style.display = "flex";
}

function closeGallery() {
    document.getElementById("galleryPopup").style.display = "none";
}

function openimage(){
    document.getElementById("imagePopup").style.display = "flex";
}

function openImagePopup(src) {
    document.getElementById("popupImg").src = src;
    document.getElementById("imagePopup").style.display = "flex";
}

function closeImagePopup() {
    document.getElementById("imagePopup").style.display = "none";
}

// Function to open feedback popup
function openFeedbackPopup() {
    document.getElementById("feedbackPopup").style.display = "flex";
}

// Function to close feedback popup
function closeFeedbackPopup() {
    document.getElementById("feedbackPopup").style.display = "none";
}


// Function to open contact popup
function opencontactPopup() {
    document.getElementById("contactPopup").style.display = "flex";
}

// Function to close contact popup
function closecontactPopup() {
    document.getElementById("contactPopup").style.display = "none";
}

// Prevent form submission (optional)
document.addEventListener('DOMContentLoaded',() => {
    document.getElementById("feedbackForm").onsubmit = event =>{
        const info = document.querySelector('#info').value;
        const email = document.querySelector('#email').value;
        event.preventDefault();
        alert(`Hello, ${info}, 
            your email_ID : ${email},
            THANKS FOR YOUR FEEDBACK🤗`);
        closeFeedbackPopup();
    }

});

//event
function openeventPopup() {
    document.getElementById("eventPopup").style.display = "flex";
}

function closeeventPopup() {
    document.getElementById("eventPopup").style.display = "none";
}

// Countdown Timer for Next Event
const eventDate = new Date("March 15, 2025 10:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Event has started!";
    }
}

// Update Countdown every second
setInterval(updateCountdown, 1000);

//login/signup
function openloginPopup() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeloginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}
// Toggle between Login & Signup
function toggleForm() {
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementById("signup-form");
    let formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        formTitle.innerText = "Login";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.innerText = "Sign Up";
    }
}

// Validate Signup Form
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Signup successful!");
        toggleForm();
    }


});

// Validate Login Form
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login successful!");
});


//shortcuts

function openshortcutPopup() {
    document.getElementById("shortcutsPopup").style.display = "flex";
}

function closeShortcutsPopup() {
    document.getElementById("shortcutsPopup").style.display = "none";
}

// Add a new shortcut dynamically
function addShortcut() {
    let name = document.getElementById("shortcutName").value;
    let link = document.getElementById("shortcutLink").value;

    if (name && link) {
        let ul = document.getElementById("shortcutsList");
        let li = document.createElement("li");
        li.innerHTML = `<a href="${link}" target="_blank"><i class="fa-solid fa-link"></i> ${name}</a>`;
        ul.appendChild(li);

        // Clear input fields
        document.getElementById("shortcutName").value = "";
        document.getElementById("shortcutLink").value = "";
    } else {
        alert("Please enter both a name and a link!");
    }
}

//store
function openStorePopup() {
    document.getElementById("storePopup").style.display = "flex";
}

function closeStorePopup() {
    document.getElementById("storePopup").style.display = "none";
}








