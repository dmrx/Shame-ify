
// let userSettings = {
//   "name": "Timothy",
//   "shameList": ['https://www.facebook.com/', 'buzzfeed.com'],
//   "version": "1.0",
// };

// alert('loaded popup')
// window.addEventListener('DOMContentLoaded', function() {
//   alert('alert')
//   console.log(window)
//   console.log("HI!");
//   $('.container').prepend("<p>Give me some text</p>");
//   getCurrentTabUrl(function(url) {
//     $('.container').prepend(`<p>Give the url: ${url}</p>`);
//     $('.container').prepend(`<p>Give the url: ${userSettings}</p>`);
//     if (userSettings.shameList.includes(url)) {  
//       setInterval(()=>chrome.tts.speak('SHAME', {'rate': 0.7, 'gender': 'female', 'lang': 'en-GB', 'pitch': 0.7}), 1500);
//       setInterval(()=>console.log("shame"), 1000);
//     }
//   });  
// });




// function getCurrentTabUrl(callback) {
//   // Query filter to be passed to chrome.tabs.query - see
//   // https://developer.chrome.com/extensions/tabs#method-query
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     // chrome.tabs.query invokes the callback with a list of tabs that match the
//     // query. When the popup is opened, there is certainly a window and at least
//     // one tab, so we can safely assume that |tabs| is a non-empty array.
//     // A window can only have one active tab at a time, so the array consists of
//     // exactly one tab.
//     var tab = tabs[0];

//     // A tab is a plain object that provides information about the tab.
//     // See https://developer.chrome.com/extensions/tabs#type-Tab
//     var url = tab.url;

//     // tab.url is only available if the "activeTab" permission is declared.
//     // If you want to see the URL of other tabs (e.g. after removing active:true
//     // from |queryInfo|), then the "tabs" permission is required to see their
//     // "url" properties.
//     console.assert(typeof url == 'string', 'tab.url should be a string');

//     callback(url);
//   });
// }



// console.log("Where am I?");


