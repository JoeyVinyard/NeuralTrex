const ORGS_PER_GEN = 20;
var count = 0;
var generation = 0;

var organism = {
	generation: 0,
	distance: 0,
	firstWeights: [],
	secondWeights: []
}
var org;

function neuralTick(s,d){
	if(d==null)
		return;
	network(s,d);
}
function neuralDied(r){
	count++;
	createNewOrganism();
	//Assign distance it died at
}
function createNewOrganism(){
	console.log("Creating new organism");
	org = Object.create(organism);
	if(generation==0){
		org.firstWeights= [[Math.random(),Math.random()],
				  	  [Math.random(),Math.random()],
				 	  [Math.random(),Math.random()]];
		org.secondWeights = [Math.random(),Math.random(),Math.random()];
	}
}
function sigmoid(x){
	return(1/(1+Math.exp(x/-1)));
}
function network(s,d){
	console.log("Networking");
	var distance = d/440;
	var speed = s/13;
	var out = [];
	for(var i = 0; i < org.firstWeights[0].length; i++){
		out[i] = sigmoid((d*org.firstWeights[i][0])+(s*org.firstWeights[i][1]));
	}
	var tot = 0;
	for(var i = 0; i < out.length; i++){
		tot += (out[i]*org.secondWeights[i]);
	}
	tot = sigmoid(tot).toFixed(4);
	if(tot == 0.8000)
		simJump();
	console.log(tot);
}
function simJump(){
	createNewOrganism();
	console.log("Sim");
	var event = new Event('keydown');
	event.keyCode = 32;//keys(Runner.keycodes.JUMP)[0];
	event.which = event.keyCode;
	event.altKey = false;
	event.ctrlKey = true;
	event.shiftKey = false;
	event.metaKey = false;
	document.dispatchEvent(event);
}
setTimeout(simJump,1000);
//Two inputs
//Three hidden nodes
//One output