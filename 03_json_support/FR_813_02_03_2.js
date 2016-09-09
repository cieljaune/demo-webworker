//console.log('worker terminé');

var retour = {}
retour.file = 'FR_813_02_04-2.js'

self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
	var datas = evt.data
	if (datas.login == 'merguez' && datas.pwd == '1234') {
		retour.msg = 'Ok tout est vérifié'
	} else {
		retour.msg = 'la paire login / pwd ne correspond pas'
	}
  	self.postMessage(retour);
}