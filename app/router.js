import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('status');
  this.route('stream');
  this.route('about');
  this.route('terms');
  this.route('privacy');
  this.route('license');
});

export default Router;
