var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb){
    orm.selectAll('burgers', function(res){
      cb(res);
    });
  },
  insertBurger: function(cols, vals, cb){
    orm.insertOne('burgers', cols, vals, function(res){
      cb(res);
    })
  },
  updateBurger: function(objColVals, condition, cb){
    console.log(condition);
    orm.updateOne('burgers', objColVals, condition, function(res){
      cb(res);
    });
  },
};

module.exports = burger;