function addAuth(){
  var authInput = document.getElementById("authorisation-add-section");
  
  event.target.classList.add("hide");
  authInput.classList.remove("hide"); 
  return       
};

function saveAuth(){
  var authInput = document.getElementById("authorisation-add-section");
      addAuthButton = document.getElementById("addAuthButton");
      protoNo = document.getElementById("protoNo");
      authContentInput = document.getElementById("authContentInput").value;
      protoAuths = document.getElementById("protoAuths");
      protoListAuth = document.getElementById("protoListAuth");
      
  
  clone = protoAuths.cloneNode(true);
  clone.querySelector("#authContentOutput").innerHTML = authContentInput
  clone.classList.remove("hide");        

  protoListAuth.insertAdjacentElement('beforeend', clone); 
  console.log(authInput)
  authInput.classList.add("hide");
  addAuthButton.classList.remove("hide");
  authContentInput = null

  console.log(clone)

};

function addCond(){
  var condInput = document.getElementById("condition-add-section");
  
  event.target.classList.add("hide");
  condInput.classList.remove("hide"); 
  return       
};

function saveCond(){
  var condInput = document.getElementById("condition-add-section");
      addCondButton = document.getElementById("addCondButton");
      protoNoCond = document.getElementById("protoNoCond");
      condContentInput = document.getElementById("condContentInput").value;
      protoConds = document.getElementById("protoConds");
      protoListCond = document.getElementById("protoListCond");
      
  
  clone = protoConds.cloneNode(true);
  clone.querySelector("#condContentOutput").innerHTML = condContentInput
  clone.classList.remove("hide");        

  protoListCond.insertAdjacentElement('beforeend', clone); 
  console.log(condInput)
  condInput.classList.add("hide");
  addCondButton.classList.remove("hide");
  condContentInput = null


  console.log(clone)

  // event.target.classList.add("hide");
  // authInput.classList.remove("hide");        
};