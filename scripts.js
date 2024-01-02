// a dummy test function
function showMessage() {
    alert('Hello, this is a message from scripts.js!');
}

function navigateToPost(postUrl) {
    window.location.href = postUrl;
}

function goBackToMainPage() {
    console.log("Function called");
    window.location.href = "../index.html";
}

// Function to change language
function changeLanguage(language) {
    if (language === 'en') {
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-fr').style.display = 'none';
    } else if (language === 'fr') {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-fr').style.display = 'block';
    }
}

// Function to navigate to a post
function navigateToPost(postUrl) {
    // Add your navigation logic here
}

// Initial language setting (English)
changeLanguage('en');
