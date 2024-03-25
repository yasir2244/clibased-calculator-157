#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Entere secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "End program"],
    },
]);
// conditional statement
if (asnwer.oprator === "Addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.operator === "Subtraction ") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {
    console.log("please select valide operator");
}
