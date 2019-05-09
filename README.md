# Funny Quotes App (React App)

View demo [here](https://funnyquotes.netlify.com/)

This is a React App which displays funny quotes at a click of a button.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How it works
* A stateful component of `App` is declared
* A state of `quotes` is set to an array containing the quotes and a `randomQuotes` state initialize to null.
* `isClicked` state is also set to false
* A Stateless functional Component called `Quote` displays the quotes 
* `showQuote()` method sets the state of `randomQuotes` to a random quote index
* `showQuote()` also sets the state of `isClicked` to `true`
* `randomItem` which is the `randomQuotes` state is passed as a prop to the `Quote` Component
* `showQuote()` is also passed to an `onClick` handler on the button element on the App Component
* An `Intro` page is shown at the launch of the app 
* At the click of the button, it displays a random funny quotes



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

