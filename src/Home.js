import React from 'react'
import Header from './Header'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import banner from './assets/banner.jpg';
import Amenities from './Amenities'
import SearchForm from './SearchForm'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginModalOpen: false,
            registerModalOpen: false
        }
        this.handleLoginClose = this.handleLoginClose.bind(this);
        this.handleLoginOpen = this.handleLoginOpen.bind(this);
        this.handleRegisterClose = this.handleRegisterClose.bind(this);
        this.handleRegisterOpen = this.handleRegisterOpen.bind(this);
    }
    componentDidMount = () => {
        document.body.style.overflow = 'auto';
    }
    handleLoginClose = () => {
        this.setState(prevState => ({
            loginModalOpen: false
        }))
    }
    handleLoginOpen = () => {
        this.setState(prevState => ({
            loginModalOpen: true,
            registerModalOpen: false
        }))
    }
    handleRegisterClose = () => {
        this.setState(prevState => ({
            registerModalOpen: false
        }))
    }
    handleRegisterOpen = () => {
        this.setState(prevState => ({
            loginModalOpen: false,
            registerModalOpen: true
        }))
    }

    render() {
        return (
            <div>
                <Header handleLoginOpen={this.handleLoginOpen} />
                {/* banner */}
                <div style={{position:'relative'}}>
                    <img alt="Monsoon banner" src={banner} style={{
                        width: '100%'
                    }} />
                    <div style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.005),rgba(0,0,0,0.8))',
                        position: 'absolute' , 
                        width : '100%' , 
                        marginTop : '-150px' , 
                        height : '27%'
                    }}>
                        {/* amenities */}
                        <Amenities />
                        {/* Search Form */}
                        <SearchForm />
                    </div>
                </div>
                <LoginModal open={this.state.loginModalOpen} handleClose={this.handleLoginClose} openRegister={this.handleRegisterOpen} />
                <RegisterModal open={this.state.registerModalOpen} handleClose={this.handleRegisterClose} openLogin={this.handleLoginOpen} />
            </div>
        )
    }
}

export default Home;