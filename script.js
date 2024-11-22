const joke = document.querySelector(".joke");
const button = document.querySelector("button");

// const generateJoke = () => {
//     fetch("https://icanhazdadjoke.com/", {
//         headers: {
//             "Accept": "application/json"
//         }
//     })
//    .then(response => response.json())
//    .then(data => {
//         joke.textContent = data.joke;
//     })
// };

const generateJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  joke.textContent = data.joke;
};

button.addEventListener("click", generateJoke);

generateJoke();
