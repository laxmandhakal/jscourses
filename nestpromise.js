var promise=new Promise(function(resolve,reject)
{
	resolve(55);
})
promise.
then(function(data)
{
	console.log(data);
var p= new Promise(function(resolve,reject)
{
	setTimeout(function(){
resolve(75)
	},1000);
})
return p;
}).
then(function(data){
	console.log(data);
	return data + 20 ;
}).
then (function(data){
	console.log(data);
});