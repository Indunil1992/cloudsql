module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instanceid1"] = {
        host: "34.74.81.116",
        port: "3306",
        user: "root",
        password: process.env.Password_sqlinstanceid1,
        database: "mysql"
    };
};