chrome.tabs.getSelected(null, function(tab) {
    var currentUrl = encodeURIComponent(tab.url);
    var title = encodeURIComponent(tab.title);
    var fragment = currentUrl + "&" + title;
    var iframeUrl = "http://meteor_bookmarks.meteor.com/#" + fragment
    document.getElementById('meteorIframe').src = iframeUrl;
});
