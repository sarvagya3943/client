import React from 'react' 
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PhoneIcon from '@material-ui/icons/Phone'
import MobileIcon from '@material-ui/icons/StayCurrentPortrait'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/Help'

const styles = theme => ({
    root : {
        flexGrow : 1
    },
    logo : {
        fill : '#EE2A24'
    } ,
    header_text : {
        flexGrow : 1 ,
        fontSize : '1rem' , 
        marginLeft : '20px' ,
        color : '#464444'
    } ,
    header_right : {
        //flexGrow : 1
    },
    container : {
        height : '60px' ,
        padding : '0px 0px 0px 0px' ,
        marginRight : '12px' ,
        position : 'relative' , 
        display : 'inline-block'
    } ,
    icon : {
        width : '32px' , 
        height : '32px' , 
        position : 'relative' ,
        display : 'inline-block' ,
        margin : '14px 4px 14px 0px'
    } , 
    text : {
        display : 'inline-block' ,
        margin : '0px 0px 0px 0px' ,
        lineHeight : '60px' ,
        fontWeight : '700' ,
        fontSize : '14px' ,
        verticalAlign : 'top' ,
        color : '#464444'
    } , 
    text2 : {
        display : 'inline-block' ,
        margin : '0px 0px 0px 0px' ,
        lineHeight : '60px' ,
        fontWeight : '400' ,
        fontSize : '14px' ,
        verticalAlign : 'top' ,
        color : '#464444'
    }
}) ;
// function HomeIcon(props) {
//     return (
//         <SvgIcon {...props}>
//             <path d="M58.7.2H48l-4.7 9-4.6-9H28l10 20v9.3h10.6V20L58.6.3zm13-.2c-8.4 0-15 6.7-15 15s6.6 15 15 15c8.2 0 15-6.7 15-15s-6.8-15-15-15zm0 20.3c-3 0-5.5-2.4-5.5-5.3 0-3 2.4-5.3 5.4-5.3 3 0 5.3 2.3 5.3 5.3s-2.5 5.3-5.4 5.3zM15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 20.3c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3 3 0 5.3 2.3 5.3 5.3S18 20.3 15 20.3z"/>
//         </SvgIcon>
//     )
// }
function Header(props) {
    const { classes } = props ;
    return (
        <div className={classes.root}>
            <AppBar color="default" position="fixed">
                <Toolbar>
                    <a href = "/">
                        <svg className={classes.logo} width="85" height="30" viewBox="0 0 87 30" xmlns="http://www.w3.org/2000/svg"><path d="M58.7.2H48l-4.7 9-4.6-9H28l10 20v9.3h10.6V20L58.6.3zm13-.2c-8.4 0-15 6.7-15 15s6.6 15 15 15c8.2 0 15-6.7 15-15s-6.8-15-15-15zm0 20.3c-3 0-5.5-2.4-5.5-5.3 0-3 2.4-5.3 5.4-5.3 3 0 5.3 2.3 5.3 5.3s-2.5 5.3-5.4 5.3zM15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 20.3c-3 0-5.3-2.4-5.3-5.3 0-3 2.4-5.3 5.3-5.3 3 0 5.3 2.3 5.3 5.3S18 20.3 15 20.3z"></path></svg>
                    </a>
                    <Typography className={classes.header_text} variant="title">
                        India's Largest Hospitality Company
                    </Typography>
                    <div className={classes.header_right}>
                        <div className={classes.container}>
                            <MobileIcon className={classes.icon} />
                            <Typography className={classes.text2}>
                                <a style={{textDecoration : 'none' , color : '#464444'}} href="https://play.google.com/store/apps/details?id=com.oyo.consumer&hl=en_IN">
                                    Download App
                                </a>
                            </Typography>
                        </div>
                        <div className={classes.container}>
                            <a onClick={props.handleLoginOpen} style={{cursor:'pointer'}}><AccountCircle className={classes.icon} /></a>
                            <Typography className={classes.text2}><a onClick={props.handleLoginOpen} style={{textDecoration:'none',color:'#464444',cursor:'pointer'}} >Login / Sign Up</a></Typography>
                        </div>
                        <div className={classes.container}>
                            <HelpIcon className={classes.icon} />
                            <Typography className={classes.text2}>Help</Typography>
                        </div>
                        <div className={classes.container}>
                            <PhoneIcon className={classes.icon} />
                            <Typography className={classes.text}>+91 931 393 1393</Typography>
                        </div>
                        
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    ) ;
}

export default withStyles(styles)(Header) ;