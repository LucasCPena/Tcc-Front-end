const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("http://localhost:5000/login");
}

const getRole = document.getElementById("userRole");
const getName = document.getElementById("userName");

const setRole = localStorage.getItem("userRole");
const setName = localStorage.getItem("userName");

getRole.innerText = setRole;
getName.innerText = setName;

const appointmentElement = document.getElementById("appointmentId");
let data = [];

const itemsPerPage = 5;
let currentPage = 1;

function displayAppointments() {
  // ...
}

function updatePagination() {
  // ...
}

function nextPage() {
  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
    currentPage++;
    displayAppointments();
    updatePagination();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayAppointments();
    updatePagination();
  }
}

async function findAppointments() {
    const result = await fetch(
      "http://localhost:3000/appointment/get",
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
    );
  
    if (result.status !== 200) {
      alert("erro inesperado");
    }
  
    const appointments = await result.json();
    console.log(appointments); // Adiciona um log para verificar os dados
    data.push(...appointments); // Adiciona os novos dados a 'data'
    displayAppointments();
    updatePagination();
  }
  
findAppointments();