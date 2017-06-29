param = new Mongo.Collection('param');

export {param, insertONE}

function insertONE(){
  let paramCount = param.find({}).count()
  param.insert({name:paramCount+1, value:paramCount+1})
}
