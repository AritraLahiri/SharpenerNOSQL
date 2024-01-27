const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;

const connectToMongoServer = () => {
  MongoClient.connect(
    "mongodb+srv://aritralahiri17:nRqDocoPACQhtYrA@sharpenercluster.1adgqei.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((res) => {
      console.log("CONNECTED TO MONGO SERVER");
      _db = res.db();
    })
    .catch((e) => console.log(e));
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "No Database found";
};

exports.connectToMongoServer = connectToMongoServer;
exports.getDB = getDB;
