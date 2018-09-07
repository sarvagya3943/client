import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import LocationIcon from '@material-ui/icons/EditLocation'
import CloseIcon from '@material-ui/icons/Close'
import Textfield from '@material-ui/core/TextField'
import { InputAdornment, Typography, Button, IconButton } from '@material-ui/core'
import { InlineDatePicker } from 'material-ui-pickers/DatePicker'
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeft'
import RightArrowIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyBoardIcon from '@material-ui/icons/CalendarToday'

const styles = {
    searchForm : {
        width : '1000px' , 
        height : '60px' , 
        backgroundColor : 'white' , 
        position : 'relative' , 
        marginLeft : '400px'
    } , 
    searchPlace : {
        float : 'left' , 
        backgroundColor : 'white' , 
        height : '100%' , 
        width : '40%' ,
        paddingRight : '8px' , 
        paddingLeft : '8px'
    } , 
    searchDate : {
        float : 'left' ,
        height : '100%' , 
        width : '40%' , 
        borderLeft : '1px solid #dfdddd' , 
        paddingLeft : '15px'
    } ,
    iconLoc : {
        fill : 'red' 
        // paddingTop : '18px' , 
        // paddingLeft : '11px'
    } , 
    iconClose : {
        float : 'right'  
        // paddingTop : '22px' , 
        // height : '15px'
    } , 
    textField : {
        width : '100%' , 
        height : '100%' , 
    } , 
    textFieldDate : {
        height : '100%' , 
        width : '40%' , 
        padding : 'inherit'
    },
    input : {
        height : '100%' , 
        fontSize : '25px'
    } , 
    inputDate : {
        height : '100%' , 
        fontSize : '18px' , 
    } , 
    daysDiff : {
        position : 'absolute' , 
        zIndex : 2 , 
        top : '16px' ,
        padding : '2px' ,
        right : '390px' ,
        border : '0.5px solid #dfdddd' , 
        borderRadius : '30px'
    } ,
    searchButton : {
        float : 'left' ,
        backgroundColor : 'red' , 
        height : '100%' , 
        width : '16.8%'
    }
}
class SearchForm extends React.Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            city : '' , 
            checkInDate : new Date() , 
            checkOutDate : new Date(new Date().getTime() + 1000*60*60*24)
        }
        this.handleCityChange = this.handleCityChange.bind(this) ;
        this.handleCheckOutChange = this.handleCheckOutChange.bind(this) ;
        this.handleCheckInChange = this.handleCheckInChange.bind(this) ;
    }
    handleCheckInChange = date => {
        this.setState({checkInDate : date}) ;
    }
    handleCheckOutChange = date => {
        this.setState({checkOutDate : date}) ;
    }
    handleCityChange = event => {
        this.setState({city : event.target.value}) ;
    }
    getDifference = () => {
        let timeDiff = this.state.checkOutDate.getTime() - this.state.checkInDate.getTime() ;
        let daysDiff = 0 ; 
        if(timeDiff > 0) {
            daysDiff = Math.ceil(timeDiff / (24 * 3600  * 1000)) ;
        }
        return daysDiff ;
    }
    render() {
        const { classes } = this.props ;
        return (
            <form className={classes.searchForm}>
                <div className={classes.searchPlace}>
                    <Textfield className={classes.textField}
                        required={true}
                        value={this.state.city}
                        onChange={this.handleCityChange}
                        name="city"
                        InputProps={{
                            disableUnderline : true ,
                            className : classes.input ,
                            startAdornment : <InputAdornment style={{marginTop:'5px'}} position="start"><LocationIcon className={classes.iconLoc} /></InputAdornment> ,
                            endAdornment : <InputAdornment style={{marginTop:'5px'}} position="end"><CloseIcon className={classes.iconClose} /></InputAdornment>
                        }}
                        placeholder="Search for a city"
                    />
                </div>
                <div className={classes.searchDate}>
                    <InlineDatePicker                         
                        keyboard={false}
                        adornmentPosition="start"
                        keyboardIcon={<KeyBoardIcon/>}
                        className={classes.textFieldDate}
                        leftArrowIcon={<LeftArrowIcon />}
                        rightArrowIcon={<RightArrowIcon />}
                        value = {this.state.checkInDate} 
                        onChange={this.handleCheckInChange}
                        name="checkInDate"
                        disablePast={true}
                        InputProps={{
                            disableUnderline : true ,
                            className : classes.inputDate
                        }}
                        invalidLabel=''
                        invalidDateMessage=''
                    />
                    <InlineDatePicker 
                        className={classes.textFieldDate}
                        leftArrowIcon={<LeftArrowIcon />}
                        rightArrowIcon={<RightArrowIcon />}
                        value = {this.state.checkOutDate}
                        name="checkOutDate" 
                        onChange={this.handleCheckOutChange}
                        disablePast={true}
                        InputProps={{
                            disableUnderline : true ,
                            className : classes.inputDate ,
                        }}
                        invalidLabel=''
                        invalidDateMessage=''
                    />
                    <KeyBoardIcon style={{fill:'red'}}/>
                    <Typography className={classes.daysDiff}>{this.getDifference()}N</Typography>
                </div>
                <div className={classes.searchButton}>
                    <Button type="submit" style={{
                        color : 'white' ,
                        width : '100%' , 
                        height : '100%'
                    }}
                        size="large"
                    >SEARCH</Button>
                </div>
            </form>
        )
    }
}
export default withStyles(styles)(SearchForm) ;