function fetchRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const userDataDiv = document.getElementById("user-rdata");
      userDataDiv.innerHTML = ""; // Clear existing content

      const user = data.results[0];
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
              <div class="card-content">
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p><strong>Email:</strong> ${user.email}
                <br><strong>Username:</strong> ${user.login.username}
                <br><strong>Age:</strong> ${user.dob.age}
                <br><strong>Address:</strong> <br>${user.location.street.number} ${user.location.street.name}, <br>${user.location.city}, <br>${user.location.state} ${user.location.postcode}</p>
              </div>
            `;
      userDataDiv.appendChild(userDiv);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

// Attach the fetchRandomUser function to the button's click event
const fetchButton = document.getElementById("fetch-button");
fetchButton.addEventListener("click", fetchRandomUser);

// Call the fetchRandomUser function initially when the page loads
fetchRandomUser();
