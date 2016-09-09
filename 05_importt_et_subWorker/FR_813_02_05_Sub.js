self.addEventListener('message', envoiSubWorker, false);

function envoiSubWorker(evt) {
	self.postMessage('Envoi depuis le sub worker: '+ evt.data);
}