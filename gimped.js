//Schord v0.0.1
//made by nokko
(function(ext) {
    $.getScript("discord-io.js",

    function(ext) {
        // Cleanup function when the extension is unloaded
        ext._shutdown = function() {

        };

        // Status reporting code
        // Use this to report missing hardware, plugin or unsupported browser
        ext._getStatus = function() {
            return {status: 2, msg: 'Ready'};
        };



        ext.bot_ready = function() {
            let ready_return = true;
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
        ScratchExtensions.register('Gimped Schord (testing variety, v0.0.1)', descriptor, ext);
    });
})({});