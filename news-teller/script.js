var news = document.getElementById("getNews");
var output = document.querySelector(".output")


news.addEventListener("click", (event) => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d6d4e6a1214c4e07ab74d24604069cd7')
    .then((response) => response.json())
    .then((data) => {
        
        let output1 = '<h2 class ="mb-4">Countries</h2>';
        data.forEach(country => {
            output1 += `
                <div class = "card card-body">
                   <p>${country.name}</p> 
                   <p>${country.capital}</p> 
                   <p>${country.region}</p> 
                </div>
            `;
        }); 
        output.innerHTML = output1;
    })
});