
self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
	var datas = evt.data
	console.log('sur le worker: '+evt.data.byteLength)
  	self.postMessage(datas);

}