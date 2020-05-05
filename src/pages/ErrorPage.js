




import React, { Component } from 'react'
import Swal from 'sweetalert2';

class ErrorPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorPageMessage:'NOT FOUND PAGE '
        }
    }

    componentDidMount(){
        Swal.fire({
            title: 'Error 404 !!',
            text: "Please Go Back !!",
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes,Go Back!'
          }).then((result) => {
            if (result.value) {
            window.location.href = "/reactapp/"
            }
          })
    }

    render() {
        return (
            <div className = "errorPage">
                
            </div>
        )
    }
}

export default ErrorPage;
