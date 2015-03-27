export default Ember.ObjectController.extend({
  // initial value
  isClicked: false,

  actions: {
    Login: function() {
      this.set('isClicked', true);
  //link accounts


      var client = new Dropbox.Client({key: n4iqdi06xsx7bef});//be sure to replace APP_KEY with the real value for your app}}

      // Try to finish OAuth authorization.
      client.authenticate({interactive: false}, function (error) {
          if (error) {
              alert('Authentication error: ' + error);
          }
      });

      if (client.isAuthenticated()) {
          // Client is authenticated. Display UI.
    }

},


    Nothing: function() {
      this.set('isClicked',false);
    }
  }
});
