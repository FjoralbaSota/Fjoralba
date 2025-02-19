// Sample data to search from
const beaches = ["hawaiian beach", "golden beach", "sandy beach"];
const temples = ["angkor wat", "kashi vishwanath", "golden temple"];
const countries = ["india", "united states", "brazil"];

// Function to handle the search
function handleSearch(event) {
  event.preventDefault(); // Prevent form submission
  
  const query = document.getElementById("searchInput").value.trim().toLowerCase(); // Get and normalize the query
  
  let results = [];

  // Check if query matches "beach" or "beaches"
  if (query.includes("beach")) {
    results = results.concat(beaches.filter(beach => beach.toLowerCase().includes(query)));
  }

  // Check if query matches "temple" or "temples"
  if (query.includes("temple")) {
    results = results.concat(temples.filter(temple => temple.toLowerCase().includes(query)));
  }

  // Check if query matches any country
  if (query.includes("country") || query.length > 0) {
    results = results.concat(countries.filter(country => country.toLowerCase().includes(query)));
  }

  // Display results
  displayResults(results);
}

// Function to display the search results
function displayResults(results) {
  const resultContainer = document.getElementById("searchResults");
  resultContainer.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultContainer.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach(result => {
      const resultElement = document.createElement("p");
      resultElement.textContent = result;
      resultContainer.appendChild(resultElement);
    });
  }
}

// Event listener for the search form
document.getElementById("searchForm").addEventListener("submit", handleSearch);

function clearResults() {
  document.getElementById("searchInput").value = ""; // Clear the input field
  const resultContainer = document.getElementById("searchResults");
  resultContainer.innerHTML = ""; // Clear the search results display
}
// Event listener for the clear button
document.getElementById("clearBtn").addEventListener("click", clearResults);

function showTimeInAlbania() {
  const albaniaTimeZone = "Europe/Tirane"; // Time zone for Albania
  const currentTime = new Date().toLocaleString("en-US", { timeZone: albaniaTimeZone });

  // Get the div where the time will be displayed
  const timeContainer = document.getElementById("albaniaTime");

  // Display the current time in Albania
  timeContainer.innerHTML = `<p>Current time in Albania (Europe/Tirane): ${currentTime}</p>`;
}

// Call the function to display the time immediately when the page loads
showTimeInAlbania();

// Optionally, you can set the time to update every second
setInterval(showTimeInAlbania, 1000);