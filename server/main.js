import { Meteor } from 'meteor/meteor';
import {param} from "../lib/collection/param.js";

Meteor.startup(() => {
  let paramCount = param.find({}).count()
  console.log('Param count before startup. ', paramCount);
  if(paramCount == 0){
    param.insert({name:'lastDay', value:new Date()})
    console.log('Param count after insert first param. ', param.find({}).count());
  }
});
