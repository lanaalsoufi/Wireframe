alert('Hello Everyone');
    

var mathoperation=prompt('Please inter a Username');
document.write(mathoperation);

console.log(mathoperation);

if(mathoperation=='LANA ALSOUFI'){
alert(' No Welcome for me');
}else{
alert('WELCOME');
}

var summation= prompt('5+3');
document.write('5+3=',summation);

var number=prompt('5*3');
document.write('5*3=',number);



alert('welcome to my restaurant');

var userInput = prompt('please enter pasta type');
while(userInput !=='Spaghetti' && userInput !=='Fettuccine'){
    var userInput = prompt('Please choose Spaghetti or Fettuccine');
}

var userInput =prompt('Please enter the number of pasta dishes');

for (var i = 0; i < userInput; i++){
    if(userInput == 'Spaghetti'){
        document.write('<img alt="spaghetti" src ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"width ="200"/>');

    } else{
        document.write('<img alt="example" src ="https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg" width ="200"/>');
    }

}

function printName(){
    document.write('pasta');   
    
}
    
printName()

