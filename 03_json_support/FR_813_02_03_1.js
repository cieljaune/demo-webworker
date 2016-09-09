self.addEventListener('message', envoiWorker, false);
function envoiWorker(evt) {
	var datas = evt.data
	//console.log(datas.login)
	var retour = ''
	if (datas.login == 'merguez' && datas.pwd == '123') {
		retour = 'Ok tout est vérifié'
	} else {
		retour = 'la paire login / pwd ne correspond pas'
	}
	self.postMessage(retour)
}