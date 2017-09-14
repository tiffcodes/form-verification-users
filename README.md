# Address Book API
A simple address book API.

## Endpoints

### Users
#### `/users`
**POST** _posts a user_

Params | Value | Description | Valid format example
------ | ---- | ------ | ------
`name` : string | `firstName lastName` | Name of the contact | 'firstName lastName'
`phone` : string | `phone-number` | North American phone number of the contact | '555-555-5555' or '5555555555'
`address` : string | `city, province (2 letters)` | City and province of the contact | 'Toronto, On' or 'Toronto,On'
`email` : string | `emailAddress` | Email address of the contact | 'email@email.com'

**Examples:** `http://api.hackeryou.com/v1/email?email=snickers@example.com` 

#### Sample Response 

##### *Success*

	{
		status: 200,
		user: {
			name: "Jane Smith", 
			email: "hello@hello.ca", 
			address: "Toronto, On", 
			phone: "555-555-5555",
			_id: "59ba99f2345dd3379e3445da",
			__v: 0
		}
	}

##### *Fail*

	{
		error: 'Error message',
		status: 500
	}


### Users:id
#### `/users:id`
**DELETE** _deletes a user_

Params | Value | Description | Valid format example
------ | ---- | ------ | ------
`id` : string | `the-user-id-to-delete` | Id of the contact | '59ba99f2345dd3379e3445da'

**Examples:** `http://api.hackeryou.com/users/59ba99f2345dd3379e3445da

##### *Success*

	{
		success: true,
		status: 200
	}

##### *Fail* 

	{
		error: 'Error message',
		status: 500
	}

<!-- 

### Users
#### /users
**GET** _returns the users_ 

##### *Success*

	{
		users: [
			{
				name: "Jane Smith", 
				email: "hello@hello.ca", 
				address: "Toronto, ON", 
				phone: "555-555-5555",
				_id: "59ba99f2345dd3379e3445da",
				__v: 0
			},
			{
				name: "John Smith", 
				email: "hello@hello.com", 
				address: "Calgary, AB", 
				phone: "555-555-5555",
				_id: "59ba996ca77724369727a273",
				__v: 0
			}
		],
		status: 200
	}

##### *Fail* 

	{
		error: 'Error message',
		status: 500
	}


-->
