let userSettings = {
  "name": "Brian",
  "shameList": ['https://www.facebook.com/', 'http://www.hackreactor.com/'],
  "version": "1.0",
};

jQuery("<img/>").prependTo("body").attr({
  src: 'https://m.popkey.co/6bee24/6GJWk.gif',
  alt: '',
  width: '100%',
  height: '100%',
});  

getCurrentTabUrl(function(url) {
    // $('.container').prepend(`<p>Give the url: ${url}</p>`);
    // $('.container').prepend(`<p>Give the url: ${userSettings}</p>`);
    if (userSettings.shameList.includes(url)) {
      jQuery("<img/>").prependTo("body").attr({
        src: 'https://m.popkey.co/6bee24/6GJWk.gif',
        alt: '',
        width: '100%',
        height: '100%',
     });  
  }
})

function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}