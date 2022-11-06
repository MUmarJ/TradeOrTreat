const { MongoClient } = require("mongodb");
const Db =
  "mongodb+srv://test-user:czeapUgz2qxK2jnZ@demonhacks.cevcgwn.mongodb.net/TradeOrTreat?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("TradeOrTreat");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
