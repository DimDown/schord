//Schord v0.0.1
//made by nokko
(function(ext) {
    //Load the discord.io library
    $.getScript( "http://dimdown.github.io/schord/discord-io.js", function( data, textStatus, jqxhr ) {
    return null;
    });
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {

    };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };



    ext.bot_ready = function() {

        let client = new Discord.Client({
            token: "MTkwNjg2NzYyNTY0MDU5MTM3.C6FNZw.bFBUVjsHBYZn1PkcTsRy0jP9Oi8",
            autorun: true
        });

        client.on('ready', function() {
            console.log("%s (%s)... in ScratchX!", client.username, client.id);
            ready_return = true
        });

        if (ready_return)
            return;
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            // Block type 'h' is for hat.
            ['h', 'when the Discord bot logs in', 'bot_ready'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Schord', descriptor, ext);
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
    
}

loadScript('lib/index.js', main) 
*/