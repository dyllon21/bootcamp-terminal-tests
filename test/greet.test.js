const assert = require('assert');
var greet = require('../greet');

describe('greet', function(){
  it('should greet Janine correctly', function(){
    assert.equal('Hello, Janine', greet('Janine'));
  });

});
