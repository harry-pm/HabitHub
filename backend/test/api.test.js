process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
chai.use(chaiHttp);


describe('API Routes', function() {
    
    
    describe('GET /readAllUsers', function() {
        it('should return all users', function(done) {
          chai.request(server)
          .get('/readAllUsers')
          .end(function(err, res) {
            //   console.log(res.body)
          res.should.have.status(200);
          res.should.be.json; // jshint ignore:line
          res.body.should.be.a('array');
          res.body.length.should.equal(3);
          res.body[0].should.have.property('username');
          res.body[0].username.should.equal('juicey');
          res.body[0].should.have.property('password');
          res.body[0].password.should.equal('yusey');
          done();
          });
        });
      });
      describe('GET /readUserHabits/:id', function() {
        it('should return the habits for 1 user, without changes', function(done) {
          chai.request(server)
          .get('/readUserHabits/5e29fb7796f816202cdf5044')
          .end(function(err, res) {
            // console.log(res.body)
          res.should.have.status(200);
          res.should.be.json; // jshint ignore:line
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
          res.body[0].should.have.property('name');
          res.body[0].name.should.equal('eating');
          res.body[0].should.have.property('streak');
          res.body[0].streak.should.equal(0);
          res.body[0].should.have.property('completed');
          res.body[0].completed.should.be.a('array')
          res.body[0].completed[0].should.equal(false);
          res.body[0].should.have.property('lastCompleted');
          res.body[0].lastCompleted.should.equal('2020-01-21T00:00:00.000Z');
          done();
          });
        });

        it('should return the habits for 1 user, updating streak and completed values', function(done) {
            chai.request(server)
            .get('/readUserHabits/5e29fb7796f816202cdf5047')
            .end(function(err, res) {
              console.log(res.body)
            res.should.have.status(200);
            res.should.be.json; // jshint ignore:line
            res.body.should.be.a('array');
            res.body.length.should.equal(1);
            // res.body[0].should.have.property('name');
            // res.body[0].name.should.equal('eating');
            // res.body[0].should.have.property('streak');
            // res.body[0].streak.should.equal(0);
            // res.body[0].should.have.property('completed');
            // res.body[0].completed.should.be.a('array')
            // res.body[0].completed[0].should.equal(false);
            // res.body[0].should.have.property('lastCompleted');
            // res.body[0].lastCompleted.should.equal('2020-01-21T00:00:00.000Z');
            done();
            });
          });
      });
      

    
     
      
})