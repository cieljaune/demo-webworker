// console.log('worker terminé')

self.addEventListener('message', envoiWorker, false)
function envoiWorker(evt) {
	console.log(evt.data)
	
  self.postMessage('Envoi depuis le worker: '+ evt.data);
}