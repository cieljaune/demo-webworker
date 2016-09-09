
self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
	self.postMessage(evt.data);
}