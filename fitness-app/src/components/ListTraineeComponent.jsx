import React, { Component } from 'react'
import TraineeService from '../services/TraineeService'

class ListTraineeComponent extends Component {
  
    constructor(props) {
        super(props)
        
        this.state = {
            trainee: []
        }
        this.addTrainee = this.addTrainee.bind(this);
    }
  
    componentDidMount(){
        TraineeService.getTrainee().then((res) =>{
            this.setState({trainee: res.data});
        })
    }

    addTrainee(){
        this.props.history.push('/add-trainee');
    }

    render() {
    return (
      <div>
        <h2 className="text-center">Plans Assigned by Coach</h2>
        <div className='row '>
            <div className="col-3 mt-2"><button className="btn btn-primary" onClick={this.addTrainee}>Assign Plan</button></div>
            
        </div>
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Trainee Name</th>
                        <th>Trainee Email</th>
                        <th>Plan</th>
                        <th>Plan Duration</th>
                        <th>Day</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.trainee.map(
                            trainee =>
                            <tr key={trainee.id}>
                                <td>{trainee.name}</td>
                                <td>{trainee.email}</td>
                                <td>{trainee.plan}</td>
                                <td>{trainee.duration}</td>
                                <td>{trainee.day}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

      </div>
    )
  }
}

export default ListTraineeComponent
