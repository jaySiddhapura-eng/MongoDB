show "sample_database"      // will create sample_database if it never created before

show dbs                    // show all the database hosted by the server

db                          // holds the reference of the current database in which you are rightnow

db.dropDatabase()           // will drop the current database in which user is 

db.createCollection("collection_1")     // create collection name: collection_1
db.createCollection("collection_2")
db.createCollection("collection_3")

show collections                        // to see all the collections of the DB
db.getCollectionNames()                 // will also list all the collections
db.getCollectionInfos()                 // will give information regarding all the collection
db.getCollectionInfos({name:"collection_1"})    // will give information 

db.collection_3.drop()                  // to drop the collection from DB

//adding 1document in the collection
db.collection_1.insert(
    
    {
    "Name"      :"Jay Siddhapura",      // field1 String
    "Age"       :27,                    // field2 Int
    "Education" :"Masters",             // field3 String
    "Vehicle"   :"2 wheels"             // field4 String
    }
    
)

// add object as the field 
db.collection_1.insert(
    {
    "Name"      :{                          // field1 Object
                    "First_Name" : "Abc",   // field1.subField1 String
                    "Last_Name"  : "Pqr"    // field1.subField2 String
                 },
                 
    "Age"       :40,                        // field2 Int            
    
    "Education" :{                          // field3 Object
                    "Masters" : "TUC",      // field3.subField1 String
                    "Bachelor": "MU"        // field3.subField2 String
                 },
                 
    "Vehicle"   :"4 wheels",                // field4 String
    "Child": false                          // field5 Boolean
    }
)


//bulk insertion
db.collection_1.insert(
    [
        // Document 1 [D1]
        {   
            "D1.F1":"string",
            "D1.F2":10,
            "D1.F3":true
        },
        
        // Document 2 [D2]
        {
            "D2.F1":"string",
            "D2.F2":20,
            
            "D2.F3": {
                     "D2.F3.f1":"string",
                     "D2.F3.f2":false
                    }
        },
        
        // Document 3 [D3]
        {
            "D3.F1": {
                     "D3.F1.f1":"string",
                     "D.F2.f1":5,
                     "":""
                    },
                
            "D3.F2": {
                     "D3.F2.f1":10,
                     "D3.F2.f2":false
                    },  
                
            "D3.F3": {
                     "D3.F3.f1":"string",
                     "D3.F3.f2":true
                    }
        }
    ]
)

db.collection_1.insert(
    {
    "D4.F1":{                       
            "D4.F1.f1":{            
                        "D4.F1.f1.Nf1":{
                                       "Inception": 4
                                       },
                    
                        "Inception" : 3
                       },
                       
            "Inception"  : 2         
            },
                
    "Inception" : 1                     
    }
)

// to see all the documents reside in specified collection
db.collection_1.find()


// retrive only one document
// it will return the first document
db.collection_1.find({"Name":"Jay Siddhapura"})












