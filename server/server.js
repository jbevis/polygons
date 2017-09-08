const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const enviromnent = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[enviromnent];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})

app.get('/locations', (request, response) => {
	database('locations').select()
	.then(locations => response.status(200).json(locations))
	.catch(error => response.status(500).send({ error }));
});

app.post('/locations', (request, response) => {
	if (!request.body) {
		return response.status(422).send({ error: 'No location provided. '});
	}
	const location = request.body;

	database('locations').insert(location, 'id')
	.then(locations => response.status(201).json({ id: locations[0] }))
	.catch(error => response.status(500).send({ error }));
});

app.delete('/locations:id', (request, response) => {
	const { id } = request.params;

	database('locations').where('id', id).del()
	.then(location => {
		if (!location) {
			response.status(404).send({ error: 'Location not found.'});
		} else {
			response.status(204);
		}
	})
	.catch(error => response.status(500).send({ error }));
});

const portNumber = process.env.PORT || 3001;

app.listen(portNumber, () => {
	console.log('Server is running at port 3001')
});
