let userSettings = {
  "name": "Brian",
  "shameList": ['https://www.facebook.com/', 'http://www.hackreactor.com/', 'https://www.buzzfeed.com/', 'https://www.etsy.com/', 'http://penthouse.com/', 'http://www.chippendales.com/'],
  "version": "1.0",
};
      console.log("Content.js thinks you are at: ", window.location.href);

    if (userSettings.shameList.includes(window.location.href)) {
      jQuery("<img/>").prependTo("body").attr({
        src: 'https://m.popkey.co/6bee24/6GJWk.gif',
        alt: '',
        width: '100%',
        height: '100%',
     });  
  }

