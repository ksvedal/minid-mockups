# MinID Login Page - Optimized Flow
This project presents an optimized flow for the MinID login page, focusing on improving the layout and enhancing the user experience. The development process utilizes the Tailwind CSS framework to streamline the design.

## Target Audience
The design aims to be as user-friendly as possible, requiring no prior knowledge of MinID. It supports multiple languages, making it suitable for non-native speakers. Basic understanding of computers is recommended for setting up the project.

## Project File Architecture
In the project, you will find different implementations of the design organized into separate folders. The first implementation represents the original design, the second implementation showcases the optimized design, and the third implementation features the original design with a different color scheme and layout. Each design has its own root directory within the implementation folders. To run all the different designs within the project, npm is used to install the necessary dependencies and build the extension. Run npm install in all the folders to install the required dependencies. See the setup section below for more information.

Following is the file structures (in order) for implementation 1, 2, and 3.

<img src="./images/imp1_struct.png" alt="Implementation 1 structure" width="30%" style="margin: 30px"><img src="./images/imp2_struct.png" alt="Implementation 2 structure" width="30%" style="margin: 30px"><img src="./images/imp3_struct.png" alt="Implementation 3 structure" width="30%" style="margin: 30px">


## Setup
This project was bootstrapped with Create React App.

To set up the project, follow these steps:

1. Open the root directory of the extension (implementation1, implementation2 or implementation3) in a terminal.

2. Run the following commands in the terminal:


    ```npm install```

    ```npm start```

3. This will open the project in development mode in your browser, at localhost:3000. Hee you can see the preview of the given implementation, and navigate through the design. 

4. In order to shut down the project, press ctrl + c in the terminal


## User Manual
When you open the project in your browser, you will see the MinID login page. You can navigate through the different pages of the login process, depending on which implementation you are using. Below are previews of the different designs, including both normal and dark mode, along with explanations of the login process for each implementation.


### Implementation 1

This design uses birth number first to make the login process easier for the user. However, this solution is not very secure because of the risk of sanitizing of national identification number, and therefore we do not recommend this implementation. 

Normal and dark mode:

<img src="./images/implementation1.jpg" alt="Implementation1 preview" width="800" style="margin: 15px">
<img src="./images/implementation1_dark.jpg" alt="Implementation1 dark mode preview" width="800" style="margin: 15px">


### Implementation 2

This app has two versions of what is essentially the same flow. Both is displayed in the demo app and can be navigated by the top link for demo purposes. But for user simplicity there is an argument to made that only one of them should be available. This solution is highly advantageous as it strikes a balance between security and user-friendliness. Although the SMS login buttons remain available, they have been downsized to encourage mobile app usage. This approach not only reduces costs for the government but also enhances user security. The app will be linked to the user's national identification number, enabling swift login procedures. When the user opens the app, they have to unlock it by either biometrics or a 4 letter pin they created upon registration. The app then generates a 5 letter code to be entered in the login flow. Opening the mobile application is therefore essentially the first step of this flow; both for the QR- and activation-code solutions. It's worth noting that this code remains active for a specific duration, ensuring both robust security and expeditious login processes.

Version 1: Authentication code
The app then generates a 5 letter code to be entered in the login flow.

Version 2: QR-code
The login flow generates a QR code for the user to scan with their app.

Authentication code and QR-code presesentation:

<img src="./images/implementation2_authcode.png" alt="Implementation2 preview" width="49%"> <img src="./images/implementation2_qr.png" alt="Implementation2 dark mode preview" width="49%">


### Implementation 3

Normal and dark mode:

<img src="./images/implementation3.jpg" alt="Implementation1 preview" width="800" style="margin: 15px">
<img src="./images/implementation3_dark.jpg" alt="Implementation1 dark mode preview" width="800" style="margin: 15px">

This design has the same flow as implementation1, but with a different color scheme and layout.


### Login Flow
The login flow of implementation 1 and 3 is illustrated below:

<img src="./images/minID_flow.png" alt="MinID flow" style="margin: 15px">

* To reach the activationLetterFlow (the blue box in the flow chart), you need to enter any one number in the form collecting national identification numbers and then press the login button. 
* To access the noLetterActivationLetterOrderedFlow (the green box in the flow chart), you need to enter any two numbers in the form collecting national identification numbers and then press the login button.
* To access the normal loginFlow, you must enter any 11 numbers in the form collecting national identification numbers and then press the login button.

The login flow of implementation 2 is illustrated below:
<img src="./images/minID_flow_2.png" alt="MinID flow" style="margin: 15px">

* The "use App" portion of the flow will either consist of QR-code or authentication code. This is dependent on what is implemented. For simplicity for the user it is preffered that only one of these is implemented. In the current iteration the user first gets presented with the QR-code page and then can move on to the authentication page. This is only for presentation purposes.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies needed to run the project.

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
¨
## Troubleshooting

### Error during npm install
If you encounter an error while running the npm install command, follow these steps to troubleshoot:

1. Verify that you have a stable internet connection. Poor connectivity can cause issues with package installation.
2. Delete the node_modules directory in your project's root folder. Then, rerun npm install to reinstall the dependencies.
3. Ensure that you have Node.js installed on your system. You can check this by running the command node -v in the terminal. If Node.js is not installed, download and install it from the official Node.js website.
4. Check if there is a package-lock.json file in your project's root directory. If present, delete the file and run npm install again.
5. If the error persists, try running npm cache clean --force to clear the npm cache, and then run npm install again.

### Unable to Start Development Server (npm start)
If you are unable to start the development server using the npm start command, follow these steps to troubleshoot:

1. Make sure you are in the correct directory of your React project in the terminal.
2. Verify that all the necessary dependencies are installed by running npm install before starting the development server.
3. Check if there are any errors or warnings displayed in the terminal when attempting to start the server. Read the error message carefully to identify the issue.
4. Ensure that the port specified (usually 3000) by the development server is not already in use by another process. Try stopping any other applications that might be occupying the port and then rerun npm start.
5. If you have any antivirus or firewall software, temporarily disable it to check if it is blocking the development server.
6. Update your Node.js and npm versions to the latest stable releases. Use the commands npm install -g npm and npm install -g n to update npm and Node.js versions, respectively.
7. If the issue persists, try deleting the node_modules directory and reinstalling the dependencies using npm install.

If you continue to encounter problems with setting up the React environment or running the npm commands, refer to the official React documentation or seek support from the React community for more specific assistance. 

## Learn More

To learn more about creating and configuring React applications, you can visit the following resources:

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

Additional documentation and guides for React and Create React App can be found within the respective documentation sites.

