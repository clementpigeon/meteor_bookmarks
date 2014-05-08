chrome.tabs.getSelected(null, function(tab) {
    var currentUrl = tab.url;
    document.getElementById('meteorIframe').src = "http://localhost:3000/#" + currentUrl;
});
