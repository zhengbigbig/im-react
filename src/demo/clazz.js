/**
 * class 相关的Demo
 */

 let name = 'dsd';
 class Person{
     constructor() {
        this.age = 0;
        this.getAge = this.getAge.bind(this);
     }

    //  get name() {
    //     return name;
    //  }

    //  set name(newValue) {
    //      name = newValue;
    //  }

   
     getName() {
         return name;
     }
     getAge (){
         return this.age;
     }

 }



 class B extends Person{
     constructor() {
         //super();
         this.xx = 'yyy';
     }

 }


 
 