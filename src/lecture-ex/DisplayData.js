import React from 'react';

const DisplayData = (props) => {

    return(
        <div className='card'>
             <div className='card-header bg-dark text-white'>Data</div>
            <div className='card-body'>
                <p><b>First Name: {props.fn}</b></p>
                <p><b>Last Name: {props.ln}</b></p>
            </div>
            <div className='card-footer'></div>
        </div>
    );
}

export default DisplayData;