class Student {
    constructor(name){
        this.name =name;
    }
    describe (){
        return(`the studente ${this.name}  `)
    }
}

class Unit {
    constructor(name){
        // console.log(`Unit takes in ${name}`)
    this.name=name;
    this.students=[];
    
}
addstudentinclass (student){
    if (student instanceof Student){
        // console.log(student)
        this.students.push(student);
    }else {
        throw new Error (`you can add only students.arguement is not student`);
        
    }

}
    describe(){
        return `${this.name} has ${this.students.length} students`;

    }
}
class Menu {
    constructor(){
        this.Unit=[];
        this.selecteUnit=null;

    }
start (){
    let selection =this.showMainMenuOption();
    while(selection !=0){
        switch (selection){
        case '1':
            this.createUnit();
            break;
        case '2':
            this.viewUnit();
            break;
        case '3':
            this.deleteUnit();
            break;
        case '4':
            this.displayUnits();
            break;
            default:
                selection=0;

        }
         selection =this.showMainMenuOption();
    }
    alert('goodbye!');
}
showMainMenuOption(){
    return prompt(`
        0 ) exit
        1 ) Create new unit
        2 ) view a unit
        3 ) delete a unit
        4 ) display all units
        `);
}
showclassMainOption(classInfo){
    return prompt(`
        0 )back
        1 ) add a new student
        2 ) delete a student
      
       ----------------------------------
        ${classInfo} 
        
        `)
}
displayUnits(){
    let classtString='';
    for( let i =0;i < this.Unit.length;i++){
        classtString += i + ')' + this.Unit[i].name + "\n" ;
    }
    alert(classtString);
}

createUnit(){
    let name =prompt(`enter name for this class`);
    // let newClass = new Unit(name)
    // console.log(newClass)
    this.Unit.push(new Unit(name));
    // console.log(this.class[0])
}

viewUnit(){
    // console.log(this.class)
    let index=prompt(`enter the index of class that you want you view`);
    if (index > -1 && index < this.Unit.length){
        this.selectedUint=this.Unit[index];
        let description = 'class name : ' +this.selectedUint.name +'\n';
        // description += ' '+ this.classes[index].describe() + '\n';
        for (let i =0;i< this.selectedUint.students.length;i++){
            description += i +')'+this.selectedUint.students[i].name +'\n';
           

        }
        let selection =this.showclassMainOption(description);
        switch (selection){
            case '1':
                this.creatstudent();
                break;
            case '2':
                this.deleteStudent();
                break;
           

        }
    } 

}
creatstudent (){
    let name= prompt(`Enter name for new student`);
    this.selectedUint.students.push(new Student(name))
}

deleteStudent(){
    let index = prompt(`enter the index of student you wish to deletr`);
    if(index >-1 && index < this.selectedUint.students.length){
        this.selectedUint.students.splice(index,1);
    }
}


}
let menu= new Menu();
menu.start();