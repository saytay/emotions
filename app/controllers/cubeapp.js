import Ember from 'ember';

export default Ember.Controller.extend({
  help: 'Variables on your controller are accessible in the template.',

  questionOneAnswer: null,
  questionOneChoices: ['excited', 'relaxed', 'sad', 'angry', 'other'],
  questionOneAlternative: null,

  questionOneIsOther: Ember.computed(function(){
    return this.get('questionOneAnswer') == 'other';
  }).property('questionOneAnswer'),

  questionTwoAnswer: 0,

  questionThreeAnswer: null,
  
  questionFourAnswer: null,

  questionFiveAnswer: null,

  questionSixAnswer: null,
  questionSevenAnswer: null,
  questionEightAnswer: null,
  questionNineAnswer: null,
  questionTenAnswer: null,
  questionElevenAnswer: null,
  questionTwelveAnswer: null,




  pastAnswers: [],


  actions: {
    saveAnswers: function(){
      if (this.get('questionOneAnswer') == 'other'){
        var name = this.get('questionOneAlternative');
      } else {
        var name = this.get('questionOneAnswer');
      }
      var range = this.get('questionTwoAnswer');
      var reason = this.get('questionThreeAnswer');
      var interpretation = this.get('questionFourAnswer');
      var bodyChanges = this.get('questionFiveAnswer');
      var bodyLanguage = this.get('questionSixAnswer');
      var urge = this.get('questionSevenAnswer');
      var reaction = this.get('questionEightAnswer');
      var effect = this.get('questionNineAnswer');
      var purpose = this.get('questionTenAnswer');
      var secondLook = this.get('questionElevenAnswer');
      var summary = this.get('questionTwelveAnswer');


      this.get('pastAnswers').addObject(
        {
          'name': name,
          'range': range,
          'reason': reason,
          'interpretation': interpretation,
          'bodyChanges': bodyChanges,
          'bodyLanguage': bodyLanguage,
          'urge': urge,
          'reaction': reaction,
          'effect': effect,
          'purpose': purpose,
          'secondLook': secondLook,
          'summary': summary
        }
      );
    }
  }

});

