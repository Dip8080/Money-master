                                    /* functions */

// function-one-->which takes id and returns value. 
function inputIdToValue(InputId){
    if(InputId=='income_input'){
    const incomeField = document.getElementById(InputId).value;
    return incomeField ;
    }
    else if(InputId=='save_field'){
    const incomeField = document.getElementById(InputId).value;
    return incomeField ;
   
    }
    else {
    const expenseOne = parseInt(document.getElementById('expence_input1').value);    
    const expensetwo = parseInt(document.getElementById('expence_input2').value);    
    const expensethree = parseInt(document.getElementById('expence_input3').value); 
    const totalExp = expenseOne + expensetwo + expensethree;
    return totalExp;   
    }
   
}
// function-two-> which will set the returned value with some validation.
function setBalance(totEx , totblnc){
const totalExpfield = document.getElementById('total_expence');
const totalblncfield = document.getElementById('total_balance');
if (isNaN(totEx) || isNaN(totblnc)){
    alert('i m begging , please enter Number not string')
    totEx = 0;
    totblnc=0 ;
    totalExpfield.innerText =totEx ;
    totalblncfield.innerText = totblnc ;
}
else{
    totalExpfield.innerText =totEx;
    totalblncfield.innerText = totblnc ;
}
}
                                    /* end functions */

// Error management
const input_field_all= document.getElementsByClassName('block');
for(let classx of input_field_all ){
    classx.addEventListener('click',function(event){
        event.target.value ='';
    })
    classx.addEventListener('keyup',function(event){
        const typedKey = event.target.value;
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        if(typedKey=="-"){
            alert('click "OK" .then enter positive number');
            event.target.style.backgroundColor ="#C1C1C1"
        }
        else if(alphabet.indexOf(typedKey)!=-1){
            alert('Type only NUMBER key Plese');
        }
        else{
            event.target.style.backgroundColor ="white"
        }
    })
}

                                        /* event handler */
// event one
document.getElementById('calculate_btn').addEventListener('click',function (){
    const income = parseInt(inputIdToValue('income_input'));
    const totalExpenses = parseInt(inputIdToValue());
    if(income>totalExpenses){
    const balance = income - totalExpenses ;
    setBalance(totalExpenses,balance);
    document.getElementById('show_error2').style.display='none';
    }
    else{
        document.getElementById('show_error2').style.display='block';
        setBalance(totalExpenses,0);
        
    } 
  
})
// event two
document.getElementById('save_btn').addEventListener('click',function(){
  const income = parseInt(inputIdToValue('income_input'));
  const parcrntField = parseFloat(inputIdToValue('save_field'))/100;
  const totalbalance = parseInt(document.getElementById('total_balance').innerText);
  const saving = document.getElementById('saving_balance');
  const remaining =document.getElementById('remaining_balance');
  if (isNaN(saving.innerText) && isNaN(remaining.innerText)){
  alert('Enter ur saving parcent')  
  saving.innerText =0; 
  remaining.innerText =0;
  }
  else{
    saving.innerText =income * parcrntField; 
    remaining.innerText =totalbalance- parseInt(saving.innerText);
  }
  
})

// event three-> main perpose of this event is to handle error in saving field.

document.getElementById('save_btn').addEventListener('click',function(){
    const balance = parseInt(document.getElementById('total_balance').innerText);
    const savingTarget = parseInt(document.getElementById('saving_balance').innerText);
    if(balance<savingTarget){
        document.getElementById('show_error').style.display='block';
        document.getElementById('remaining_balance').innerText=0;

    }
    else{
        document.getElementById('show_error').style.display='none';

    }
})
