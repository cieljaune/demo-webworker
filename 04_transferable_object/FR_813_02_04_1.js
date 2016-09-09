
self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
	var datas = evt.data
	console.log('sur le worker ' + evt.data.tableau.byteLength)
	datas = false;
  	self.postMessage(datas);
}