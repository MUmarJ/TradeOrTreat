# TradeOrTreat
![](TradeOrTreatDemo.gif)

#### Stack
`auth0`,`azure`,`github`,`google-cloud`,`node.js`, `mongodb`, `react.js`,`react-router`, `three.js`,`twilio`

### Inspiration
We wanted to brainstorm ideas about how to improve upon existing bartering systems. We came up with the idea that in order to guarantee the safety of our users, which are mostly children, both the buyer and seller would have to use qr codes. This added layer would make sure that foul play is less likely to happen when people had to confirm their sales.

### What it does
The website allows users to trade candy amongst one another. Users can post offers for candy online. Other users are then able to accept those offers. Upon accepting the offer, a unique qrcode is generated. The two parties must then meet up and conduct the deal. After the candy has been properly exchanged, scanning the qrcode solidifies the deal online.

### How we built it
We designated roles to each team member. This divide and conquer system enabled us to work at an efficient pace. We mostly based our work using JavaScript. We had a GitHub repository to share our work. We made great use of githubs branches and merging system to further out progress. This asynchronous style allowed for quick progress.

### Challenges we ran into
We encountered some technology we were not used to working with. However, we all overcame the learning difficulties and as a result, we all learned something new. We also ran into a bunch of bugs along the way. Most of the bugs were dealt with after some time searching for answers or experimenting.

### Accomplishments that we're proud of
We were very proud that we were able to create such a project in such little time. It really gave us perspective at what effective teamwork looked like. We all came out learning something new to add to our array of skills.

### What we learned
We learned various technologies and APIs. We learned how to incorporate Auth0 and Azure into our work. However, it wasn't just technology based. We learned teamwork and communication skills. It furthered our teamwork abilities and cooperation.

### What's next for TradeOrTreat
We would like to get optimized for mobile. Furthermore, in line with our principles for safety, we would like to add GPS tracking during offers to make sure our users are safe. We would also like to see our work thoroughly tested to ensure no security loops. We would not want our users' informations leaked or possibly at risk in any capacity.

# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installation and Running

To run the front-end
cd to /client and run
#### `npm i`
#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To have the backend running
cd to /server and run

#### `npm i`
#### `npm start`

Backend is not needed if `local` branch is being used which has static data