export default {
	fetch() {
		return new Response('Hello worker from Grace!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
