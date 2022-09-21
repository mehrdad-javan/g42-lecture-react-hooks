import React, { useState } from 'react';

const Person = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    /*const personInitialState = {firstName: '', lastName: ''};
    const [person, setPerson] = useState(personInitialState);*/

    const [showData, setShowData] = useState(false);

    //const [firstNameError, setFirstNameError] = useState('');
    //const [lastNameError, setLastNameError] = useState('');

    const errorInitialsState = {firstNameError: '', lastNameError: ''};
    const [error, setError] = useState(errorInitialsState);

    /*const changeFirstName = (e) => {
        const value = e.target.value + '';
        setFirstName(value);
    }*/

    const validateForm = () => {

        let validationResult = true;
        let _error = {};
        if(firstName.length < 2 || firstName.length > 40){
            //setFirstNameError('first name is not valid')
            _error.firstNameError = 'first name is not valid';
            validationResult = false;
        }
        if(lastName.length < 2 || lastName.length > 40){
            //setLastNameError('last name is not valid')
            _error.lastNameError = 'last name is not valid';
            validationResult = false;
        }

        setError(_error);

        return validationResult;

    }

    const clickBtn = () => {
        console.log('FirstName:', firstName);
        console.log('LastName:', lastName);
        if(validateForm()){
            setShowData(true);
        }
    }

    const resetForm = () => {
        setShowData(false);
        setFirstName('');
        setLastName('');
        //setFirstNameError('');
        //setLastNameError('');
        setError(errorInitialsState);
    }




    // define a child component

    const DisplayData = () => {


        
        return(
            <div className='card'>
                 <div className='card-header bg-dark text-white'>Data</div>
                <div className='card-body'>
                    <p><b>First Name: {firstName}</b></p>
                    <p><b>Last Name: {lastName}</b></p>
                </div>
                <div className='card-footer'>
                    <button type='button' className='btn btn-danger' onClick={ resetForm } >Close</button>
                </div>
            </div>
        );
    }


    return (
        <div className='container'>

            <div className='card'>
                <div className='card-header bg-info text-white'>Form</div>
                <div className='card-body'>
                    <form className='form-control'>
                        <div className='mb-3'>
                            <input type="text" placeholder='Enter First Name' 
                            value={firstName} onChange={ (e) => setFirstName(e.target.value + '') }
                            className='form-control' />
                            <span className='text-danger'>{error.firstNameError}</span>
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Enter Last Name' 
                            value={lastName} onChange={ (e) => setLastName(e.target.value+'')}
                            className='form-control' />
                            <span className='text-danger'>{error.lastNameError}</span>
                        </div>
                    </form>
                </div>
                <div className='card-footer'>
                    <button type='button' className='btn btn-success' onClick={clickBtn}>Submit</button>
                </div>
            </div>

            <br/>
            {showData && ( <DisplayData />)}
           

        </div>
    );
};

export default Person;