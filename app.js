// Import Express and set up the app
const express = require('express');
const app = express();

//importing routes file 
const routes = require('./routes');

//importing errorHandlers file
const errorHandlers = require('./errorHandlers');
//passing routes module
app.use(routes);

// passing errorHandler modules 
app.use(errorHandlers.error404);
app.use(errorHandlers.GlobalError);




// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})