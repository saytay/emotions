import Ember from 'ember';

export default Ember.Controller.extend({
  help: 'Variables on your controller are accessible in the template.',

  questionOneAnswer: null,

  questionTwoAnswer: null,
  questionTwoChoices: ['cat', 'dog', 'other'],
  questionTwoAlternative: null,

  questionTwoIsOther: Ember.computed(function(){
    return this.get('questionTwoAnswer') == 'other';
  }).property('questionTwoAnswer'),

  questionThreeAnswer: 0,


  pastAnswers: [],


  actions: {
    saveAnswers: function(){
      var name = this.get('questionOneAnswer');
      if (this.get('questionTwoAnswer') == 'other'){
        var animal = this.get('questionTwoAlternative');
      } else {
        var animal = this.get('questionTwoAnswer');
      }
      var number = this.get('questionThreeAnswer');

      this.get('pastAnswers').addObject(
        {
          'name': name,
          'animal': animal,
          'number': number
        }
      );
    }
  }

});

