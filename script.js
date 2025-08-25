//your JS code here. If required.
let ageInput=document.getElementById("age");
let nameInput=document.getElementById("name");
let submitButton=document.getElementById("btn");

submitButton.addEventListener("click",()=>{
    if(ageInput.value=="" || nameInput.value==""){
        alert("Please enter valid details")
    }
    else{
        let promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(ageInput.value>18){
                    resolve("Welcome,. You can vote")
                }
                else{
                    reject("Oh sorry. You aren't old enough")
                }
            },4000)
        })

        promise.then((resolveData)=>{
            alert(resolveData)
        })
        .catch((err)=>{
            alert(err)
        })
    }

   
})