/* While Loop implementation [As condition is checked first, if it is not 
satisfied then the implementation will not occur for a single time]

Syntax: 
    initialize before the while loop start
    while(stopping condition){
        code
        .
        .

        updation/iteration
    }

*/

// Basic Example
let i = 1;
while (i < 6){
    console.log("While Loop output: ",i);
    i++;
}

/* Do while loop implementation [This loop will run at lease once because, condition is
checked after implementation first]

do{
    code
    .
    .

    updation/iteration
}while(stopping condition);

*/

// Basic example of do while loop
let j = 1;
do{
    console.log("Do-While output: ",j);
    j++;
}while(j < 6);