// show or create a db in mongodb
show cooker

// create a colloction
doc = {"title":"Tacos", "description":"Yummy Tacos","cook_time":20}; 
db.tacos.insertOne(doc); // create a collection named tacos if not already existed, and insert the document into the collection

// list all the document inside the collection
db.tacos.find();

// list the document titled "Tacos" from collection recipes
db.recipes.find({"title":"Tacos"})

// list the documents satisfying two contitions
db.recipes.find({"title":"Tacos","cook_time":20})

//list only one field of all documents
db.recipes.find({},{"title":1})

// list all the documents which containing "Tacos" in anywhere in the title
db.recipes.find({"title":{$regex:/taco/i}},{"title":1})


// indexing
// 
// query to display total docs examined
db.recipes.find({"cook_time":10},{"title":1}).explain("executionStats"); // since cook_time is not an index, it has to traverse all the docs. so total docs examined is 7


// inorder to get the index of collection
db.recipes.getIndexes()

// insert index
db.recipes.createIndex({"title":-1}) // ascending = 1, descending = -1

// now cook_time is an index and if we try the execution stats again, it will display the total executiontime as 1
db.recipes.find({"cook_time":10},{"title":1}).explain("executionStats"); // total execution time => 1

// remove an idex
db.recipes.dropIndex("cook_time-1")
