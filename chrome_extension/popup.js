chrome.tabs.getSelected(null, function(tab) {
    var currentUrl = encodeURIComponent(tab.url);
    var title = encodeURIComponent(tab.title);
    var fragment = currentUrl + "&" + title;
    var iframeUrl = "http://localhost:3000/#" + fragment
    document.getElementById('meteorIframe').src = iframeUrl;
});
