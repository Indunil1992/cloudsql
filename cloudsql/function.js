let SL_GCP = require('slappforge-sdk-gcp');
let sqlConnMgr = require('./SqlConnMgr');
const sql = new SL_GCP.SQL(sqlConnMgr);

exports.handler = function (request, response) {
    // You must always end/destroy the DB connection after it's used.
    sql.beginTransaction({
        instanceIdentifier: 'instanceid1'
    }, function (error, connection) {
        if (error) {
            throw error;
            console.log("errrrrrrrrrrrrr");
        }
    });
connection.commit();
    response.send({ "message": "Successfully executed" });
}