const SearchInput = document.querySelector(".search-input");
const SearchButton = document.querySelector(".search");


function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

SearchButton.addEventListener("click", function () {
  const PromptGiven = SearchInput.value;
  const generateText = async (question) => {
      const apiKey = "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";
      const url = `https://api.openai.com/v1/engines/text-davinci-003/completions`;
      const requestBody = {
        prompt: question,
        temperature: 0.9,
        max_tokens: 500,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      const json = await response.json();
    const generatedText = json.choices[0].text;


    var string = `${generatedText}`;
    var str = string.split("");
    var el = document.getElementById("str");
    (function animate() {
      str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
      var running = setTimeout(animate, 30);
    })();
  };
  generateText(`${PromptGiven}`);
});





// const ResponseGiven = async function () {
//   try {
//     const apiKey = "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";
//     const prompt = `what is life`;
//     const length = 50;

//     const payload = {
//       prompt,
//       length,
//     };

//     const headers = new Headers({
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     });

//     const requestOptions = {
//       method: "POST",
//       headers,
//       body: JSON.stringify(payload),
//     };
//     const response = await fetch(
//       `https://api.openai.com/v1/engines/davinci/completions?api_key=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`,
//       requestOptions
//     );
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(
//         `Problen Getting your answer (${response.status} Reload and try again!!`
//       );
//     }
//     const responseJson = await response.json();
//     console.log(responseJson.choices[0].text);
//   } catch (error) {
//     alert(error);
//   }
// };

// ResponseGiven();
