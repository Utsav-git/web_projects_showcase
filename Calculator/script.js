//Function for grtting history
function getHistory(){
    return document.getElementById("history-value").innerText;
}

//Function for printing history
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

//Function for getting output
function getOutput(){
    return document.getElementById("output-value").innerText;
}

//Function for printing output
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

//Function for formatting the number with comma separation
function getFormattedNumber(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var v = n.toLocaleString("en");
    return v;
}

//Function for re formatting the comma separated number back to number without comma
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//operator handling using click event 
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){ //clear button C clicked
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){ //backspace button CE clicked
            
            var output = reverseNumberFormat(getOutput()).toString();
            
            if(output){ //output has value
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{ //any operator clicked namely +,-,x,/,%
            var output = getOutput();
            var history = getHistory();

            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output != "" || history != ""){
                output = output == "" ? output: reverseNumberFormat(output);
                history = history + output;
                if(this.id == "="){
                    var res = eval(history);
                    printOutput(res);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
             
        }
       
    });
}

//Numbers handling using click event
var number = document.getElementsByClassName("number");
for(var i = 0; i <  number.length; i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getOutput());
        if(output != NaN){ //if  output is a number
            output = output + this.id;
            printOutput(output);
        }
        
    });
}