// see https://stackoverflow.com/questions/23202136/changing-navigator-useragent-using-chrome-extension
var actualCode =  '(' + function() {
    // Get the correct platform for navigator.userAgent 自动根据useragent修改platform
    /*var candidates = ["Android", "iPhone", "iPod", "iPad"];
    var modifiedPlatform;
    for(var maybe of candidates) {
        if(navigator.userAgent.match(maybe)) {
            modifiedPlatform = maybe;
            break;
        }
    }

    if(!modifiedPlatform) {
        return;
    }*/
    var modifiedPlatform="Android";
    // Reset platform
    Object.defineProperty(navigator, 'platform', {
        get: function(){
            return modifiedPlatform;
        }});
} + ')();';

// Inject custom js
var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
