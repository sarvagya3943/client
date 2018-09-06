import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle, withStyles, DialogContent, TextField, Typography ,InputAdornment, FormControl,
        RadioGroup, Radio , FormControlLabel } from '@material-ui/core';
import green from '@material-ui/core/colors/green'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import EmailIcon from '@material-ui/icons/Email'
import SmartPhoneIcon from '@material-ui/icons/Smartphone'
import PersonIcon from '@material-ui/icons/Person'
import Tooltip from '@material-ui/core/Tooltip'

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
        paddingRight : '15px' ,
        marginRight : '15px'
    } , 
    input : {
        width : '300px' , 
        height : '75px' ,
        marginLeft : '15px'
    } ,
    registerButton : {
        display : 'block' ,
        marginTop : '15px' ,
        backgroundColor : green[500] , 
        '&:hover' : {
            backgroundColor : green[700]
        } ,
        marginLeft : '300px'
    } ,
    container : {
        display : 'flex' 
    } ,
    register : {
        flexGrow : 1 , 
        marginRight : '-15px'
    } ,
    dialog : {
        maxWidth : '85%' , 
        align : 'center'
    } , 
    radio_group : {
        flexDirection : 'row' , 
        paddingLeft : '10px'
    } , 
    form_control : {
        width : '300px' , 
        height : '75px' , 
        marginLeft : '15px'
    }
}

class RegisterModal extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            showPassword : false , 
            user : {
                firstName : '' , 
                lastName : '' , 
                email : '' , 
                password : '' ,
                mobileNum : '' , 
                gender : ''
            } , 
            errors : {
                firstName : '' , 
                lastName : ''
            }
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this) ;
        this.handleChange = this.handleChange.bind(this) ;
        this.openLoginModal = this.openLoginModal.bind(this) ;
    }
    handleClickShowPassword = () => {
        this.setState(prev => ({
            showPassword : !prev.showPassword
        }))
    }
    
    handleChange = event => {
        let inputName = event.target.name ;
        let inputVal = event.target.value ;
        let newState = Object.assign({} , this.state) ;
        newState.user[inputName] = inputVal ;
        if(inputName === "firstName") {
            if(/[a-zA-Z]+$/.test(inputVal) === true) newState.errors.firstName = '' ;
            else newState.errors.firstName = 'First name cant contain digits!' ;
        }
        if(inputName === "lastName") {
            if(/[a-zA-Z]+$/.test(inputVal) === true) newState.errors.lastName = '' ;
            else newState.errors.lastName = 'Last name cant contain digits!' ;
        }
        if(inputName === "mobileNum") {
            if(/^[1-9]\d{9}$/.test(inputVal) === true) newState.errors.mobileNum = '' ;
            else newState.errors.mobileNum = 'Number should be exactly 10 digits long and cant contain non digit characters and shouldnt start with zero'
        }
        if(inputName === "password") {
            if(inputVal.length < 8) newState.errors.password = 'Too short , should be atleast 8 characters' ;
            else newState.errors.password = '' ;
        }
        this.setState(newState) ;
    }
    componentDidMount = () => {
        document.body.style.overflow = 'auto' ;
    }
    openLoginModal = () => {
        this.props.handleClose() ;
        this.props.openLogin() ;
    }
    render() {
        const { classes } = this.props ;
        return (
            <Dialog open={this.props.open}
                disableBackdropClick={true}
                onClose={this.props.handleClose}
                maxWidth='lg'>
                <DialogTitle className={classes.title} disableTypography={true}>
                    <div className={classes.titleText}>SIGN-UP</div>
                    <CloseIcon onClick={this.props.handleClose} className={classes.closeIcon} />
                </DialogTitle>
                <DialogContent className={classes.container}>
                    <form className={classes.Form}>
                        <TextField value={this.state.user.firstName || ''} onChange={this.handleChange} className={classes.input} name="firstName" label="First Name" type="text"
                            required={true}
                            InputProps={{
                                endAdornment : <InputAdornment position="end"><IconButton><PersonIcon /></IconButton></InputAdornment>
                            }}
                            helperText={this.state.errors.firstName}
                            />
                        <TextField value={this.state.user.lastName || ''} onChange={this.handleChange} className={classes.input} name="lastName" label="Last Name" type="text"
                            required={true}
                            InputProps={{
                                endAdornment : <InputAdornment position="end"><IconButton><PersonIcon /></IconButton></InputAdornment>
                            }}
                            helperText={this.state.errors.lastName}
                            />
                        
                        <TextField value={this.state.user.email || ''} onChange={this.handleChange} className={classes.input} name="email" label="Email ID" type="email"
                            required={true}
                            autoFocus={true}
                            InputProps={{
                                endAdornment : <InputAdornment position="end"><IconButton><EmailIcon /></IconButton></InputAdornment>
                            }}
                            />
                        <TextField value={this.state.user.password || ''} onChange={this.handleChange} label="Password" name="password" type={this.state.showPassword ? "text" : "password"}
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
                        <TextField value={this.state.user.mobileNum || ''} onChange={this.handleChange} name="mobileNum" className={classes.input} label="Mobile Number" type="text"
                            required={true}
                            InputProps={{
                                endAdornment : <InputAdornment position="end"><IconButton><SmartPhoneIcon /></IconButton></InputAdornment>
                            }}
                            helperText={this.state.errors.mobileNum}
                            />
                        <FormControl className={classes.form_control}>
                            <RadioGroup value={this.state.user.gender || 'Male'} onChange={this.handleChange} name="gender" className={classes.radio_group}>
                                <FormControlLabel value="Male" label="Male" control={<Radio />}/>
                                <FormControlLabel value="Female" label="Female" control={<Radio />}/>
                                <FormControlLabel value="Other" label="Other" control={<Radio />}/>
                            </RadioGroup>
                        </FormControl>
                        <Button type="submit" variant="raised" className={classes.registerButton} size="large">
                            SIGN-UP
                        </Button>
                    </form>
                    <div>
                        <ul>
                            <li>
                                <Typography variant="subheading">Book hotels faster. Get pre-filled details on booking window</Typography>    
                            </li>
                            <li>
                                <Typography variant="subheading">Access booking history</Typography>    
                            </li>
                            <li>
                                <Typography variant="subheading">Manage/Cancel bookings easily</Typography>    
                            </li>
                            <li>
                                <Typography variant="subheading">Password should have at least 8 characters.</Typography>    
                            </li>
                            <li>
                                <Typography variant="subheading">By signing up you agree to our terms and privacy policy.</Typography>    
                            </li>
                            <Typography variant="title" color="secondary" gutterBottom={true} align="center" style={{paddingTop : '40px'}}>Already a User ?</Typography>
                            <Button onClick={this.openLoginModal} variant="outlined" color="secondary" style={{marginTop : '20px' , marginLeft : '150px'}}>Log In</Button>
                        </ul>   
                    </div>
                </DialogContent>
            </Dialog>
        ) 
    }
}

export default withStyles(styles)(RegisterModal )