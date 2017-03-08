//Schord v0.0.1
//made by nokko
(function(ext) {
        ext.bot_ready = function(bot_name) {
            let ready_return = true;
            if (ready_return)
                return true;
        };
        
        // Status reporting code
        // Use this to report missing hardware, plugin or unsupported browser
        ext._getStatus = function() {
            return {status: 2, msg: 'Ready'};
        };

        ext._shutdown = function() {
            if (poller) {
                clearInterval(poller);
                poller = null;
            }
        };
        // Block and block menu descriptions
        var descriptor = {
            blocks: [
                // Block type, block name, function name
                // Block type 'h' is for hat.
                ['h', 'when the Discord bot %s logs in', 'bot_ready', 'John Smith'],
            ],
            url: 'https://dimdown.github.io/schord',
        };
    
        // Register the extension
        ScratchExtensions.register('Gimped Schord', descriptor, ext);
})({});