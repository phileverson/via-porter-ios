cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/com.bez4pieci.cookies/www/cookies.js",
        "id": "com.bez4pieci.cookies.cookies",
        "clobbers": [
            "cookies"
        ]
    },
    {
        "file": "plugins/com.chariotsolutions.cordova.plugin.keyboard_toolbar_remover/www/keyboard_toolbar_remover.js",
        "id": "com.chariotsolutions.cordova.plugin.keyboard_toolbar_remover.KeyboardToolbarRemover",
        "clobbers": [
            "toolbar"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.labs.keyboard/www/keyboard.js",
        "id": "org.apache.cordova.labs.keyboard.keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.inappbrowser": "0.6.0",
    "com.bez4pieci.cookies": "0.0.1",
    "com.chariotsolutions.cordova.plugin.keyboard_toolbar_remover": "0.0.2",
    "com.ionic.keyboard": "1.0.4",
    "org.apache.cordova.labs.keyboard": "0.1.2"
}
// BOTTOM OF METADATA
});