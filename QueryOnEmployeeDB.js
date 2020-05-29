use sample_database

db

db.getCollectionNames()

db.getCollectionInfos({name :"EmployeeDemo"})

// will give me the list of all the documents of employee
db.EmployeeDemo.find()

// will give me the docm
db.EmployeeDemo.find({"FirstName":"Andrew"})

// will give all the employee documents who are male
db.EmployeeDemo.find({"Gender":"Male"})

// will return all the employee documents where Age is less then 40
db.EmployeeDemo.find({
    "Age":{$lt: "40"}
})

// return the list of employee who has salary less then or equal to 70000
db.EmployeeDemo.find({
   "Age":{$lte: "27"}
})

// return the employees who has age greater then 30
db.EmployeeDemo.find({
   "Age":{$gt: "30"}
})

// return the employees who has age greater then or equal to 32
db.EmployeeDemo.find({
   "Age":{$gte: "32"}
})

// will return the employees who dont have age of 45
db.EmployeeDemo.find({
    "Age":{$ne: "45"}
})

// will return all the employees 
//who has charecter M as a starting charecter in Skill field
db.EmployeeDemo.find({
    "Skill":{
            $in:[/^M/]
            }
})

//will return all the employees
// who does not have M as a starting charecter in skill field
db.EmployeeDemo.find({
    "Skill":{
            $nin: [/^M/,/^P/]
            }
})

//will return the employee who is female and know mongoDB
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
    $and: [{"Age":{$lte:"30"}},{"Gender":"Male"},{"Skill":"MongoDB"}]
})




db.EmployeeDemo.find()


// list all the employee who fullfill atleast on of the following conditions
// condition 1 : Skill should be MongoDB
// condition 2 : Skill should be Javascript
db.EmployeeDemo.find({
    $or: [{"Skill":"MongoDB"},{"Skill":"Javascript"}]
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
                    

                    
// returns employee which fullfill following conditions
// condition 1 = Gender should not be male
// condition 2 = Skill should not be MongoDB
db.EmployeeDemo.find({
    $nor: [{"Gender":"Male"},{"Skill":"MongoDB"}]
})

// update the email address of a person who has first name Andrew
db.EmployeeDemo.update(
    {"FirstName":"Andrew"},
    {$set: {"Phone":"000-0000000"}}
    )
    
db.EmployeeDemo.update(
    {"FirstName":"Felicia"}, 
    {$set:{"Age":"40", "Skill":"C++", "Salary":"50000"}}
)    


// it will insert the new user
// since mongo id is not provided
db.EmployeeDemo.save({
            "EmpNo":"9", 
            "FirstName":"Saved", 
            "LastName":"User"
})


// will replace the information of the employee who has following id
// target id : 5ecf82c1d198f914fc60ccc6
db.EmployeeDemo.save({
    "_id" :ObjectId("5ecf82c1d198f914fc60ccc6"),
    "EmpNo" : "8",
	"FirstName" : "Replaced",
	"LastName" : "User",
})


// update the age to Senior who has age greater then 35
db.EmployeeDemo.updateMany(
    {"Age":{$gt: "35"}},
    {$set:{"Age": "Senior"}
    })
    
// add new field in all the document
db.EmployeeDemo.updateMany({}, 
    {$set:{"newField":"NewFieldValue"}}
)
    
// add new field in one perticular document
db.EmployeeDemo.update(
    {"FirstName":"Andrew"}, 
    {$set:{"specificNewField": "set"}} 
)
    
    
// delete the sepcified document    
db.EmployeeDemo.remove(
    {"FirstName":"Replaced"}, 
    {justOne: true}
    )
    
// projection // selection of specific field of all the docs
db.EmployeeDemo.find(
    {},
    {"FirstName":1}
    )
    
// projection // show the first name and skill of that person
db.EmployeeDemo.find(
    {},
    {"FirstName":1,"Skill":1}
    ).limit(2)
    
// skipping the document
db.EmployeeDemo.find(
    {},
    {"FirstName":1,"Skill":1}
).skip(1)

// sorting a document
// default sorting // ascending order
db.EmployeeDemo.find(
    {},
    {"FirstName":1, "Skill":1}
    ).sort({"FirstName":1})
    
// find top 3 oldest employee
db.EmployeeDemo.find(
    {},
    {"FirstName":1,"Age":1}
    ).sort({"Age":-1 }).limit(3)
    
// create index on the field FirstName
db.EmployeeDemo.createIndex(
                  {"FirstName": 1}  
     )

// returns all the available indexes
db.EmployeeDemo.getIndexes()

// to drop the index named FirstName
db.EmployeeDemo.dropIndex

// AGGREGATION
// grouping of the employee on the bases of gender
// summing the number eventually
db.EmployeeDemo.aggregate([{
                $group: {
                         _id: "$Gender",
                         total:{$sum: 1},
                        }
            }])
            

db.EmployeeDemo.aggregate([{
    $group: { _id: "$Salary",
              Maximum:{$sum: 1}
            }
    
    
    
}])            

    

db.EmployeeDemo.find()







