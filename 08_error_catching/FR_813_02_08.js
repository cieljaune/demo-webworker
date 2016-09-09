self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
  self.postMessage( 'retour worker ' + e.data);
}