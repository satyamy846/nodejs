const mongodb = require("mongodb");
const url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";
const client = new mongodb.MongoClient(url);
async function run() {
  try {
    await client.connect();
    const database = client.db("management")
    const person = database.collection("faculty")
    // const cursor = UserCollection.find({});
    // console.log("Aggregation query");

    const docs =[
      {name:"Sunil",age:15},
      {name:"Ramesh",age:45},
      {name:"Rahul",age:20}
    ]
    
    const options = { ordered: true };
    const result = await person.insertMany(docs, options);
    //this will show that our respective document were inserted along with their count
    console.log(`${result.insertedCount} documents were inserted`);

    // await cursor.forEach((docs) => {
    //   console.log(docs);
    // });

  } 
  catch (err) 
  {
    console.error(err);
  } 
  finally 
  {
    await client.close();
  }
}
run();