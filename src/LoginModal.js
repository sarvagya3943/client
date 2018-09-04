import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { DialogTitle, DialogContent, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
const styles = {
    title : {
        backgroundColor : '#EE2E24' , 
        color : '#fff' ,
        fontFamily : 'Roboto' ,
        display : 'inline-block'
    } ,
    titleText : {
        display : 'inline-block' , 
        fontSize : '30px'
    },
    closeIcon : {
        display : 'inline-block' ,
        float : 'right' ,
        width : '2em' ,
        height : '1.5em' ,
        marginLeft : '150px'
    }
}
class LoginModal extends React.Component {


    render() {
        const { classes } = this.props ;
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                disableBackdropClick={false}>
                <DialogTitle className={classes.title} disableTypography={true}>
                    <div className={classes.titleText}>Enter Credentials to Login</div>
                    <CloseIcon className={classes.closeIcon} />
                </DialogTitle>
                <DialogContent>
                    <form>
                        <TextField label="Email"/>
                        <TextField label="Password"/>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(LoginModal) ;