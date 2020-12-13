rots=[3,5,7,9,11,13,17,19,23,29]

function rollF(xl){
	var i=0,t=[],it=new Uint32Array(4);
	con=new Uint32Array(4);
	
	//INITIALISE
	window.crypto.getRandomValues(it);
	roll=new Uint32Array([0,it[0],it[1],0,it[2],0,0,it[3]])
	
	
	while (i<xl.length){
		roll[0]=xl[i];
		roll[3]=xl[i+1];
		roll[5]=xl[i+2];
		roll[6]=xl[i+3];
		roll=fst8(roll,con);
		
		t.push(roll[0],roll[3],roll[5],roll[6]);
		con=Xcnt(con,[roll[0],roll[3],roll[5],roll[6]])
		
	i+=4;
	
	
	
	}
	t.push(roll[1],roll[2],roll[4],roll[7]);
	
return new Uint32Array(t);}
	
	
	
function rollB(xl){
	var i=xl.length-1,t=[],ll=i;
	
	//INITIALISE
	
	roll=new Uint32Array([0,xl[i-3],xl[i-2],0,xl[i-1],0,0,xl[i]])
	i-=4;
	con=bXcnt(xl)
	while (i>-1){
		//con=bcount(xl,ll-i)
		roll[6]=xl[i];
		roll[5]=xl[i-1];
		roll[3]=xl[i-2];
		roll[0]=xl[i-3];
		roll=rst8(roll,con);
		t.push(roll[6],roll[5],roll[3],roll[0]);
		
	i-=4;}
	//t.push(roll[0],roll[1],roll[2],roll[3])
return new Uint32Array(t.reverse());}	


	
	
function count(inp){
	var t=new Uint32Array(1);
	for (x in inp){t[0]=(t[0]+inp[x])%4294967296;}
return t[0]}

function bcount(inp,c){
	var t=new Uint32Array(1),l=(inp.length-c)-5,i=0;
	while (l > -1){t[0]=(t[0]+inp[l])%4294967296;l-=1;}
return t[0]}

function Xcnt(a,b){
	
	for (z in a){a[z]^=b[z];}
return a}

function bXcnt(a){
	var b=new Uint32Array(4),z=0;
	while(z<a.length-5){
		b[0]^=a[z];
		b[1]^=a[z+1];
		b[2]^=a[z+2];
		b[3]^=a[z+3];
		z+=4;}
return b}


function r(y,v,i){return (y>>>(32-v)|y<<v)}


function fst8(xl,cn){
	var i=0;x=new Uint32Array(Array.from(xl));
while (i<10){	
//PartA
	x[0]^=r(x[1],rots[i])^cn[0];
	x[2]^=r(x[3],rots[i])^cn[1];
	x[4]^=r(x[5],rots[i])^cn[2];
	x[6]^=r(x[7],rots[i])^cn[3];
	x[1]^=r(x[2],rots[i])^cn[0];
	x[3]^=r(x[0],rots[i])^cn[1];
	x[5]^=r(x[6],rots[i])^cn[2];
	x[7]^=r(x[4],rots[i])^cn[3];
//PartB	
	x[1]^=r(x[4],rots[i])^cn[0];
	x[3]^=r(x[6],rots[i])^cn[1];
	x[5]^=r(x[0],rots[i])^cn[2];
	x[7]^=r(x[2],rots[i])^cn[3];

	x[0]^=r(x[7],rots[i])^cn[0];
	x[2]^=r(x[5],rots[i])^cn[1];
	x[4]^=r(x[3],rots[i])^cn[2];
	x[6]^=r(x[1],rots[i])^cn[3];
	

//x=new Uint32Array([x[4],x[6],x[5],x[7],x[0],x[2],x[1],x[3]]);
	
	x=new Uint32Array([x[1],x[3],x[5],x[7],x[2],x[0],x[4],x[6]]);
	i++;
}
	return (x);
		
}

function rst8(xl,cn){
	x=new Uint32Array(Array.from(xl));
	con=Xcnt(cn,[x[0],x[3],x[5],x[6]]);cn=con;
	var i=9;
while (i>-1){
//x=new Uint32Array([x[4],x[6],x[5],x[7],x[0],x[2],x[1],x[3]]);
//PartB	
x=new Uint32Array([x[5],x[0],x[4],x[1],x[6],x[2],x[7],x[3]]);

x[0]^=r(x[7],rots[i])^cn[0];
	x[2]^=r(x[5],rots[i])^cn[1];
	x[4]^=r(x[3],rots[i])^cn[2];
	x[6]^=r(x[1],rots[i])^cn[3];
	
x[7]^=r(x[2],rots[i])^cn[3];
x[5]^=r(x[0],rots[i])^cn[2];
x[3]^=r(x[6],rots[i])^cn[1];
	x[1]^=r(x[4],rots[i])^cn[0];
	
	
//PartA	
	
	x[1]^=r(x[2],rots[i])^cn[0];
	x[3]^=r(x[0],rots[i])^cn[1];
	x[5]^=r(x[6],rots[i])^cn[2];
	x[7]^=r(x[4],rots[i])^cn[3];
	x[0]^=r(x[1],rots[i])^cn[0];
	x[2]^=r(x[3],rots[i])^cn[1];
	x[4]^=r(x[5],rots[i])^cn[2];
	x[6]^=r(x[7],rots[i])^cn[3];
	
	i--;
}
	return (x);
		
}


//TESTINPUT

function tinp(l){
	ip = new Uint32Array(l);
window.crypto.getRandomValues(ip);
}
