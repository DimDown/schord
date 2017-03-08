//Schord v0.0.1
//made by nokko
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});

/*
function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

let main = function(){
    var client = new Discord.Client({
        token: "MTkwNjg2NzYyNTY0MDU5MTM3.C6FNZw.bFBUVjsHBYZn1PkcTsRy0jP9Oi8",
        autorun: true
    });
    client.on('ready', function() {
        console.log("%s (%s)... in the browser!", client.username, client.id);
    });
    client.on('message', function(user, userID, channelID, message, event) {
        if (message === 'ping') {
            client.sendMessage({
                to: userID,
                message: "pong from scratch!"
            });
        }
    });
}

loadScript('lib/index.js', main) 
*/