import { topics } from "../mocks/data";
import axios from 'axios';
console.log('check out axios: \n \n', axios);


const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicDiv = document.createElement('div')
  const tabDiv = document.createElement('div');
  topicDiv.classList.add('topics');
  tabDiv.classList.add('tab');
  tabDiv.textContent = {topics};
  topicDiv.appendChild(tabDiv);
  console.log("THESE ARE THE TOPICS: "), topics;

  return topicDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const topicContainer = document.querySelector(selector);

topics.forEach(topic => 
  axios
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then(response => {
    console.log(response);
    const topic = cardMaker(response.data);
    cardEntry.appendChild(card);
  })
  .catch(error => {
    console.log("Error is here: ", error);
  }))
}

export { Tabs, tabsAppender }
