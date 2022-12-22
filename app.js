const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'Why no name'],
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema)

const guava = new Fruit ({
  name: "Guava",
  rating: 9,
  review: "Tasty fruit"
});


// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 8,
//   review: "Healthy food"
// });

// const orange = new Fruit ({
//   name: "Orange",
//   rating: 9,
//   review: "tangy food"
// });

// const mango = new Fruit ({
//   name: "Mango",
//   rating: 10,
//   review: "King food"
// });


// fruit.save();

guava.save();



const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema)

// const person = new Person ({
//   name: "Yuvaan",
//   age: 2
// });

// person.save();

// const vasu = new Person ({
//   name: "Vasu",
//   age: 26,
//   favouriteFruit: banana
// });

// vasu.save();



// Fruit.insertMany([kiwi, orange, mango], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    // mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    }); 
  }
});

// Fruit.updateOne({_id: "62aabefe0ca0588fbe769be4"}, {name: "Banana"}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully Updated fruits") ;
//   }
// });

// Fruit.deleteOne({name: "Banana"}, function (err) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("Successfully deleted it");
//   }
// });

Person.updateOne({name:"Yuvaan"},{favouriteFruit: guava}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Updated Yuvaan");
  }
});



const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
   collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
    });
  };