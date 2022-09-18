export default {
	fetch(request) {
		console.log(request.url);
		return new Response('Hello worker from Grace!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
