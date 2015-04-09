describe('getScore', function() {
  it('accepts an "a" for input and returns score of 1', function() {
    expect(getScore('a')).to.equal(1);
  });

  it('accepts a "d" for input and returns score of 2', function() {
    expect(getScore('d')).to.equal(2);
  });

  it('accepts a "ee" for input and returns score of 2', function() {
    expect(getScore('ee')).to.equal(2);
  });

  it('accepts a "cgi" for input and returns score of 6', function() {
    expect(getScore("cgi")).to.equal(6);
  });

  it('accepts a "strength" for input and returns a score of 12', function() {
    expect(getScore("strength")).to.equal(12);
  });

  it('accepts a "qi" for input and returns a score of 11', function() {
    expect(getScore("qi")).to.equal(11);
  });

});
