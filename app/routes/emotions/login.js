import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function(controller) {
  	this.render('templates/login', {controller: controller});
  }
});