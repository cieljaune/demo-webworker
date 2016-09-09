var workerSUB = new Worker("FR_813_02_05-Sub.js");
workerSUB.addEventListener('message', retourSubWorker, false);


self.addEventListener('message', envoiWorker, false);

function envoiWorker(evt) {
 	workerSUB.postMessage( evt.data);
}
function retourSubWorker(evt) {
 	self.postMessage( evt.data);
}
