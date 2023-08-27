const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "Landing Page" folder
app.use(express.static(path.join(__dirname, '../Front-end')));

app.get('/', function (req, res, next) {
  const options = {
      root: path.join(__dirname)
  };

  const fileName = '../Front-end/landingpage.html, index.html';
  res.sendFile(fileName, options, function (err) {
      if (err) {
          next(err);
      } else {
          console.log('Sent:', fileName);
      }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});