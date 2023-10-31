//=>Q1.class Movie
class Movie{
    constructor(title,stdio,rating="PG"){
        this.title=title;
        this.stdio=stdio;
        this.rating=rating;
    }
    get PG(){
        return this.rating(obj2,obj3);
    }
}
const obj1=new Movie("Lion","SRC Productions","PG11");
const obj2=new Movie("Tiger","ABC Productions");
const obj3=new Movie("Lion","EFG Productions");
const obj4=new Movie("LionCasino Royale","Eon Productions","PG­13");
console.log(`All the movie ratings are
"obj1":${obj1.rating}
"obj2":${obj2.rating}
"obj3":${obj3.rating}
"obj4":${obj4.rating}`);


//Q2.Circle
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
       this.radius=radius;
    }
    get colorCircle(){
       return this.color;
    }
    set colorCircle(color){
        this.color=color;
    }
    get toString(){
        return `"circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI*this.radius*this.radius;
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
var object=new Circle(1.0,"red");
console.log(object.radiusCircle);
object.radiusCircle=2.2;
console.log(object.radiusCircle);
console.log(object.colorCircle);
object.colorCircle="purple";
console.log(object.colorCircle);
console.log(object.toString);
console.log(object.areaCircle);
console.log(object.circumferenceCircle);


//Q3.Person Details
class Person{
    constructor(name,age,gender,salary){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
    }
}
var obj5=new Person("moni","30","female","10lakhs");
var obj6=new Person("chandru","40","male","20lakhs");
var obj7=new Person("kannan","50","male","40lakhs");
var obj8=new Person("diya","20","female","12lakhs");
console.log(`All the person names are 
"obj":${obj5.name}
"obj1":${obj6.name}
"obj2":${obj7.name}
"obj3":${obj8.name}`);
console.log(`All the person age are 
"obj":${obj5.age}
"obj1":${obj6.age}
"obj2":${obj7.age}
"obj3":${obj8.age}`);
console.log(`All the person gender are 
"obj":${obj5.gender}
"obj1":${obj6.gender}
"obj2":${obj7.gender}
"obj3":${obj8.gender}`);
console.log(`All the person salary are 
"obj":${obj5.salary}
"obj1":${obj6.salary}
"obj2":${obj7.salary}
"obj3":${obj8.salary}`);


// Q4.Uber
//  const Uber={
//      constructor(kms,price){
//          this.kms=kms;
//          this.price=price;
//     }
//      set kms(price){
//          console.log("price"+" "n);
//        this.price=price*;
//      }
//      get price(){
//       return this.price;
//      }
//  }
// Uber.kms=5;
// console.log(Uber.price);