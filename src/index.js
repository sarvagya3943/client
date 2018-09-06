import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import 'typeface-roboto'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// ReactDOM.render(<Home />,document.getElementById('root')) ;

ReactDOM.render(<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Home />
  </MuiPickersUtilsProvider> , document.getElementById('root')) ;