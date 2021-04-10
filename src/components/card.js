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

  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  const author = document.createElement("div");
  author.classList.add("author");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const authorPhoto = document.createElement("img");
  const authorSpan = document.createElement("span");
  headline.textContent = article.headline;
  authorSpan.textContent = `By ${article.authorName}`;
  authorPhoto.src = article.authorPhoto;

  imgContainer.appendChild(authorPhoto);
  author.appendChild(imgContainer);
  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(authorSpan);

  return card;
};

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
    .then(response => {
      console.log(response.data.articles)
      const articles = response.data.articles
      for (const key in articles) {
        const articleTopics = articles[key];
        console.log('articleTops', articleTopics)
        articleTopics.forEach(article => {
          const card = Card(article)
          cardsContainer.appendChild(card)
        })
      }
    })
    .catch((err) => console.log(err));


};

export { Card, cardAppender };
