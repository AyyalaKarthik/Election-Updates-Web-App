console.log("This is liveelections.js");

// 889420b648e9449fbe52d1e5660f0edb



// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '889420b648e9449fbe52d1e5660f0edb';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
                aria-expanded="false" aria-controls="collapseExample">
                ${element["title"]}
            </a>

        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
            <p> ${element["description"]}  </p>
            <a href = ${element["url"]} target = "_blank">   Click for More Updates     </p>
            
            
            </div>
        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


