// Use the web-push library to hide the implementation details of the communication
// between the application server and the push service.
// For details, see https://tools.ietf.org/html/draft-ietf-webpush-protocol and
// https://tools.ietf.org/html/draft-ietf-webpush-encryption.

// parse application/x-www-form-urlencoded

// parse application/json

const webPush = require('web-push');

// Change VAPID KEYS to be Environment keys later on :)
process.env['VAPID_PUBLIC_KEY'] =
	'BC7i8ymKPvPQIsOQPZHaF6hv6iBzml0kPIw8Tv3lrrxW_d7y04xaqKyrOwJASFiX1ftkfC4HhOb7kjt-kX97COw';
process.env['VAPID_PRIVATE_KEY'] = '-iYjeSDs9kPIaVZ4HWs7Iv1c3dM2x0vW0nejLLostU0';
if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
	console.log(
		'You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY ' +
			'environment variables. You can use the following ones:'
	);
	console.log(webPush.generateVAPIDKeys());
	return;
}
// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
	'https://example.com/',
	process.env.VAPID_PUBLIC_KEY,
	process.env.VAPID_PRIVATE_KEY
);

module.exports = function (app, route) {
	app.get(route + 'vapidPublicKey', function (req, res) {
		res.send(process.env.VAPID_PUBLIC_KEY);
	});

	app.post(route + 'register', function (req, res) {
		// A real world application would store the subscription info.
		res.sendStatus(201);
	});

	app.post(route + 'sendNotification', function (req, res) {
		const subscription = req.body.subscription;
		const payload = {
			title: 'title',
			body: 'body',
			tag: '123',
			clickUrl: 'https://dasdsad'
		};
		const options = {
			TTL: req.body.ttl
		};

		setTimeout(function () {
			webPush
				.sendNotification(subscription, JSON.stringify(payload), options)
				.then(function () {
					console.log(JSON.stringify(payload));
					res.sendStatus(201);
				})
				.catch(function (error) {
					res.sendStatus(500);
					console.log(error);
				});
		}, req.body.delay * 1000);
	});
};
