
document.addEventListener("DOMContentLoaded", function () {
    fetch('nobake.json')
    .then(response => response.json())
    .then(data => {
        const dataDisplay = document.getElementById("nobakeDataDisplay");
        const nameElem = document.createElement("p");
        nameElem.textContent = data.name;

        dataDisplay.appendChild(nameElem);
    })
        .catch(err => console.error("Error fetching JSON: ", err));
});