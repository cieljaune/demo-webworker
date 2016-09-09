self.compteur = 0



self.addEventListener('connect', connection, false);
function connection(evt) {
	var port = evt.source
  	port.addEventListener('message', sharedEnvoi, false)
	port.start();
	self.compteur ++
}
function sharedEnvoi(evt){
	this.postMessage('Envoi depuis le worker partagé: '+ evt.data + ' => ' + self.compteur);
}

// this.close()