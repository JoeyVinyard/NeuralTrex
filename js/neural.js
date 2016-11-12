var organism = {
	generation: 0,
	distance: 0,
	//synapses{{Math.random()*100,Math.Random*100}}
}

var organisms = [];

//final ORGANISMS_PER_GENERATION = 10;

function neuralTick(s){
	//console.log(s);
}
function neuralDied(r){
	var org = Object.create(organism);
	org.distance = r;
	organisms.push(org);
	console.log(organisms);
}
function neuralObstacles(o){
	o;
}
function sigmoid(x){
	return (1/(1+Math.exp(x/-1)));
}
function simJump(){
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
setTimeout(simJump,500);