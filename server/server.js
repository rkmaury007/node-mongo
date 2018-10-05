var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Demo');

var DTable = mongoose.model('DTable',{
  text:{
    type: String
  },completed:{
    type:Boolean
  },changeDate:{
    type:Number
  }
});

var insertDTable = new DTable({
  text:'Bangalore',
  completed:true,
  changeDate:02
});

insertDTable.save().then((doc) => {
  console.log(JSON.stringify(doc,undefined,2));
},(e) =>{
  console.log('Unable to save', e);
});
