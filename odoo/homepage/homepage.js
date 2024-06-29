document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const searchButton = document.getElementById('search-button');

    
     });

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("login-button").addEventListener("click", function() {
            window.location.href = "../login-signup/login.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("signup-button").addEventListener("click", function() {
            window.location.href = "../login-signup/signup.html";
        });
    });

    signupButton.addEventListener('click', () => {
        alert('Signup button clicked');
        // Implement signup functionality here
    });

    searchButton.addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        alert(`Search for: ${query}`);
        // Implement search functionality here
    });


    // Replace 'API_URL' with the actual URL of the API
const apiUrl =[ "https://www.furnishedfinder.com/housing/Atlanta/Texas/Budget3200/MoveIndate20231213/Avail",
        "https://www.furnishedfinder.com/housing/San-Diego/California",
        "https://www.furnishedfinder.com/property/299655_1"
]

// Function to fetch data from the API
async function fetchData() {
    try {
        // Make a GET request to the API
        let response = await fetch(apiUrl);

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON data from the response
            let data = await response.json();

            // Log the data to the console
            console.log(data);
        } else {
            console.error('Network response was not ok');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the fetchData function to make the request
fetchData();