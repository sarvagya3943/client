import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import LocationIcon from '@material-ui/icons/EditLocation'
import CloseIcon from '@material-ui/icons/Close'
import Textfield from '@material-ui/core/TextField'
import { InputAdornment } from '@material-ui/core'
import { InlineDatePicker } from 'material-ui-pickers/DatePicker'
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeft'
import RightArrowIcon from '@material-ui/icons/KeyboardArrowRight'

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
        height : '100%'
    } , 
    input : {
        height : '100%' , 
        fontSize : '25px'
    }
}
class SearchForm extends React.Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            selectedDate : ''
        }
        this.handleChange = this.handleChange.bind(this) ;
    }
    handleChange = date => {
        this.setState({selectedDate : date}) ;
    }
    render() {
        const { classes } = this.props ;
        return (
            <form className={classes.searchForm}>
                <div className={classes.searchPlace}>
                    <Textfield className={classes.textField}
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
                        leftArrowIcon={<LeftArrowIcon />}
                        rightArrowIcon={<RightArrowIcon />}
                        value = {this.state.selectedDate} 
                        onChange={this.handleChange}
                        disablePast={true}
                    />
                    <InlineDatePicker 
                        leftArrowIcon={<LeftArrowIcon />}
                        rightArrowIcon={<RightArrowIcon />}
                        value = {this.state.selectedDate} 
                        onChange={this.handleChange}
                        disablePast={true}
                    />
                </div>
            </form>
        )
    }
}
export default withStyles(styles)(SearchForm) ;