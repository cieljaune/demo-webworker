self.addEventListener('message', envoiWorker, false);

function envoiWorker(evt) {
  self.postMessage('Envoi depuis le worker: '+ evt.data);
}