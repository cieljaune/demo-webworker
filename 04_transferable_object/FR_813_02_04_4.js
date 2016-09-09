
self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
	var datas = evt.data
	console.log('sur le worker: '+evt.data.byteLength)
	//console.log(datas)
	self.postMessage(datas, [datas]);
}