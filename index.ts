#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.defaults({fontPath: "assets/fonts"});

function ready(){
  console.log (chalk.bgGreenBright(figlet.textSync("WELCOME !!!")));
  
}
let TodoList :string[]=[];
let flag=true;
ready();
while(flag){
const answer:{TODO:string,extend:boolean} =await inquirer.prompt([
    {
      type:"input",
      name:"TODO",
      message:(chalk.greenBright("Enter the activity you want to add in your Todo List"))

    },
    {
        type:"confirm",
        name:"extend",
        message:(chalk.greenBright("Do you want to extend your Todo List ?")),
        default:"false"  
      }
])
const {TODO,extend}=answer;

flag=extend;
if(TODO) {
    TodoList.push(TODO)
} else {
    console.log (chalk.bgRedBright("Enter the valid option"));
}
}
if(TodoList.length > 0){
    console.log(chalk.bgBlueBright("Required Todo List is :"))
    TodoList.forEach(TODO => {
        console.log(TODO)
    });
} else {
    console.log(chalk.bgRedBright("Nothing Todo"))
}


