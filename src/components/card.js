import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const mainCard = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const authorPhotoImg = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  mainCard.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainerDiv.classList.add("img-container");

  headlineDiv.textContent = article.headline;
  authorNameSpan.textContent = `By ${article.authorName}`;
  authorPhotoImg.src = article.authorPhoto;

  mainCard.appendChild(headlineDiv);
  mainCard.appendChild(authorDiv);
  mainCard.appendChild(authorNameSpan);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(authorPhotoImg);
  
  mainCard.addEventListener("click", function () {
    console.log("THE HEADLINE IS: ", article.headline)
  });

  return mainCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardsContainer = document.querySelector(selector);
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      const articles = res.data.articles;
      for (const key in articles) {
        const articleTopics = articles[key];
        articleTopics.forEach((article) => {
          const card = Card(article);
          cardsContainer.appendChild(card);
        });
      }
    })
    .catch((error) => console.log(error));
};

export { Card, cardAppender }
