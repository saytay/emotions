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
