var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Schema = mongoose.Schema;

var Company = new Schema({

	name: {
		type: String,
		required: true

	},
	password: {
		type: String,
		required: true,
		trim: true,
		validate: [
      // Function takes in the value as an argument
      function(input) {
        // If this returns true, proceed. If not, return an error message
        return input.length >= 6;
      },
      // Error Message
      "Password must be longer than 6 characters"
    ]

	}

	email: {
		type: String,
		match: [/.+\@.+\..+/, "Enter a valid e-mail"]
	},
	pictures: {
		type: Array
		},
	bio: {
		type:String
	},
	location: {
		type:String,
		required: true
	},

	friends: {
		type:Array
	},
	

	// To Check if there profile is company or WebDev 
	isCompany: {
		type: Boolean,
		required:true

	},
	  userCreated: {
    type: Date,
    default: Date.now
  }
  

	//Inlude user data association here









})


//PASSPORT PW encrypter (hasher)
    //prototype method/function for User model--comparison check between unhashed password and hashed password in mySQL DB
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }

    //Hook is hashing password before User is created (from Sequelize model)
    User.hook("beforeCreate", function(user, options) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        // cb(null, options);
    })