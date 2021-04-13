let eForm=document.getElementById('eForm');
let table=document.getElementById('table');
let totalsp=document.getElementById('total');
eForm.addEventListener('submit',addEmp);
let tot=0;
Employee.el=JSON.parse(localStorage.getItem('empL'))||[];
function Employee(name,email,department) {
   this.name=name;
   this.email=email;
   this.department=department;
   this.salary= getrandomSalary();
   Employee.el.push(this);
}
function getrandomSalary() {
    return Math.floor(Math.random() * (500 - 100 + 1) + 100);
  }


Employee.prototype.setlocal=function() {

localStorage.setItem('empL',JSON.stringify(Employee.el))
    
}
function addEmp(event) {
    console.log(event);
    event.preventDefault();
   
    new Employee(event.target.Name.value,event.target.Email.value,event.target.Dep.value);
    Employee.prototype.setlocal();
    renderTable();
}

function renderTable() {
    table.innerHTML='';
    let tr0=document.createElement('tr');
    table.appendChild(tr0);
    let thName=document.createElement('th');
    tr0.appendChild(thName);
    thName.textContent="Name";
    let thEmail=document.createElement('th');
    tr0.appendChild(thEmail);
    thEmail.textContent="Email";
    let thDep=document.createElement('th');
    tr0.appendChild(thDep);
    thDep.textContent="Department";
    let thSal=document.createElement('th');
    tr0.appendChild(thSal);
    thSal.textContent="Salary";
    for(let i in Employee.el)
    {
        let tr=document.createElement('tr');
        table.appendChild(tr)
        let nametd=document.createElement('td') ;
        tr.appendChild(nametd);
        nametd.textContent=Employee.el[i].name;
        let emailtd=document.createElement('td');
        tr.appendChild(emailtd);
        emailtd.textContent=Employee.el[i].email;
        let depTd=document.createElement('td');
        tr.appendChild(depTd);
        depTd.textContent=Employee.el[i].department;
        let salaryTd=document.createElement('td');
        tr.appendChild(salaryTd);
        salaryTd.textContent=Employee.el[i].salary;
        tot+=Employee.el[i].salary;
     }
     totalsp.textContent=`total:${tot}`;
}





