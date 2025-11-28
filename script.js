// Initialize Vanta.js background effect
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.5,
  points: window.innerWidth < 768 ? 10 : 15,
  maxDistance: 20,
  spacing: window.innerWidth < 768 ? 22.5 : 15,
  color: 0xffd700,
  backgroundColor: 0x000000
});

// Load standings data and build rows dynamically
document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const bodyContainer = document.querySelector(".custom-body");

      data.teams.forEach(item => {
        // Create a row container
        const row = document.createElement("div");
        row.classList.add("custom-row");

        // Create team column
        const teamDiv = document.createElement("div");
        teamDiv.classList.add("custom-col");
        teamDiv.textContent = item.team;
        row.appendChild(teamDiv);

        // Create points column
        const pointsDiv = document.createElement("div");
        pointsDiv.classList.add("custom-col");
        pointsDiv.textContent = item.points;
        row.appendChild(pointsDiv);

        // Create attendances column
        const attendancesDiv = document.createElement("div");
        attendancesDiv.classList.add("custom-col");
        attendancesDiv.textContent = item.attendances;
        row.appendChild(attendancesDiv);

        // Append row to body container
        bodyContainer.appendChild(row);
      });

      // Update last updated date in the footer
      document.getElementById("lastUpdatedDate").textContent = data.lastUpdate;
    })
    .catch(error => console.error("Error fetching JSON:", error));
});
