
 let inputChangeDep = document.getElementById("dep-input");
 let changeWith = document.getElementById("with-Mon");
 let changeBalance = document.getElementById("balance-mon");
 let changeDep = document.getElementById("dep-Mon")

 let inputChangeWith = document.getElementById("with-input");



let depositButn = document.getElementById("green-Butn-1");
depositButn.addEventListener("click",function(){
  const deposit2Amount = getInputNumbers("dep-input");

  updateSpanText("dep-Mon",deposit2Amount);
  updateSpanText("balance-mon",deposit2Amount);

  document.getElementById("dep-input").value = "";
  
  
  })

 
  const withdrawButn = document.getElementById("green-Butn");
  withdrawButn.addEventListener("click",function(){
    const withdraw2Numbers = getInputNumbers("with-input");
    updateSpanText("with-Mon", withdraw2Numbers);
    updateSpanText("balance-mon", -1* withdraw2Numbers);
    document.getElementById("with-input").value = "";

  })

    function updateSpanText(id,deposit2Number){
   const current2Balance = document.getElementById(id).innerText ;
   const current2BalanceNumber = parseFloat(current2Balance);
   const totalBalance = deposit2Number + current2BalanceNumber;
   document.getElementById(id).innerText = totalBalance;
  }

  function getInputNumbers(id){
   withdraw2Amount = document.getElementById(id).value;
   const withdraw2Numbers = parseFloat(withdraw2Amount);
   return withdraw2Numbers;
  }





