var expect  = require('chai').expect;
var sinon = require('sinon');

it('verifier 1=1', function() {
        expect(1).to.equal(1);//test
});

var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../src/main');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});