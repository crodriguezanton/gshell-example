"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("@gshell/express");
const mongodb_1 = require("@gshell/mongodb");
const test = new express_1.GExpress({ port: 3000 }, []);
const testMongo = new mongodb_1.default({ uri: "mongodb://root:toor123@ds133256.mlab.com:33256/gshell", name: "gshell" });
test.up().then().catch(err => console.log(err));
testMongo.up().then(err => { console.log(testMongo.getDb().collection("test").find({}).toArray()); }).catch(err => console.log(err));
console.log("Test!");
//# sourceMappingURL=index.js.map