// put this up here so we can access `client` everywhere in our controller
var client = new Dropbox.Client({key: 'n4iqdi06xsx7bef'}); // need to use quotes because the key is a string

export default Ember.ObjectController.extend({
  // initial value
  isClicked: false,

  tasks: [],

  actions: {
    Login: function() {
      this.set('isClicked', true);

      client.authenticate(function (error) {
          if (error) {
              alert('Authentication error: ' + error);
          }
      });
    },

    addMilk: function(){
      var datastoreManager = client.getDatastoreManager();
      datastoreManager.openDefaultDatastore(function (error, datastore) {
          if (error) {
              alert('Error opening default datastore: ' + error);
          }

          var taskTable = datastore.getTable('tasks');
          var firstTask = taskTable.insert({
            taskname: 'Buy milk',
            completed: false,
            created: new Date()
          });
      });
    },

    updateTasks: function(){
      var datastoreManager = client.getDatastoreManager();
      var self = this;
      datastoreManager.openDefaultDatastore(function (error, datastore) {
          if (error) {
              alert('Error opening default datastore: ' + error);
          }

          var taskTable = datastore.getTable('tasks');
          var tasks = taskTable.query();
          self.set('tasks', tasks);
      });
    },

    Nothing: function() {
      this.set('isClicked',false);
    }
  }
});
