const mongodb = require("mongodb");
const url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";
const client = new mongodb.MongoClient(url);

async function run() {
  try {
    await client.connect();
    //  employee is existing db or person is existing collection
    const UserCollection = client.db("employee").collection("person");

    const cursor = UserCollection.find({});
    //finding the all queries using for loop
    await cursor.forEach((docs) => {
      console.log(docs);
    });
    } 
    catch (err) {
        console.error(err);
    } 
    finally {
        await client.close();
    }
}
run();