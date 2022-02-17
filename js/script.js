function AllMighty(InputId){
    if(InputId=='income_input'){
    const incomeField = document.getElementById(InputId).value;
    console.log(typeof(incomeField))
    console.log(incomeField)
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
totalExpfield.innerText =totEx ;
totalblncfield.innerText = totblnc ;
}
// Error management
const input_field_all= document.getElementsByClassName('block');
for(let classx of input_field_all ){
    classx.addEventListener('click',function(event){
        event.target.value ='';
    })
    classx.addEventListener('keyup',function(event){
        const typedKey = event.target.value;
        if(typedKey=="-"){
            alert('click "OK" .then enter positive number');
            event.target.style.backgroundColor ="#C1C1C1"
        }
        else{
            event.target.style.backgroundColor ="white"
        }
    })
}


// event one
document.getElementById('calculate_btn').addEventListener('click',function (){
  const income = parseInt(AllMighty('income_input'));
  console.log(typeof(income));
  const totalExpenses = parseInt(AllMighty());
  const balance = income - totalExpenses ;
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
