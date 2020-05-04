


import React, { Component } from 'react'
import Swal from 'sweetalert2';

class todoApp extends Component {
    constructor(props) {
        super(props)
    }
    ShowSweetAlert = this.ShowSweetAlert.bind(this);
    ShowSweetAlert() {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            showCancelButton:true,
            confirmButtonText: 'GoBack'
        }).then((result)=>{
            if(result.value === true){
                window.location.href = "/aa"
            }
            else{
                console.log("nothing !");
            }
        })
    }
    render() {
        return (
            <div className="TodoApp">
                <h1>AA</h1>
                <input className="test-btn" type="button" value="SHOW ALERT" onClick={this.ShowSweetAlert} />
            </div>
        )
    }
}
export default todoApp;