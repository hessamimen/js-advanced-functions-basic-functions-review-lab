// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(workActivity = "go to the office"){
    return `This Monday, I will ${workActivity}.`
}

function wrapAdjective(adj ="*"){
    return function(value = "special"){
        return `You are ${adj}${value}${adj}!`;
    }
}
let Calculator = {
    add: function(){
        return 1+3;
    },
    subtract: function(){
        return 1-3;
    },
    multiply: function(){
        return 1*3;
    },
    divide: function(){
        return 10/5;
    },
}
// function actionApplyer(start, fnArr){
//     fnArr = [
//         function(start){ return a * 2 },
//         function(start){ return a + 1000},
//         function(start){ return a % 7 }
//       ]
// }

function actionApplyer(start, fnArr) {
    for (let i = 0; i < fnArr.length; i++) {
      start = fnArr[i](start);
    }
    return start;
  }

  console.log(actionApplyer(13, [
                function(start){ return start * 2 },
                function(start){ return start + 1000},
                function(start){ return start % 7 }
              ]));
  
