const http = require('http');
const PORT = 3000;


/**
 * using the createserver function we can create a basic http server using http module.
 * This function returns a server obj and takes a callback as an argument.
 * This function created a server object but didn't start the server.
 */
const server = http.createServer(function listner(request, response){
    /**
     * request object -> we will be able to see the details of the http request
     * response object -> we will be able to configure what response we need to process/send to the incoming request
     */
    // this callback is a kind of listner function that is going to collect
    // every http request that we will make to our server
    // TODO..
    if(request.url == '/home') {
        // if we make a request on /home this if block will be executed
        response.end("Welcome to home")     
    }
    console.log("Request received");

});

server.listen(PORT, function exec(){
    // once we successfully boot up the server on  the givem port, the callback will be executed.
    console.log(`Server is up and running on the PORT ${PORT}`)
})


