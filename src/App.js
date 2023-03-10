App.js
import React, { Fragment } from 'react'
import 'h8k-components'
import AddEmployee from './components/AddEmployee'
import Employee from './Components/Employee'
const title ='Editable Table'
const employeesList = [

{ id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 }, 
{ id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
{ id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
]
const App = () => {
return (
  <Fragment>
    <h8k-navbar header={title}></h8k-navbar>
    <div className="card w-45 mx-auto mt-75 pb-5">
      <table data-testid='table'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Position</th> <th>Salary</th>
          <th>Action</th>
          </tr> 
        </thead>
        <tbody>
          {employeesList.map((employee,idx)=>{
            <tr key = {employee.id} data-test-id = {`row-{idx}`}>
              <Employee idx ={idx}/>
            </tr>
          })}
            <AddEmployee/>
        </tbody>
  </table>
  </div>
  </Fragment>
  )} 
  export default App;