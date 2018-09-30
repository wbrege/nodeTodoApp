var assert = require('assert');
var server = require('./server');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

var testTodoComplete = {
    name: "testTodo",
    priority: 1,
    dueDate: null
}
var testTodoIncomplete = {
    priority: 1
}

describe('endpoint testing', function() {
    describe('/new HTTP tests', function() {
        it('POST new naive', function() {
            chai.request(server)
                .post('/new')
                .send(testTodoComplete)
                .end((err, res) => {
                    console.log(res.status)
                    res.should.have.status(200);
                });
        });

        it('POST incomplete', function() {
            chai.request(server)
                .post('/new')
                .end((err, res) => {
                    console.log(res.status)
                    res.should.have.status(400);
                });
        });
    });
});