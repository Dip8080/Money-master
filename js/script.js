function AllMighty(InputId){
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


// event one
document.getElementById('calculate_btn').addEventListener('click',function (){
    const income = parseInt(AllMighty('income_input'));
    const totalExpenses = parseInt(AllMighty());
  
    const balance = income - totalExpenses ;
    console.log(totalExpenses);
    console.log(balance);
    setBalance(totalExpenses,balance); 
  
})
// event two
document.getElementById('save_btn').addEventListener('click',function(){
  const income = parseInt(AllMighty('income_input'));
  const parcrntField = parseFloat(AllMighty('save_field'))/100;
  const totalbalance = parseInt(document.getElementById('total_balance').innerText);
  const saving = document.getElementById('saving_balance');
  saving.innerText =income * parcrntField; 
  document.getElementById('remaining_balance').innerText =totalbalance- parseInt(saving.innerText);

  
})
