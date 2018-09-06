import React from 'react' 
import { Typography } from '@material-ui/core'
import AcIcon from '@material-ui/icons/AcUnit'
import WifiIcon from '@material-ui/icons/Wifi'
import TvIcon from '@material-ui/icons/Tv'
import TubIcon from '@material-ui/icons/HotTub'
import HotelIcon from '@material-ui/icons/Hotel'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    container : {
        display : 'flex' , 
        color : 'white' , 
        marginTop : '-150px' , 
        zIndex : '3'
    } ,
    heading : {
        marginLeft : '400px' , 
        marginTop : '10px' , 
        fontSize : '14px' , 
        color : 'white'
    } ,
    content_list : {
        display : 'flex' ,
        marginLeft : '240px'
    } , 
    list_item : {
        width : '60px',
        marginLeft : '15px' , 
        textAlign : 'center'
    } ,
    icon : {
        height : '23px' 
    } , 
    text : {
        fontSize : '11px' , 
        color : 'white'
    }
}
class Amenities extends React.Component {
    render () {
        const { classes } = this.props ;
        return (
            <div className = {classes.container}>
                <Typography className={classes.heading}>Features in all OYOs</Typography>
                <div className={classes.content_list}>
                    <div className={classes.list_item}>
                        <AcIcon />
                        <Typography className={classes.text}>AC Rooms</Typography>
                    </div>
                    <div className={classes.list_item}>
                        <WifiIcon />
                        <Typography className={classes.text}>Free Wifi</Typography>
                    </div>
                    <div className={classes.list_item}>
                        <TvIcon />
                        <Typography className={classes.text}>TV</Typography>
                    </div>
                    <div className={classes.list_item}>
                        <TubIcon />
                        <Typography className={classes.text}>Clean Washrooms</Typography>
                    </div>
                    <div className={classes.list_item}>
                        <HotelIcon />
                        <Typography className={classes.text}>Spotless Linen</Typography>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Amenities) ;