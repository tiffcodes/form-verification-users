# Address Book API
A simple address book API.

`https://form-verification-users-api.herokuapp.com`

## Endpoints

## Users
### `/users`
**POST** _posts a user_

Params | Value | Description | Valid format example
------ | ---- | ------ | ------
`name` : string | `firstName lastName` | Name of the contact | 'firstName lastName'
`phone` : string | `phone-number` | North American phone number of the contact | '555-555-5555' or '5555555555'
`address` : string | `city, province (2 letters)` | City and province of the contact | 'Toronto, On' or 'Toronto,On'
`email` : string | `emailAddress` | Email address of the contact | 'email@email.com'


#### Sample Response 

#### Success

	{
		status: 200,
		user: {
			name: "Jane Smith", 
			email: "hello@hello.ca", 
			address: "Toronto, On", 
			phone: "555-555-5555",
			_id: "59ba99f2345dd3379e3445da"
		}
	}

#### Fail

	{
		error: 'Error message',
		status: 500
	}



### `/users:id`
**DELETE** _deletes a user_

Params | Value | Description | Valid format example
------ | ---- | ------ | ------
`id` : string | `the-user-id-to-delete` | Id of the contact | '59ba99f2345dd3379e3445da'

**Example:** `https://form-verification-users-api.herokuapp.com/users/59ba99f2345dd3379e3445da`

#### Success

	{
		success: true,
		status: 200
	}

#### Fail

	{
		error: 'Error message',
		status: 500
	}


### To do:
Please create an app using the `index.html` included here. Your app should be able to add a user to the address book. Please validate all inputs before adding a user to the database. 

Do not use jQuery for this project. Alternatives such as fetch will work. 

Please send a link to your git repo once you're finished.

BONUS: the API allows for users to be deleted. If you want a challenge, add the ability to delete a contact.

Best of luck!