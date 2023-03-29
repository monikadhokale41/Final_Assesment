// import React, { Component } from 'react'

//  class CreateTraineeComponent extends Component {
//   constructor(props){
//     super(props)
    
//     this.state = {
//         name: '',
//         email:''
//     }
//     this.changeNameHandler = this.changeNameHandler.bind(this);
//     this.changeEmailHandler = this.changeEmailHandler.bind(this);
//     this.saveTrainee = this.saveTrainee.bind(this)
//  }
 
//  saveEmployee = (e) =>{
//     e.preventDefault();

//     let employee ={Name: this.state.name, Email: this.state.email};
//     console.log('employee =>' +JSON.stringify(employee))
//  }

//  changeNameHandler=(event)=>{
//     this.setState({name:event.target.Value});
//  }

//  changeEmailHandler=(event)=>{
//     this.setState({email:event.target.Value});
//  }

//  cancel(){
//     this.props.history.push('/trainee');
//  }

//     render() {
//     return (
//       <div>
//             <div className="container">
//                 <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         <h3>Add Trainee</h3>
//                         <div className="card-body">
//                             <form>
//                                 <div className="form-group">
//                                     <label>Name</label>
//                                     <input  placeholder="Name" name="name" className="form-control" value={this.state.name} onchange={this.changeNameHandler}></input>
//                                 </div>
//                                 <div className="form-group">
//                                     <label>Email</label>
//                                     <input  placeholder="Email" name="email" className="form-control" value={this.state.email} onchange={this.changeEmailHandler}></input>
//                                 </div>
//                                 <button className="btn btn-success" onClick={this.saveTrainee}>Save Trainee</button>
//                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}> Add Trainee</button>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//       </div>
//     )
//   }
// }
// export default CreateTraineeComponent


import React, { Component } from 'react'

 class CreateTraineeComponent extends Component {
  constructor(props){
    super(props)
    
    this.state = {
       name:'',
       email:'',
       plan:'',
       duration:'',
       day:''
    }
    this.changeNameHandler =  this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
 }
 
 changeNameHandler=(event) =>{
    this.setState({name:event.target.value});
 }
 changeEmailHandler =(event) =>{
    this.setState({email:event.target.value});
 }
 changePlanHandler=(event) =>{
    this.setState({plan:event.target.value});
 }
 changeDurationHandler=(event) =>{
    this.setState({duration:event.target.value});
 }
 changeDayHandler=(event) =>{
    this.setState({day:event.target.value});
 }

render() {
    return (
      <div>
           <div className="container">
              <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">Create Plan</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input  placeholder="Name" name="name" className="form-control" value={this.state.name} onchange={this.changeNameHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input  placeholder="Email" name="email" className="form-control" value={this.state.email} onchange={this.changeEmailHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Plan</label>
                                    <input  placeholder="Plan" name="plan" className="form-control" value={this.state.plan} onchange={this.changePlanHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Duration</label>
                                    <input  placeholder="Duration" name="duration" className="form-control" value={this.state.duration} onchange={this.changeDurationHandler}></input>
                                </div>
                                <div className="form-group">
                                    <label>Day</label>
                                    <input  placeholder="Day" name="day" className="form-control" value={this.state.day} onchange={this.changeDayHandler}></input>
                                </div>
                                <button className="btn btn-success" onClick={this.saveTrainee}>Save Plan</button>
                                <button className="btn btn-danger" style={{marginleft:"500px"}} > Cancel Plan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default CreateTraineeComponent


