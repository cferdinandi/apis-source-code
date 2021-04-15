// Listen for API requests
addEventListener('fetch', function (event) {
	event.respondWith(handleRequest(event.request));
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {

	// Call the NYT API with our credentials
	let apiKey = '1234';
	let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`);
	let data = await response.json();

	// Return the data
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: new Headers({
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
			'Access-Control-Allow-Headers': '*'
		})
	});

};