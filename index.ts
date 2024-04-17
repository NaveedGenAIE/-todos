import { log } from "console";
import inquirer from "inquirer";
let todos = [];
let condition = true
while (condition) 
{let todosQuestion = await inquirer.prompt([
  {
    name: "firstQuestion",
    type: "input",
    message: "What would you like to Add in Your Todos?",
   
  },
  {
    name: "secondQuestion",
    type: "confirm",
    message: "Would You like to add more in todos  ",
    default:"true"
  },
]);
  todos.push(todosQuestion.firstQuestion);
  console.log(todos);
  condition = todosQuestion.secondQuestion
}

