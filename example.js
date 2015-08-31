
// creating and using class

var MyClass = function(x){
 
    this.memberX = x;
    this.memberY = 'y';
    
};


MyClass.prototype = {
  
    getX : function(){
        return this.memberX;
    }
    
};


var myObject = new MyClass('x');
var myObject2 = new MyClass('xx');

console.log(myObject.getX());
console.log(myObject2.getX());