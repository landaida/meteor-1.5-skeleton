import {param} from "../../lib/collection/param.js";
Meteor.publish('param', function() {  
  console.log('param:',param.findOne());
  return param.find({});
});


param.allow({
    insert: function (doc) {
           return true;
    },
    update: function (doc) {
           return true;
    },
    remove: function (userId, doc) {
           return false;
    }
});
