// show or create a db in mongodb
show cooker
// create a colloction
doc = {"title":"Tacos", "description":"Yummy Tacos","cook_time":20}; 
db.tacos.insertOne(doc); // create a collection named tacos if not already existed, and insert the document into the collection
// list all the document inside the collection
db.tacos.find();
// list the document titled "Tacos" from collection recipes
db.recipes.find({"title":"tacos"})
//
