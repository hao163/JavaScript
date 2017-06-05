/*var Base={
 getId:function(id){
  return document.getElementById(id);
 },
 getName:function(na){
  return document.getElementsByName(na);
 },
 getTag:function(tag){
  return document.getElementsByTagName(tag);
 },
};
*/

function Base(){
	this.elements=[];

	this.getId=function(id){
		 this.elements.push(document.getElementById(id));
		 return this;
	}
}

Base.prototype.css=function(attr,value){
	this.elements[0].style[attr]=value;
	return this;
}