import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // each route corresponds with a .hbs file in the templates directory
	this.route('menu');
  this.route('cubeapp', { path: '/' });
  this.route('login');
  this.route('old-worksheet');
  this.route('setting-menu');
});

export default Router;
