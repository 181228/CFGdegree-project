# ReadSwap-App

To preview and run the project on your device:

  1. Download the project folder `readswap-app`
  2. Open the `readswap-app` directory in VSCode
  3. Create file called `apiConfig.js` in `utils` folder, and place there your `KEY` and `HOST` for `BOOK FINDER API` (you have to subscribe to this API to get these credentials first, for example via `https://rapidapi.com/hub`)
  3. In the terminal, navigate to the root of the project (where the `package.json` file is located) and run `npm install`.
  4. Open a second terminal (without closing the first one), navigate to the `server` folder directory within the project, and run `node server.js` in a new terminal window.
  4. In the first terminal (the one with root directory) run `npm start`, and press `y` to view the project in your web browser.

  5. **Important:** Once you're done, press `Ctrl+C` in both terminal windows to stop the local servers.
  6. Before sending updates to GitHub, please ensure `node_modules` folder and `apiConfig.js` file are in .gitignore to keep the repository clean.

Note: Make sure you have Node.js and npm (Node Package Manager) installed on your system before starting.
