test("it creates a date field", function() {
  var dateField = EF.DateField.create({});

  var date = new Date(),
      day = date.getDay(),
      month = date.getMonth(),
      year = date.getFullYear();

  Ember.run(function(){
    dateField.appendTo("#qunit-fixture");
    dateField.set('value', date);
  });

  equal(dateField.$('select:first option[selected]').val(), day + '');
  equal(dateField.$('select:nth-child(2) option[selected]').val(), month + '');
  equal(dateField.$('select:nth-child(3) option[selected]').val(), year + '');

  Ember.run(function(){
    dateField.destroy();
  });
});
