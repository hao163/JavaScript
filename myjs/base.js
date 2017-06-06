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
//每次新建一个对象
var $=function(){
	return new Base();
}

function Base(){
	this.elements=[];
}

//Base.prototype.elements=[];

 //获取id节点
Base.prototype.getId=function(id){
		 this.elements.push(document.getElementById(id));
		 return this;
}

//获取元素节点
Base.prototype.getTagName=function(tag){
	var tags=document.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++){
		 this.elements.push(tags[i]);
	}
	return this;
}

//设置Css
Base.prototype.css=function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style[attr]=value;
	}
	return this;
}

//设置Html
Base.prototype.html=function(str){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].innerHTML=str;
	}
	return this;
}

//设置click方法
Base.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick=fn;
	}
	return this;
}