const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DnSItems', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let itemsSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lasttName: String,
  username: String,
  phone: Number,
  email: String,
  birthday: Date,
  password: String,
  dateOfSignUp: { type: Date, default: Date.now },
  items: Array
});

let Items = mongoose.model('items', itemsSchema);

// Example function
let readRepos = (cb) => {
  Items.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      // console.log('data:', data);
      cb(data)
    }
  })
}


module.exports = {
  readRepos
}



