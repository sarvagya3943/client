import React from 'react'
import Header from './Header'
import LoginModal from './LoginModal'

class Home extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            loginModalOpen : true , 
            registerModalOpen : false 
        }
        this.handleLoginClose = this.handleLoginClose.bind(this); 
    }
    handleLoginClose = () => {
        this.setState(prevState => ({
            loginModalOpen : false
        }))
    }
    render() {
        return (
            <div>
                <Header />
                <LoginModal open={this.state.loginModalOpen} handleClose={this.handleLoginClose} />
            </div>

        )
    }
}

export default Home;