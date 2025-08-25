let ageInput=document.getElementById("age");
let nameInput=document.getElementById("name");
let submitButton=document.getElementById("btn");

submitButton.addEventListener("click",(event)=>{
    event.preventDefault()
    if(ageInput.value=="" || nameInput.value==""){
        alert("Please enter valid details")
    }
    else{
        let promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(Number(ageInput.value)>18){
                    resolve(`Welcome, ${nameInput.value}. you can vote.`)
                }
                else{
                    reject(`Oh sorry ${nameInput.value}. You aren't old enough`)
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