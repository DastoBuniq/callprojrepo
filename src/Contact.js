import React from 'react';
import './App.css';

class Contact extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            clicked : false,
        }
    }

    render(){
        let infoContact 
        if(this.state.clicked){
            infoContact = (
                <div>
                    <span className="infoSpan">Telefono: {this.props.value.phone}</span>
                    <span className="infoSpan">Mail: {this.props.value.mail}</span>
                </div>
            )
        }else{
            infoContact = (<></>)
        }
        return (
            <div className="row">
                <div>
                <span>{this.props.value.name}</span>
                <button className="infoBtn"
                onClick={()=>this.setState({clicked: !this.state.clicked})}><i className="fas fa-info-circle"></i></button>
                <button className="infoBtn"
                style={{float: 'right'}}><i className="fas fa-phone"></i></button>
                </div>
                {infoContact}
            </div>
          );
    
    }

}


export default Contact;