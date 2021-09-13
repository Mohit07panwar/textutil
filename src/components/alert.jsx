import React from 'react'

const Alert = (props) => {
    return (
        <div style={{height: "40px"}}>
      { props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>Hey: {props.alert.msg}</strong>  
        </div>}
        </div>
    )
}
export default Alert;