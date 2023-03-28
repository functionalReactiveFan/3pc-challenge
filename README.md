This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To be able to test the app:

1) install node modules: npm install
2) replace apiKey with real one from the description of the challenge in App.jsx
3) run the app: npm start
4) open [http://localhost:3000](http://localhost:3000) to view it in your browser

setup:
1) git clone https://github.com/functionalReactiveFan/3pc-challenge.git
2) cd 3pc-challenge
3) npm i
4) replace apiKey with real one from the description of the challenge in App.jsx 
5) npm start
6) open http://localhost:3000


So for my implementation, I have used:
- day.js lib for the better formatting release date / as an alternative you can also use moment.js
- materializecss and font-awesome for stylings
- I have checked themoviedb docs 4th and 3rd versions, I have chosen the 3rd one (https://developers.themoviedb.org/3), it was written more understandable for fetching the movies
- for simplicity reasons and to be able to fit the implementation approx to 4-hour time window, I have excluded some features that could be added for a better user experience in the future:
- adding pagination instead of rendering only the top 20 movies sorted by popularity as I did in my case
- adding routing: one route for the movie list and another one for the detail page. In my case based on a currently selected movie, I am switching between rendering list view and detail view
- adding types for typescript support
- adding unit testing

