const url = "https://swapi.dev/api/people";

const resultContainer = document.querySelector(".result-container");

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    createHtml(json.results);
  } catch (error) {
    console.log(error);
    resultContainer.innerHTML = displayMessage("error", error);
  }
}

callApi();

function displayMessage(type, message) {
  return `<div class="message ${type}">${message}</div>`;
}

function createHtml(data) {
  resultContainer.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    resultContainer.innerHTML += `<div class="result">
                                          <h4>${data[i].name}</h4>
                                          <p>Birth Year: <b>${data[i].birth_year}</b></p>
                                          <p>Height: <b>${data[i].height}</b></p>
                                          <div>Gender:
                                              ${data[i].gender}
                                          </div>
                                      </div>`;
  }
}
