import React from 'react'

export default function Alert({ alert}) {

    const capitalize = (word) => {
        const lower = word.toLowerCase(); 
        return lower.charAt(0).toUpperCase() + lower.slice(1);      
    }

    return (
        alert && <div className={`alert alert-${alert.msg} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(alert.msg)}</strong> : {alert.type}
            
        </div>

    )
}
