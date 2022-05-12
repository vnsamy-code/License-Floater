const request = require('supertest');
const expect = require('chai');
const app = require('../src/app');

describe('Home Page response - /', () => {
    it('should return page:home response on / path', (done) => {
        request(app)
            .get('/')
            .expect({ "page": "home" }, done);
    })
})