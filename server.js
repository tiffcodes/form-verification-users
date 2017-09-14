const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/users');

const Schema = mongoose.Schema;

const model = new Schema({
	phone: 'string',
	address: 'string',
	email: 'string',
	name: 'string',
});

const users = mongoose.model('User', model);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-length, Accept, x-access-token');
  	res.header('Access-Control-Allow-Methods', 'POST');
    next();
}); 

app.use(express.static('.'));

app.use(bodyParser.json());


app.get('/users', (req, res) => {
	users.find({},(err, users) => {
		if(err) {
			res.send({
				error: err,
				status: 500
			});
			return; 
		}
		res.send({
			users: users,
			status: 200
		});
	});
});

app.post('/users', (req,res) => {
	const data = req.body;

	let emailValidation = (email) => {
		const re = /\S+@\S+\.\S+/;
		if (email === '') {
			return 'Make sure email field is filled out';
		} else if (re.test(email) === false) {
			return 'Make sure email field is valid';
		}
		return null;
	}

	let addressValidation = (address) => {
		console.log(address);
		const re = /^[A-Za-z]+,[ ]?[A-Za-z]{2}$/;
		if (address === '') {
			return 'Make sure address field is filled out';
		} else if (re.test(address) === false) {
			return 'Make sure address field is valid';
		}
		return null;
	}

	let nameValidation = (name) => {
		const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
		if (name === '') {
			return 'Make sure name field is filled out';
		} else if (re.test(name) === false) {
			return 'Make sure name field is valid';
		}
		return null;
	}

	let phoneValidation = (phone) => {
		phone = phone.split('-').join('');
		const re = /^\d+$/;
		if (phone === '') {
			return 'Make sure phone field is filled out';
		} else if (re.test(phone) === false) {
			return 'Make sure phone field is filled out properly';
		}
		return null;
	}

	let validations = [phoneValidation(data.phone), nameValidation(data.name), addressValidation(data.address), emailValidation(data.email)];

	validations = validations.filter(validation => {
		return validation !== null;
	});

	if (validations.length > 0) {
		res.send({
			error: validations,
			status: 400
		});
		return;
	}

	new users(data).save((err, user) =>{
		if(err) {
			res.send({
				error: err,
				status: 500
			});
			return;
		}
		res.send({
			user: user,
			status: 200,
		});
	});
});

app.delete('/users/:id', (req,res) => {
	const id = req.params.id;
	users.findOneAndRemove({ _id: id }, (err,doc) => {
		if(err) {
			res.send({
				error: err,
				status: 500
			});
			return;
		}
		res.send({
			success: true,
			status: 200
		});
	});
});

app.listen(process.env.PORT||3500);
console.log('App is listening on port 3500');