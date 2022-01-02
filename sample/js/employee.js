var employeesList;
function getEmployeeList(){
   var xhttp = new XMLHttpRequest();
   var obj = this;
   xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            employeesList = JSON.parse(xhttp.response);
            obj.displayEmployees();
        }
    };
    xhttp.open('GET', 'http://localhost:3000/employees');
    xhttp.send();
}

function addEmployee(){
    console.log("In POST request")
    let employee = {name:"Indrasen", email:"indrasen@gmail.com", active: "Y"};
    fetch('http://localhost:3000/employees',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:  JSON.stringify(employee)
    }).then((res)=>console.log(res)).catch((err)=>console.log(err));

}

function deleteEmployee(){
    const myDataObject={id:1}
    fetch('http://localhost:3000/employees/1',{
        method:'DELETE'
    })
    .then(res =>{
        return res.json()
    })
    .then(data =>
        console.log(data))
}
/*function getEmployeeList(){
   fetch('http://localhost:3000/employees')
   .then((res)=>{
       res.json()
       .then((data)=>{
            employeesList = data;
            displayEmployees();
       });
   })
   .catch((err)=>{
       console.log(err)
   });
}*/
function displayEmployees(){
   let employeesDispCont = employeesList.map((employees)=>`<li>${employees.name}(${employees.active?'Y':'N'})-${employees.email}</li>`);
   console.log(employeesDispCont);
   let element = document.getElementById('employeeList');
   let innerHTML = "";
   for(let index = 0; index<employeesDispCont.length; index++){
    innerHTML = innerHTML.concat(employeesDispCont[index]);
   }
   element.innerHTML = innerHTML;
}


/*window.onload = ()=>{
    let element = document.getElementsByName('username')[0];
    element.value = 'John';
}*/