# NoSQL [MongoDB]

------

## NoSQL

2. NoSQL database **can store relationship data** but differently then RDB do<br><br>
   1. Non relational database <br><br>
   2. No traditional aspect of RDB [table, row, column]<br><br>
3. Since relational data does not need split between tables, its **easy to model relational data** in NoSQL<br><br>
4. **Allows nesting of related data** in single data structure<br><br>
5. Quick and Agile adaptation to the change in software requirements made possible due to **flexibility of NoSQL**<br><br>
6. Best suited for **Big Data**<br><br>
   1. Big volume of data, where traditional method of DBMS is inadequate 

## Difference between SQL and NoSQL database

| Metrices                   | SQL DB                                                       | NoSQL DB                                                     |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Data Storage Model**     | Table with **Row and column** structure<br />[More on SQL DB](https://jaysiddhapura-eng.github.io/MySQL-Primer/) | **Documents**: JSON Documents<br />**Key-value**: [key] [Data or Value]<br />**Wide-column**: Table with row and dynamic columns<br />**Graph**: Nodes with edges |
| **Development Focus**      | Reduction in data duplication [Normalization]                | Capability of scaling allowing rapid modification            |
| **Schema**                 | Strict and difficult to change                               | Lenient and flexible, easy to change                         |
| **Data hierarchy**         | not suitable for hierarchical data storage                   | Suitable as it supports key-value pair                       |
| **Join**                   | Join two or more table and grabbing all the information you need is easy | Joining is difficult because of distributed nature of the database |
| **Scaling**                | Vertical scaling                                             | Horizontal scaling                                           |
| **Transections Principle** | **A**tomicity, **C**onsistency, **I**solation, **D**urability [ACID] | **C**onsistency, **A**vailability, **P**artition tolerance   |
| **Mapping**                | Require ORM                                                  | Many do not require ORM, Documents map directly to the data structure in most popular language |

## ACID vs BASE Transections

1. ACID transaction
   1. ACID stands for **A**tomicity, **C**onsistency, **I**solation, **D**urability 
   2. **Transection is a single logical unit** of work which access/modify the contents of DB
   3. In order to maintain the consistency in transection certain property need to follow
   4. This property called ACID property
   5. <u>Atomicity</u>: It guaranty that each transection [single unit consists of statements] **either succeed fully or failed fully**. No partiality in success and failure. Database will be modify only when transection succeeded fully.
   6. <u>Consistency</u>: Given data transection must **change the affected data only in allowed ways**. Any data written to the database must be valid according to the defined rules.
   7. <u>Isolation</u>: **Concurrent transections** to the database must leave database in resultant state, which would be obtain if all the transections were done sequentially. [Isolation between transections]
   8. <u>Durability</u>: This property **insures** that the committed **transection will remain committed** in the case of system failure. 
   9. All the **SQL data follows** ACID properties
2. BASE transection
   1. **B**asically **A**vailable, **S**oft state, **E**ventually consistence
   2. BASE Properties is model of many NoSQL databases
   3. BASE transections follows **CAP theorem**
   4. CAP theorem states that a distributed computer system can not guarantee all three properties same time, these three properties are Consistency, availability and Partition tolerance
   5. BASE transections given up the consistency in order to obtain Availability and soft state
   6. **<u>Basically Available</u>**: System guarantees availability, although does not guarantees that the response from DB contains the most recent data
   7. **<u>Soft state</u>**: The state of system may changes over time, even without any input, because of eventual consistency model
   8. **<u>Eventual Consistency</u>**: System will become consistence over time, given that system does not receive any input during that time

## What is scalability in terms of database? 

1. **Vertically scalable**: SQL, u can increase the load on single server by increasing the hardware components or upgrading the entire server with new one
2. **Horizontal scalable**: server can handle more traffic by sharding or by adding more number of server in no sql database

## What is sharding?

1. A process which **splits** the database into unique pieces each of which is hosted on different server
2. Sharding is necessary in case of data set is too large to be stored in single database
3. **Horizontal Sharding**: Split the database row wise [different entities in different Shard DB]
4. **Vertical Sharding**: Split the database column wise [different features of entity in different Shard DB]
5. **Directory Sharding**: Before searching the Shard DBs user has to reach the lookup service. Lookup service knows the current partitioning scheme and search the appropriate Sharded DB for given entity

## MongoDB Terminology

1. Single MongoDB server typically has multiple databases

2. **MongoDB analogy** along with typical SQL DB

   | SQL DB         | MongoDB                                   |
   | -------------- | ----------------------------------------- |
   | Database       | Database                                  |
   | Table          | Collection                                |
   | Row            | Document                                  |
   | Column         | Field                                     |
   | Join the table | Embedded Documents                        |
   | Primary key    | Default key_id provided by MongoDB itself |

## MongoDB Compass Startup Guide

​	Put the link of the compass.md from compass folder

## Sample MongoDB database Structure

```
MongoDB Server
│ 
└───DataBase1
│   	│
│   	└───Collection1
│   	│    	│   
│   	│    	└───Document1
│   	│    	│      	│
│   	│    	│      	└─── Field1 : stringValue
│   	│    	│      	└─── Field2 : integerValue
│   	│    	│      	└─── Field3 : stringValue
│   	│    	│      	└─── Field4 : booleanValue
│   	│    	│      	└─── ...
│   	│    	│
│   	│    	└───Document2
│   	│    	│      	│
│   	│    	│      	└─── Field1 : Object
│   	│    	│      	│				│
│   	│    	│      	│				└─── ObjectField1 : StringValue
│   	│    	│      	│				└─── ObjectField2 : StringValue
│   	│    	│      	│
│   	│    	│      	└─── Field2 : StringValue
│   	│    	│      	└─── Field3 : IntegerValue
│   	│    	│      	└─── Field4 : Object
│   	│    	│      	│				│
│   	│    	│      	│				└─── ObjectField1 : booleanValue
│   	│    	│      	│				└─── ObjectField2 : booleanValue
│   	│    	│      	└─── ...
│   	│    	└───...
│   	│
│   	└───Collection2
│   	└───...
│   
└───DataBase2
└───...
```

## Create Sample MongoDB Database

1. **Prerequisite**: already establish connection to the MongoDB server and installed NoSQL booster

2.  **Create** and **Delete** the Database

   ~~~javascript
   use "sample_database"	
   // it will create the database name "sample_database"
   // if "sample database" is already avaiable then it will use that database
   db.dropDatabase()
   // will drop the entire datadbbase
   ~~~

3. See how many databases are hosted by the server

   ~~~javascript
   show dbs
   ~~~

   Output

   ~~~javascript
   CGI_Mongo_Demo  0.000GB
   admin           0.000GB
   config          0.000GB
   demo            0.000GB
   local           0.000GB
   //sample database is not visible because it does not have any documents
   ~~~

4. To **check which database** you are working right now

   ~~~javascript
   db	// db holds the reference to the current database you are in
   ~~~

   Output:

   ~~~javascript
   "sample_database"
   ~~~

5. **Add, Remove and See collection** in database

   ~~~javascript
   db.createCollection("collection_1")
   // name of the created collection will be collection_1
   
   db.collection_1.drop()
   // drop the collection user1
   
   show collections
   // will list all the collection present in the current database
   // alternatively
   db.getCollectionNames()	// list of all the collection
   db.getCollectionInfos() // detail view of all the present collection
   
   // detail view of specific collection [collection_1]
   db.getCollectionInfos({name : "collection_1"})
   ~~~

6. **Add** Document **one by one** in collection

   ~~~javascript
   db.collection_1.insert(
       {
       "Name"      :"Xyz",      // field1 String
       "Age"       :27,         // field2 Int
       "Education" :"Pqr",      // field3 String
       "Vehicle"   :"Tyu"       // field4 String
       }   
   )
   
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
   ~~~

7. **Add Bulk** Documents in a collection

   ~~~js
   db.collection_1.insert
   ([      
       // Document 1 [D1]
           {  	"D1.F1":"string",
               "D1.F2":10,
               "D1.F3":true
           },
       
       // Document 2 [D2]
           {   "D2.F1":"string",
               "D2.F2":20,
               "D2.F3": {
                        "D2.F3.f1":"string",
                        "D2.F3.f2":false
                        }
           },
       
       // Document 3 [D3]
           {	"D3.F1": {
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
    ])
   ~~~

8. **View** Created Documents

   ~~~javascript
   db.collection_1.find()
   // will list all the documents holded by the specified collection
   ~~~

9. Nested fields

   ~~~javascript
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
   ~~~

10. **Add new field** in the document/documents

    ~~~javascript
    // sample syntex
    db.CollectionName.updateMany(
        {},
        {$set:{"New key value pair"}}
    )
    
    // add new field in all the document
    db.EmployeeDemo.updateMany(
        {}, 
        {$set:{"newField":"NewFieldValue"}}
    )
    
    // add new field in one specified document
    db.EmployeeDemo.update(
        {"FirstName":"Andrew"}, 
        {$set:{"specificNewField": "set"}} 
    )
    ~~~

## Querying the Database 

1. **Display all** the documents in given collection

   ~~~javascript
   db.collection_1.find()
   ~~~

2. **Search the specific document** by key value pair [Equality]

   ~~~javascript
   // sample Syntex
   db.collectionName.find({"<keyName>":"<valueName>"})
   
   //collection_1 - collection name
   // key - Name
   // value - Abc
   // it will return the object whose Name is Abc
   db.EmployeeDemo.find({"Name":"Abc"})
   
   // will return all the male employee
   db.EmployeeDemo.find({"Gender":"Male"})
   ~~~

3. Less then and Less then or Equal to operation **[LT & LTE]**

   ~~~javascript
   // sample syntex [applies to $lt, $lte, $gt, $gte and $nt]
   db.collectionName.find({
       <"Key">:{$lt:<"ConditionalValue">}
   })
   
   // will return all the employee whose age is less then 40
   db.EmployeeDemo.find({
       "Age":{$lt: "40"}
   })
   
   // return the list of employee who has age less then or equal to 27
   db.EmployeeDemo.find({
      "Age":{$lte: "27"}
   })
   
   ~~~

4. Greater then and Greater then or Equal to operation **[GT & GTE]**

   ~~~javascript
   db.collectionName.find({
       <"Key">:{$gt:<"ConditionalValue">}
   })
   
   // return the employees who has age greater then 30
   db.EmployeeDemo.find({
      "Age":{$gt: "30"}
   })
   
   // return the employees who has age greater then or equal to 32
   db.EmployeeDemo.find({
      "Age":{$gte: "32"}
   })
   ~~~

5. Not equal [**NE**]

   ~~~javascript
   // will return the employees who dont have age of 45
   db.EmployeeDemo.find({
       "Age":{$ne: "45"}
   })
   ~~~

6. **Value in Array** [Object]

   ~~~javascript
   // add sample syntex
   dd.collectionName.find({
       <"Key">: {
       		 $in:["comma separated array"]
   			}
   })
   
   // will return all the employees 
   //who has charecter M as a starting charecter in Skill field
   db.EmployeeDemo.find({
       "Skill":{
               $in:[/^M/]
               }
   })
   ~~~

7. **Value not in Array** [Object

   ~~~javascript
   // add sample syntex
   
   //will return all the employees
   // who does not have M and P as a starting charecter in skill field
   db.EmployeeDemo.find({
       "Skill":{
               $nin: [/^M/,/^P/]
               }
   })
   ~~~

8. **And operation** with multiple conditions

   ~~~javascript
   // sample syntex
   db.collectionName.find({
       $and: [{"Condition 1"},{"Condition 2"}]
   })
   
   // will return the employee who is female and know mongoDB
   // condition 1: Female Gender
   // condition 2: MongoDB skill
   db.EmployeeDemo.find({
       $and: [{"Gender":"Female"},{"Skill":"MongoDB"}]
   })
   
   // will check two conditions
   // condition1: Age greater then or equal to 35
   // condition2: Skill equals to MongoDB
   // return the employee who fullfill both the conditions
   db.EmployeeDemo.find({
       $and: [{"Age":{$gte:"35"}},{"Skill":"MongoDB"}]
   })
   
   // find a employee who fullfill following 3 conditions
   // condition 1: Gender should be Male
   // condition 2: Must have MongoDB skill
   // condition 3: age should be less then or equal to 30
   db.EmployeeDemo.find({
       $and: [
           	{"Age":{$lte:"30"}},			// condition 3
           	{"Gender":"Male"},				// condition 1
           	{"Skill":"MongoDB"}				// condition 2
       	 ]
   })
   ~~~

9. Or operation with multiple conditions

   ~~~javascript
   // sample syntex
   db.collectionName.find({
       $or: [{"Condition 1"},{"Condition 2"}]
   })
   
   // list all the employee who fullfill atleast on of the following conditions
   // condition 1 : Skill should be MongoDB
   // condition 2 : Skill should be Javascript
   db.EmployeeDemo.find({
       $or: [{"Skill":"MongoDB"},{"Skill":"Javascript"}]
   })
   ~~~

10. And & Or together

    ~~~javascript
    // sample syntex
    // ["keyValuePair1"] AND [ ("KeyValuePair2") OR ("KeyValuePair3") ]
    db.CollectionName.find({
        $and: [
            	{<"Key1">:<"Value1">},
            	{
                    $or: [
                        {<"Key2">:<"Value2">},
                        {<"Key3">:<"Value3">}
                    	]
                }
        	  ]
    })
    
    // And & Or together
    // Find a employee who is male and have eiter C# or MongoDB skill
    db.EmployeeDemo.find({
                            $and: [
                                    {"Gender" : "Male"},        // and condition 1
                                    {$or: [                     // and condition 2
                                            {"Skill":"C#"},      // or condition 1
                                            {"Skill":"MongoDB"}  // or condition 2
                                          ]
                                    }
                                  ]
                        })
    ~~~

11. NOR operation

    ~~~javascript
    // sample syntex
    db.CollectionName.find({
        $nor: [{"Condition 1"},{"Condition 2"}]
    })
    
    // returns employee which fullfill following conditions
    // condition 1 = Gender should not be male
    // condition 2 = Skill should not be MongoDB
    db.EmployeeDemo.find({
        $nor: [{"Gender":"Male"},{"Skill":"MongoDB"}]
    })
    ~~~

12. Find specific information in the document

    ~~~javascript
    // sample syntex [Projection]
    db.CollectionName.find(
    				{},
    				{"needed Information":1}    
    )
    
    // find firstName of all the document
    db.EmployeeDemo.find(
        	{},
        	{"FirstName":1}
       )
    
    // find the firstName and skill of all the document
    db.EmployeeDemo.find(
        		{},
        		{"FirstName":1,"Skill":1}
      )
    ~~~

13. Limiting the result

    ~~~javascript
    // we can put the limit on the above obtained result
    //sample syntex
    db.CollectionName.find("find query").limit("number of result")
    
    // obtain the first two document with only firstName and skill
    db.EmployeeDemo.find(
        	{},
        	{"FirstName":1,"Skill":1}
    ).limit(2)
    ~~~

14. Skipping the Document in between

    ~~~javascript
    // before skipping
    // doc1 doc2 doc3 doc4 doc5 doc6
    // after skipping with factor 1
    //      doc2      doc4      doc6
    
    // sample syntex
    db.CollectionName.find("find syntex").skip("skip factor")
    
    // show FirstName and skill after applying skipping of 1
    db.EmployeeDemo.find(
        		{},
        		{"FirstName":1,"Skill":1}
    ).skip(1)
    ~~~

15. Sorting of the resultant document

    ~~~javascript
    // sample syntex
    // fildName: base on which sorting to be performed
    // order: 1 for ascending order and -1 for descending order
    db.CollectionName.find("find operations").sort({"fieldName":"order"})
    
    // obtain the firstName and skills and result should be in asscending order of Firstname
    db.EmployeeDemo.find(
        {},
        {"FirstName":1, "Skill":1}
        ).sort({"FirstName":1})
    
    // obtain 3 reults containing Firstname and Age and should be in descending order of age
    // means older employee first and so on [top 3 oldest employee]
    db.EmployeeDemo.find(
        	{},
        {"FirstName":1,"Age":1}
        )
        .sort({"Age":-1 })
        .limit(3)
    ~~~

16. Indexing on particular field

    ~~~javascript
    //sample syntex to create the index
    db.CollectionName.createIndex( {"Field on which index should be made":1} )
    
    // create the index on the field FirstName
    db.EmployeeDemo.createIndex( {"FirstName": 1} )
    
    // sample index to check the index
    db.CollectionName.getIndexes()
    
    // Dropping one particualr index
    // sample syntex
    db.CollectionName.dropIndex( {"NameOfIndex":1} )
    
    // it will not modify the actual field
    db.EmployeeDemo.dropIndex( {"FirstName":1}	)	
    
    // drop all the indices
    db.CollectionName.dropIndexes()
    ~~~

18. Aggregation

    ~~~javascript
    // groupping the values
    // sample syntex
        db.CollectionName.aggregate([{
                    $group: {
                             _id: "Expression", // group by expression
                             "field":{"accumulator": "expression"},
                            }
                }])
    
    // make group of different genders
    // sum all the different genders and assign it to total
    db.EmployeeDemo.aggregate([{
                    $group: {
                             _id: "$Gender",
                             total:{$sum: 1},
                            }
                }])
    
    // available accumulator operations
    // $sum, $avg, $min, $max, $push, $first, $last
    
    ~~~

## Updating the Document

1. Update the document by provide some identification

   ~~~javascript
   // sample syntex
   // both selection criteria and thing to update are key-value pairs 
   db.CollectionName.update(
       {"Selection criteria"},
       {$set: {"thing to update"}}
   )
   
   // update the phone number of a person who has first name Andrew
   db.EmployeeDemo.update(
       {"FirstName":"Andrew"},
       {$set: {"Phone":"000-0000000"}}
   )
   
   // update multiple things of a person who has name Felicia
   db.EmployeeDemo.update(
       {"FirstName":"Felicia"},
       {$set: {"Phone":"123-7654321", "Salary":"40000", "Skill":"C++"}}
       )
   ~~~

2. Saving the document

   ~~~javascript
   // save perform two operations according to the parameter provided
   // if Id is not provided in save statement then it will insert the document [Insertion]
   // if id is provided then it will update the exisiting document with same Id [replacement]
   
   // iserting the new document using save statement
   db.EmployeeDemo.save({
               "EmpNo":"9", 
               "FirstName":"Saved", 
               "LastName":"User"
   })
   
   // replacing the document with new one by using save
   // the document which has following id will be updated by new information
   db.EmployeeDemo.save({
       "_id" :ObjectId("5ecf82c1d198f914fc60ccc6"),
       "EmpNo" : "8",
   	"FirstName" : "Replaced",
   	"LastName" : "User",
   
   })
   ~~~

3. Update all the document which matches the given selection criteria

   ~~~javascript
   // sample syntex
   db.NameOfCollection.updateMany(
       {"Selection Criteria"},
       {$set: {"Updating field"}}
   )
   
   // update the documents which has age value more then 35
   // update the age field to senior for such documents
   db.EmployeeDemo.updateMany(
       {"Age":{$gt: "35"}},
       {$set:{"Senior": true}		// this field will be created since its not present in the doc
       })
   ~~~

4. Delete Operations

   ~~~javascript
   //remove all the documents
   db.CollectionName.remove({})
   
   // sample syntex
   db.CollectionName.remove(
       {"Selection criteria"},
       {"how many doc to remove"}
   )
   
   // remove document according to the specified selection criteria
   db.EmployeeDemo.remove(
       {"FirstName":"Replaced"}, 
       {justOne: true}		// false: remove all the occurance of the specified doc
   )
   ~~~




## Links

1. [Relational Databases and “Big Data”: The Alternative of a NoSQL Solution](https://www.sciencedirect.com/science/article/pii/B9780128043998000284)

2. [What is CAP theorem](https://www.educative.io/edpresso/what-is-the-cap-theorem?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=edpresso-dynamic&gclid=CjwKCAjw2a32BRBXEiwAUcugiNoPLtAoZooZ-MKAVUtLixvuNVPR-EruJ6JlNx3N5fDcnlDYn2t7vRoCua4QAvD_BwE)

3. [SQL vs. NOSQL: Beginners Guide](https://medium.com/@jon.perera/sql-vs-nosql-a-beginners-guide-f80991f76a4b)

4. [ACID Explains](https://en.wikipedia.org/wiki/ACID)

5. [BASE Explains](https://stackoverflow.com/questions/3342497/explanation-of-base-terminology)

6. [MongoDB Server Installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

7. [MongoDB GUI Installation](link from github)

8. [MongoDB cheatsheet](link from github pdf)

9. [$in Operator](https://docs.mongodb.com/manual/reference/operator/query/in/)

10. [Advance operations](https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm)

11. [Aggregation](https://docs.mongodb.com/manual/aggregation/)

12. [Java MongoDB Driver](https://docs.mongodb.com/drivers/java)