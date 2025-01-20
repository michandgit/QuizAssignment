
Project Live link : https://quiz-assignment-silk.vercel.app/
<br/>

# Quiz Application

## Overview
This project is a dynamic Quiz Application built with React. It fetches questions from the [Open Trivia Database API](https://opentdb.com/) and presents them to the user in a timed quiz format. Key features include:
- Shuffling question options to ensure randomness.
- A timer with automatic submission when time runs out.
- Question navigation via a tracker to view and revisit answered or unanswered questions.
- Submission validation to ensure all questions are addressed before completing the quiz.
- A summary report page displaying the user's score and detailed question/answer data.

### Key Components
1. **`Qbox`**: Displays individual questions and answer options.
2. **`QuestionTracker`**: Helps users navigate between questions.
3. **`SubmissionGuard`**: Ensures the quiz is submitted correctly.
4. **Timer**: Automatically handles quiz submission when the time expires.

## Setup Instructions
### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

## Usage
1. The application fetches 15 quiz questions on load.
2. Select an answer for each question.
3. Navigate using the Question Tracker to review or revisit questions.
4. Submit the quiz manually or let the timer handle submission.

## Assumptions
1. The application assumes consistent availability of the Open Trivia Database API.
2. User answers are stored in a local state for the duration of the quiz session.
3. The quiz includes 15 questions with a 30-minute timer as the default.

## Challenges Faced
1. **Dynamic Option Shuffling**: Ensuring options are shuffled without altering the correct answer's validity.
   - **Solution**: Implemented a utility function to shuffle arrays.
2. **Time Management**: Managing a countdown timer alongside React's state updates.
   - **Solution**: Used `setInterval` and ensured cleanup with `clearInterval` to avoid memory leaks.
3. **Question Navigation**: Handling visited and unvisited questions dynamically.
   - **Solution**: Maintained a `visitedQuestions` set to track and display question statuses accurately.
4. **Error Handling with API Calls**: Ensuring the app does not crash on API failure.
   - **Solution**: Added `try-catch` blocks and logged errors to the console for debugging.

## Future Enhancements
1. Adding category and difficulty selection before starting the quiz.
2. Storing user progress to local storage to allow resumption of incomplete quizzes.
3. Enhancing the UI for mobile responsiveness.




# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
