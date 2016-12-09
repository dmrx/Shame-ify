let userSettings = {
  "name": "Brian",
  "shameList": ['https://www.facebook.com/', 'http://www.hackreactor.com/', 'https://www.buzzfeed.com/', 'https://www.etsy.com/', 'http://penthouse.com/', 'http://www.chippendales.com/'],
  "version": "1.0",
};

chrome.storage.sync.get('shamelist', function (obj) {
    userSettings.shameList = obj.shamelist;
      console.log("Content.js thinks you are at: ", window.location.href);

function toShame(){
  let arr = userSettings.shameList.split(" ");
  let url = window.location.href;
  console.log(arr);
  for (let i = 0; i < arr.length; i++){
    if (url.includes(arr[i])) {console.log(arr[i]); return true;};
  }
  return false;
}
//userSettings.shameList.includes(window.location.href)
    if (toShame()) {
      jQuery("<img/>").prependTo("body").attr({
        src: 'https://m.popkey.co/6bee24/6GJWk.gif',
        alt: '',
        width: '100%',
        height: '100%',
     });  
  }
});
