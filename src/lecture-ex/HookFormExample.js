import React from 'react';
import { useForm } from 'react-hook-form';

const HookFormExample = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const saveDate = (data) => {
        console.log("Data:", data);
    }

    return (
        <div className='container'>
            <h3>Hook Form Example</h3>
            <div className='card'>
                <div className='card-header bg-info text-white'>Form</div>
                <div className='card-body'>
                    <form className='form-control' onSubmit={handleSubmit(saveDate)}>
                        <div className='mb-3'>
                            <input type="text" {...register("firstName", {required: true})} placeholder='Enter First Name' 
                            className='form-control' />
                            {errors.firstName && <span className='text-danger'>First name is required!</span>}
                        </div>
                        <div className='mb-3'>
                            <input type="text" {...register("lastName", {required: true})} placeholder='Enter Last Name'                     
                            className='form-control' />
                            {errors.lastName && <span className='text-danger'>Last name is required!</span>}
                        </div>
                        <button type='submit' className='btn btn-info' >Submit</button>
                    </form>
                </div>
            </div>

           

        </div>
    );
};

export default HookFormExample;