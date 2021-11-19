## Documentation

The app consists of three components.

1. Search button (handles the searching of queries)
2. Results (for showing the results)
3. Load More button (for loading additional results)
4. Card (represent one image from results)

Since using redux we can manage the states of the app.

The following states are used in this app.

1. Search term (used by search button and load more button)

-   It is set by search button.
-   Then the load more button uses the search term for loading extra page.

2. Search Result (used by all three)

-   The result are set by search button.
-   Then accessed by results for rendering.
-   They are appened by load more button when clicked.

3. Page no of the search query (used by search button and load more button)

-   Search button sets the page no.
-   load more button increments the page no.

### Design of Project

When search button is clicked, it intitliases the page no of query as the page 1, and sets the results.

When results are set, the results component renders and is showen to the user.

Whe clicked on the load more button, more results are appended to the results.

As the result component is "listening" to the changes in results state (using connect API), it will re render (only additionaly rendering the new ones).

Search button is also used with connect API to set the search term in store.

## API

Unsplash API was used, so thanks to them !!

## Technology

Bootstrap, CSS3 was also used in this project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
