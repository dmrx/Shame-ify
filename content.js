let userSettings = {
  "name": "Brian",
  "shameList": ['https://www.facebook.com/', 'http://www.hackreactor.com/'],
  "version": "1.0",
};

    if (userSettings.shameList.includes(window.location.href)) {
      jQuery("<img/>").prependTo("body").attr({
        src: 'https://m.popkey.co/6bee24/6GJWk.gif',
        alt: '',
        width: '100%',
        height: '100%',
     });  
  }

