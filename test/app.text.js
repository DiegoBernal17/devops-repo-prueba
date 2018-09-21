const request = require('supertest');

const app = require('../app');

describe('app', () => {
  it('Should serve html in index', (done) => {
    request(app).get('/').expect('Content-Type', /html/).expect(200, done)
  });
});
