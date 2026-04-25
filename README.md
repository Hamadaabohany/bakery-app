# Bakery App

## Setup and Deployment Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase CLI

### Clone the Repository
1. Open your terminal.
2. Clone the repository using the following command:
   ```bash
   git clone https://github.com/Hamadaabohany/bakery-app.git
   ```
3. Navigate into the project directory:
   ```bash
   cd bakery-app
   ```

### Install Dependencies
Run the following command to install the necessary dependencies:
```bash
npm install
```

### Setup Firebase
1. If you haven’t already, run the following command to log in to Firebase:
   ```bash
   firebase login
   ```
2. Initialize your Firebase project:
   ```bash
   firebase init
   ```
   - Select the features you need (e.g., Firestore, Functions, Hosting).
   - Choose the Firebase project you want to associate with your app.

### Building the Application
To build the application for production, execute:
```bash
npm run build
```

### Starting the Application Locally
To run the application on your local machine, use:
```bash
npm start
```

### Deploying to Firebase
1. To deploy your application, use:
   ```bash
   firebase deploy
   ```
2. Follow the instructions in the terminal to confirm the deployment.

### Additional Notes
- Ensure that you have configured your Firebase settings and environment variables properly in your project.
- Refer to the Firebase documentation for more details on configuration and deployment best practices.

### Troubleshooting
- If you encounter issues, check the console for errors and consult the Firebase documentation or support forums for guidance.

---

## License
This project is licensed under the MIT License.