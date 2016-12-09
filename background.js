let userSettings = {
  "name": "Brian",
  "shameList": ['https://www.facebook.com/', 'http://www.hackreactor.com/', 'https://www.buzzfeed.com/', 'https://www.etsy.com/', 'http://penthouse.com/', 'http://www.chippendales.com/'],
  "version": "1.0",
};

chrome.storage.sync.get('shamelist', function (obj) {
    userSettings.shameList = obj.shamelist;
  });

function toShame(url){
  let arr = userSettings.shameList.split(" ");
  let urlB = url;
  console.log(arr);
  for (let i = 0; i < arr.length; i++){
    if (urlB.includes(arr[i])) {console.log(arr[i]); return true;};
  }
  return false;
}


setInterval(()=>{
  console.log('in interval')
  getCurrentTabUrl(function(url) {
    console.log("in the cur tab");
    if (toShame(url)) {
      console.log('in the shamer');
      // chrome.tts.speak(`SHAME SHAME SHAME ${userSettings.name}`, {'rate': 0.7, 'gender': 'female', 'lang': 'en-GB', 'pitch': 0.7});
      const shame = new Audio('shame.mp3');
      shame.play();
    }
  });
}, 7000);

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