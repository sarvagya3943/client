import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle, DialogContent, TextField, Typography, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import EmailIcon from '@material-ui/icons/Email'
import Tooltip from '@material-ui/core/Tooltip'
import Snackbar from '@material-ui/core/Snackbar'

const styles = {
    title : {
        backgroundColor : '#EE2E24' , 
        color : '#fff' ,
        fontFamily : 'Roboto' ,
        display : 'inline-block'
    } ,
    titleText : {
        display : 'inline-block' , 
        fontSize : '20px' , 
        paddingTop : '10px'
    },
    closeIcon : {
        display : 'inline-block' ,
        float : 'right' ,
        width : '2em' ,
        height : '1.5em' ,
        marginLeft : '150px' , 
        cursor : 'pointer'
    } , 
    Form : {
        marginTop : '15px' , 
        flexGrow : 1 , 
        width : '50%' ,
        borderRight : '1px dashed gray' , 
        paddingRight : '15px'
    } , 
    input : {
        width : '300px' , 
        height : '75px' 
    } ,
    loginButton : {
        display : 'block' ,
        marginTop : '15px' ,
        backgroundColor : green[500] , 
        '&:hover' : {
            backgroundColor : green[700]
        }
    } ,
    container : {
        display : 'flex' 
    } ,
    register : {
        flexGrow : 1 , 
        marginRight : '-15px'
    } , 
    snackbar : {
        width : '400px' ,
        height : '100px'
    }
}
class LoginModal extends React.Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            showPassword : false , 
            user : {
                email : '' , 
                password : ''
            } ,
            errors : { 
                password : ''
            } ,
            openSnackBar : false
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this) ;
        this.openRegisterModal = this.openRegisterModal.bind(this) ;
        this.handleChange = this.handleChange.bind(this) ;
        this.handleSnackClose = this.handleSnackClose.bind(this) ;
        this.check = this.check.bind(this) ;
    }
    check = () => {
        let formOk = true ;
        console.log(Object.keys(this.state.errors)) ;
        Object.keys(this.state.errors).forEach(key => {
            if(this.state.errors[key] !== "") {
                formOk = false ;
            }
        })
        if(!formOk) {
            this.setState({openSnackBar : true}) ;
        }
    }
    handleClickShowPassword = () => {
        this.setState(prev => ({
            showPassword : !prev.showPassword
        }))
    } 
    componentDidUpdate = () => {
        document.body.style.overflow = 'auto' ;
    }
    openRegisterModal = () => {
        this.props.handleClose() ;
        this.props.openRegister() ;
    }
    handleChange = event => {
        let inputName = event.target.name ;
        let inputVal = event.target.value ;
        let newState = Object.assign({} , this.state) ;
        newState.user[inputName] = inputVal ;
        if(inputName === "password") {
            if(inputVal.length < 8) newState.errors.password = 'Too short , should be atleast 8 characters' ;
            else newState.errors.password = '' ;
        }
        this.setState(newState) ;
    }
    handleSnackClose = (event , reason) => {
        if(reason === 'clickaway') return ;
        this.setState({openSnackBar : false}) ;
    }
    render() {
        const { classes } = this.props ;
        return (
            <div>
                <Snackbar
                    className={classes.snackbar}
                    anchorOrigin={{
                        vertical : 'top' , 
                        horizontal : 'center'
                    }}
                    open={this.state.openSnackBar}
                    autoHideDuration={3000}
                    onClose={this.handleSnackClose}
                    message={<span>There are errors in your form</span>}
                    action={[<IconButton key="close"><CloseIcon style={{color : 'white'}}/></IconButton>]}>
                </Snackbar>
                <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                disableBackdropClick={true}>
                
                <DialogTitle className={classes.title} disableTypography={true}>
                    <div className={classes.titleText}>Enter Credentials to Login</div>
                    <CloseIcon onClick={this.props.handleClose} className={classes.closeIcon} />
                </DialogTitle>
                <DialogContent className={classes.container}>
                    <form className={classes.Form}>
                        <TextField value = {this.state.user.email} name="email" onChange={this.handleChange} className={classes.input} label="Email ID" type="email"
                            required={true}
                            autoFocus={true}
                            InputProps={{
                                endAdornment : <InputAdornment position="end"><IconButton><EmailIcon /></IconButton></InputAdornment>
                            }}
                            />
                        <TextField value={this.state.user.password} name="password" onChange={this.handleChange} label="Password" type={this.state.showPassword ? "text" : "password"}
                            required={true}
                            className={classes.input}
                            InputProps={{
                                endAdornment : <InputAdornment position="end">
                                    <Tooltip title={this.state.showPassword ? 'Hide Password' : 'Show Password'}>
                                    <IconButton onClick={this.handleClickShowPassword}>
                                        {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            }}
                            helperText={this.state.errors.password}
                            />
                        {/* <Button type="submit" variant="raised" className={classes.loginButton} size="large">
                            LOGIN
                        </Button> */}
                        <Button onClick={this.check} variant="raised" className={classes.loginButton} size="large">
                            LOGIN
                        </Button>
                    </form>
                    <div className={classes.register}>
                        <Typography variant="title" color="secondary" gutterBottom={true} align="center" style={{paddingTop : '40px'}}>Not a Registered User ?</Typography>
                        <Button onClick={this.openRegisterModal} variant="outlined" color="secondary" style={{marginTop : '20px' , marginLeft : '20px'}}>Sign Up Now</Button>
                    </div>
                </DialogContent>
            </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(LoginModal) ;