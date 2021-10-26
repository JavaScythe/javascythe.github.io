function dil(c,k,o){
	var r = [];
	for(i in c){
		r.push(
			[(o[0]+(k*(c[i][0]-o[0]))),(o[1]+(k*(c[i][1]-o[1])))]
		);
	}
	return r;
}
function f(n){
	if(toString(n).indexOf("-")==-1){
		return n-(n*2);
	} else {
		return n+(n*2);
	}
}
function rot(c,d){
	var r = [];
	for(i in c){
		if(d=90){
			r.push([f(c[i][1]),c[i][0]]);
		} else if(d=180){
			r.push([f(c[i][0]),f(c[i][1])]);
		} else if(d=270){
			r.push([c[i][1],f(c[i][0])]);
		}
	}
	return r;
}
function ref(c,l){
	var r = [];
	for(i in c){
		if(l==1){
			r.push([c[i][0],f(c[i][1])]);
		} else if(l==0) {
			r.push([f(c[i][0]),c[i][1]]);
		}else if(l==2){
			r.push([c[i][1],c[i][0]]);
		} else if(l[0]=="y"){
			var d = parseInt(l.replace("y",""));
			r.push([c[i][0], (2*d)-c[i][1]]);
		}
	}
	return r;
}
function trls(c,x,y){
	var r = [];
	for(i in c){
		r.push([(c[i][0]+x),(c[i][1]+y)])
	}
	return r;
}
