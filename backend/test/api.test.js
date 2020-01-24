process.env.NODE_ENV = 'test';
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
const { Habit, User } = require('../habits.model');
chai.use(chaiHttp);


describe('API Routes', function() {
    
    
    // describe('GET /readAllUsers', function() {
    //     it('should return all users', function(done) {
    //       chai.request(server)
    //       .get('/readAllUsers')
    //       .end(function(err, res) {
    //       console.log(res.body)
    //       res.should.have.status(200);
    //       res.should.be.json; // jshint ignore:line
    //       res.body.should.be.a('array');
    //       res.body.length.should.equal(3);
    //       res.body[0].should.have.property('username');
    //       res.body[0].username.should.equal('juicey');
    //       res.body[0].should.have.property('password');
    //       res.body[0].password.should.equal('yusey');
    //       done();
    //       });
    //     });
    //   });
    //   describe('GET /readUserHabits/:id', function() {
    //     it('should return the habits for 1 user, without changes', function(done) {
    //       //jtrigger
    //       chai.request(server)
    //       .get('/readUserHabits/5e2a3831a7abf3044c2beaa7')
    //       .end(function(err, res) {
    //         // console.log(res.body)
    //       res.should.have.status(200);
    //       res.should.be.json; // jshint ignore:line
    //       res.body.should.be.a('array');
    //       res.body.length.should.equal(1);
    //       res.body[0].should.have.property('name');
    //       res.body[0].name.should.equal('eating');
    //       res.body[0].should.have.property('streak');
    //       res.body[0].streak.should.equal(0);
    //       res.body[0].should.have.property('completed');
    //       res.body[0].completed.should.be.a('array')
    //       res.body[0].completed[0].should.equal(false);
    //       res.body[0].completed[1].should.equal(false);
    //       res.body[0].completed[2].should.equal(false);
    //       res.body[0].should.have.property('lastCompleted');
    //       res.body[0].lastCompleted.should.equal('2020-01-21T00:00:00.000Z');
    //       done();
    //       });
    //     });

    //     it('should return the habits for 1 user, increase streak and completed to false', function(done) {
    //       //Lau Ran
    //         chai.request(server)
    //         .get('/readUserHabits/5e2a3831a7abf3044c2beaaa')
    //         .end(function(err, res) {
    //           // console.log(res.body)
    //         res.should.have.status(200);
    //         res.should.be.json; // jshint ignore:line
    //         res.body.should.be.a('array');
    //         res.body.length.should.equal(1);
    //         res.body[0].should.have.property('name');
    //         res.body[0].name.should.equal('exercise');
    //         res.body[0].should.have.property('streak');
    //         res.body[0].streak.should.equal(8);
    //         res.body[0].should.have.property('completed');
    //         res.body[0].completed.should.be.a('array')
    //         res.body[0].completed[0].should.equal(false);
    //         res.body[0].should.have.property('lastCompleted');
    //         res.body[0].lastCompleted.should.equal('2020-01-23T00:00:00.000Z');
    //         done();
    //         });
    //       });

    //       it('should return the habits for 1 user, reset streak and completed to false', function(done) {
    //         //juicey
    //         chai.request(server)
    //         .get('/readUserHabits/5e2a3831a7abf3044c2beaa3')
    //         .end(function(err, res) {
    //           // console.log(res.body)
    //         res.should.have.status(200);
    //         res.should.be.json; // jshint ignore:line
    //         res.body.should.be.a('array');
    //         res.body.length.should.equal(2);
    //         res.body[1].should.have.property('name');
    //         res.body[1].name.should.equal('pushups');
    //         res.body[1].should.have.property('streak');
    //         res.body[1].streak.should.equal(0);
    //         res.body[1].should.have.property('completed');
    //         res.body[1].completed.should.be.a('array')
    //         res.body[1].completed[0].should.equal(false);
    //         res.body[1].completed[1].should.equal(false);
    //         res.body[1].completed[2].should.equal(false);
    //         res.body[1].should.have.property('lastCompleted');
    //         res.body[1].lastCompleted.should.equal('2020-01-19T00:00:00.000Z');
    //         done();
    //         });
    //       });
    //   });

  
      // describe('POST /addUser', function() {
      //   it('add a user to the database, returing success true', function(done) {
      //     chai.request(server)
      //     .post('/addUser')
      //     .send({
      //       username: "new",
      //       password: "user"
      //     })
      //     .end(function(err, res) {
      //       res.should.have.status(200);
      //       res.should.be.json; // jshint ignore:line
      //       res.body.should.be.a('object');
      //       res.body.should.have.property('user');
      //       res.body.user.should.have.property('username');
      //       res.body.user.username.should.equal('new');
      //       res.body.user.should.have.property('password');
      //       res.body.user.password.should.equal('user');
      //       res.body.user.should.have.property('habits');
      //       // res.body.user.habits.should.equal([])
      //       res.body.should.have.property('success');
      //       res.body.success.should.equal(true);
      //       done();
      //     })

          
      //   })

      //   it('should fail to add a dupilcate user', function(done) {
      //     chai.request(server)
      //     .post('/addUser')
      //     .send({
      //       username: "new",
      //       password: "user"
      //     })
      //     .end(function(err, res) {
      //       res.should.have.status(500);
      //       res.should.be.json; // jshint ignore:line
      //       res.body.should.be.a('object');
      //       res.body.should.have.property('success');
      //       res.body.success.should.equal(false);
      //       done();
      //     })
      // })

      // })

      // describe('POST /addHabit/:id', function() {
      //   it('should add a habit to a specifc user', function(done) {
      //     //jtrigger
      //     chai.request(server)
      //     .post('/addHabit/5e2a3831a7abf3044c2beaa7')
      //     .send({
      //             name: 'addHabit',
      //             completed: [false]
      //           })
      //     .end(function(err, res) {
      //       console.log(res.body)
      //       res.should.have.status(200);
      //       res.should.be.json;
      //       res.body.should.be.a('object');
      //       res.body.should.have.property('name');
      //       res.body.name.should.equal('addHabit');
      //       res.body.should.have.property('completed');
      //       res.body.completed.should.be.a('array')
      //       res.body.completed[0].should.equal(false);
      //       res.body.should.have.property('streak');
      //       res.body.streak.should.equal(0);
      //       res.body.should.have.property('lastCompleted');
      //       // res.body.lastCompleted.should.equal(null);
      //       done();
      //     })
         
          
      //   })
      // })

      // describe('POST /updateHabits/:id', function() {
      //   it('should update a habit for a specifc user', function(done) {
      //     //Lau Ran
      //     chai.request(server)
      //     .post('/addHabit/5e2a3831a7abf3044c2beaaa')
      //     .send({
      //      habits: [
      //       {_id: "5e2a3831a7abf3044c2beaa9", name:'exercise', streak: 0, completed:[false], lastCompleted: new Date("01/10/2020")}
      //   ]
      //   })
      //     .end(function(err, res) {
      //       console.log(res.body)
      //       res.should.have.status(200);
      //       res.should.be.json;
      //       res.body.should.be.a('array');
      //       res.body.should.have.property('name');
      //       res.body.name.should.equal('addHabit');
      //       res.body.should.have.property('completed');
      //       res.body.completed.should.be.a('array')
      //       res.body.completed[0].should.equal(false);
      //       res.body.should.have.property('streak');
      //       res.body.streak.should.equal(0);
      //       res.body.should.have.property('lastCompleted');
      //       res.body.lastCompleted.should.equal('2020-01-10T00:00:00.000Z');
      //       done();
      //     })
         
          
      //   })
      // })
          
      

    
     
      
})