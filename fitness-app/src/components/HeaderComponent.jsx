import React, { Component } from 'react'

 class HeaderComponent extends Component {
  
  constructor(props){
    super(props)

    this.state={

    }
  }
    render() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-extend-md navbar-dark bg-dark">
                <div>
                    <h1 className="navbar-brand">Fitness Application</h1>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}
export default HeaderComponent