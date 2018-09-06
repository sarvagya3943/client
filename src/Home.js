import React from 'react'
import Header from './Header'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

class Home extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            loginModalOpen : true , 
            registerModalOpen : false 
        }
        this.handleLoginClose = this.handleLoginClose.bind(this);
        this.handleLoginOpen = this.handleLoginOpen.bind(this) ; 
        this.handleRegisterClose = this.handleRegisterClose.bind(this);
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this) ; 
    }
    componentDidMount = () => {
        document.body.style.overflow = 'auto' ;
    }
    handleLoginClose = () => {
        this.setState(prevState => ({
            loginModalOpen : false
        }))
    }
    handleLoginOpen = () => {
        this.setState(prevState => ({
            loginModalOpen : true , 
            registerModalOpen : false 
        }))
    }
    handleRegisterClose = () => {
        this.setState(prevState => ({
            registerModalOpen : false
        }))
    }
    handleRegisterOpen = () => {
        this.setState(prevState => ({
            loginModalOpen : false , 
            registerModalOpen : true 
        }))
    }
    
    render() {
        return (
            <div>
                <Header handleLoginOpen={this.handleLoginOpen}/>
                <LoginModal open={this.state.loginModalOpen} handleClose={this.handleLoginClose} openRegister={this.handleRegisterOpen}/>
                <RegisterModal open = {this.state.registerModalOpen} handleClose={this.handleRegisterClose} openLogin={this.handleLoginOpen}/>
            </div>

        )
    }
}

export default Home;