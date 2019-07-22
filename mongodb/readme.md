db.stats();
db.numbers.getIndexes();
db.numbers.createIndex({num: 1});
db.numbers.find({num: {"$gt": 19995}}).explain("executionStats");
db.numbers.find({num: {"$gt": 19995}});
db.numbers.drop();
for(i = 0;i<20000;i++) { db.numbers.save({num: i}); }
db.numbers.count();
db.users.find({}).pretty();
db.users.find({ $or: [ { _id: ObjectId("5d355c0dcac12bd17f0c57b5") }, { username: "jones" } ]});
db.users.find({ $and: [ { _id: ObjectId("5d355c0dcac12bd17f0c57b5") }, { username: "smith" } ]});
db.users.find({_id: ObjectId("5d355c0dcac12bd17f0c57b5"), username: "smith"});
db.users.update({username: "jones"}, {$set: {country: "China"}}); // 新增字段或者修改部分字段
db.users.update({username: "smith"}, { country: "China"}); // 直接被覆盖