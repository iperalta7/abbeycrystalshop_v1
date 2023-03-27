// Loads the HTTP module 
var http = require('http');

// Load the file system module.
var fs = require('fs');

// Store the port number that our server will be on 
const PORT = 1337;

// Create a function called serveStaticFile that tries to read the 
// file located at the path being passed in. 
// This function should include the following:
 function serveStaticFile(res, path, contentType, responseCode){
    //if there is no http response code, then assume everything is okay
    //      set http resource status code to 200 to tell browser everything i sokay
    if(!responseCode){
        responseCode = 200;
    }

    // Try to read the file that is located at the path 
    // that is being passed in. If there is an error, 
    // then tell the browser that there was an internal
    // error. Otherwise, provide the browser with the 
    //response code, content type and data that was passed in.

    fs.readFile(__dirname + path, function(err,data){
        //tell the browser there was an internal server error
        if(err){
            //include in our header that there was an internal server error
            res.writeHead(500, {"Content-Type" : "text/plain"});

            // give the user an eeror mesg in plain text and tell browser all info has been sent
            res.end('500 - Internal Error')
        }else{
            //otherwise, we know that there is no error and that it works
                
            //give it whather the response code and content type was
            res.writeHead(responseCode, {'Content-Type': contentType});
            //send our wahterver data we have
            res.end(data);
        }
    });
 }

 http.createServer(function(req, res){
    //normalize url by querystring, optional trailing slash, and making lwoercase
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();

    // if they go to url, tehn serve home page
    //      break tells sqitch statment that this case is over and doen executing

    switch(path){
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');            
            break;
        case '/announcement':
            serveStaticFile(res, '/public/announcement.html', 'text/html');
            break;
        case '/shop':
            serveStaticFile(res, '/public/shop.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/login':
            serveStaticFile(res, '/public/login.html', 'text/html');
            break;
        case '/css/boostrap.css':
            serveStaticFile(res, '/public/css/boostrap.css', 'text/css');
            break;
        case '/css/about.css':
            serveStaticFile(res, '/public/css/about.css', 'text/css');
            break;
        case '/css/home.css':
            serveStaticFile(res, '/public/css/home.css', 'text/css');
            break;
        case '/css/contact.css':
            serveStaticFile(res, '/public/css/contact.css', 'text/css');
            break;
        case '/css/login.css':
            serveStaticFile(res, '/public/css/login.css', 'text/css');
            break;
        case '/css/shop.css':
            serveStaticFile(res, '/public/css/shop.css', 'text/css');
            break;
        case '/css/announcement.css':
            serveStaticFile(res, '/public/css/announcement.css', 'text/css');
            break;
        case '/css/util.css':
            serveStaticFile(res, '/public/css/util.css', 'text/css');
            break;
        case '/data/announcement.html':
            serveStaticFile(res, '/public/data/announcement.html', 'text/html');
            break;
        case '/data/announcements.xml':
            serveStaticFile(res, '/public/data/announcements.xml', 'application/xml');
            break;
        case '/data/crystals.json':
            serveStaticFile(res, '/public/data/crystals.json', 'application/json');
            break;
        case '/data/shop.html':
            serveStaticFile(res, '/public/data/shop.html', 'text/html');
            break;
        case '/fonts/Reforma2018-Blanca.otf':
            serveStaticFile(res, '/public/fonts/Reforma2018-Blanca.otf', 'font/otf');
            break;
        case '/fonts/Reforma2018-BlancaItalica.otf':
            serveStaticFile(res, '/public/fonts/Reforma2018-BlancaItalica.otf', 'font/otf');
            break;
        case '/fonts/Reforma2018-Gris.otf':
            serveStaticFile(res, '/public/fonts/Reforma2018-Gris.otf', 'font/otf');
            break;
        case '/fonts/Reforma2018-GrisItalica.otf':
            serveStaticFile(res, '/public/fonts/Reforma2018-GrisItalica.otf', 'font/otf');
            break;
        case '/fonts/Reforma2018-Negra.otf':
            serveStaticFile(res, '/public/fonts/Reforma2018-Negra.otf', 'font/otf');
            break;
        case '/fonts/Reforma2018-NegraItalica.otf':
            serveStaticFile(res, '/public/fonts/Reforma2018-NegraItalica.otf', 'font/otf');
            break;
        case '/images/abbeys-crystals-high-resolution-logo-black-on-transparent-background.png':
            serveStaticFile(res, '/public/images/abbeys-crystals-high-resolution-logo-black-on-transparent-background.png', 'image/png');
            break;
        case '/images/abbeys-crystals-high-resolution-logo-color-on-transparent-background.png':
            serveStaticFile(res, '/public/images/abbeys-crystals-high-resolution-logo-color-on-transparent-background.png', 'image/png');
            break;
        case '/images/abbeys-crystals-high-resolution-logo-white-on-transparent-background.png':
            serveStaticFile(res, '/public/images/abbeys-crystals-high-resolution-logo-white-on-transparent-background.png', 'image/png');
            break;
        case '/images/abbeys-crystals-website-favicon-color.png':
            serveStaticFile(res, '/public/images/abbeys-crystals-website-favicon-color.png', 'image/png');
            break;
        case '/images/frstones_gems_mineral_minerals-image-kybco9s8-kynnbmkk.jpg':
            serveStaticFile(res, '/public/images/frstones_gems_mineral_minerals-image-kybco9s8-kynnbmkk.jpg', 'image/jpg');
            break;
        case '/images/icons8-name-96.png':
            serveStaticFile(res, '/public/images/icons8-name-96.png', 'image/png');
            break;
        case '/images/abbey.png':
            serveStaticFile(res, '/public/images/abbey.png', 'image/png');
            break;
        case '/images/pexels-roman-odintsov-6611748.jpg':
            serveStaticFile(res, '/public/images/pexels-roman-odintsov-6611748.jpg', 'image/jpg');
            break;
        case '/images/placeholder.jpg':
            serveStaticFile(res, '/public/images/placeholder.jpg', 'image/jpg');
            break;
        case '/scripts/announce_jquery.js':
            serveStaticFile(res, '/public/scripts/announce_jquery.js', 'application/javascript');
            break;
        case '/scripts/home_announceAJAX.js':
            serveStaticFile(res, '/public/scripts/home_announceAJAX.js', 'application/javascript');
            break;
        case '/scripts/announcementAJAX.js':
            serveStaticFile(res, '/public/scripts/announcementAJAX.js', 'application/javascript');
            break;
        case '/scripts/picture_jquery.js':
            serveStaticFile(res, '/public/scripts/picture_jquery.js', 'application/javascript');
            break;
        case '/scripts/shopAJAX.js':
            serveStaticFile(res, '/public/scripts/shopAJAX.js', 'application/javascript');
            break;
        case '/scripts/about.js':
            serveStaticFile(res, '/public/scripts/about.js', 'application/javascript');
            break;
        case '/scripts/shop-html.js':
            serveStaticFile(res, '/public/scripts/shop-html.js', 'application/javascript');
            break;
        
        // in the case that it is none of the above, we have a defaule case so that our server does not break
        //  and we serve the 404 page
        //  we let serve lknow that something went wrong by setting http response status code to 404
        default: 
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
 }).listen(PORT); // tell the server what port to be on 

 
console.log("Server running on: http://localhost:" + PORT);