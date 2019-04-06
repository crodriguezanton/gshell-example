import { GExpress } from "@gshell/express";
import GMongoDB from "@gshell/mongodb";

const test = new GExpress({port: 3000}, []);
const testMongo = new GMongoDB({uri: "mongodb://root:toor123@ds133256.mlab.com:33256/gshell", name: "gshell"});

test.up().then(()=>console.log('UP')).catch(err=>console.log(err));
