import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Skill = () => {
    const initialState = [];
    const [skills, setSkills] = useState(initialState);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
      setSkills(skills);
      console.log(skills);
    }, [loadData]);


    const ShowData = () => { // props
        return (
            <>
                {
                     skills.map( // props.skills.map
                         skill => ( 
                            <ul className="row pb-2" key={skill.id}>
                              <li className="form-lable">{skill.title}</li>
                          </ul>
                           )
                        )
                }
            </>
        );
     }
    
     const Form = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
    
        const generateId = () => {
            return Math.floor(Math.random() * 100000);
        }
        
        const saveData = (data) => {
            const id = generateId();
            const title = data.title;
            const newElement = { id, title };
            
            skills.push(newElement);
            setLoadData(!loadData);
        }
    
        return (
          <form onSubmit={handleSubmit(saveData)} >
            <div className="row">
              <div className="col">
                <input type="text" className="form-control"  {...register("title", { required: true })} placeholder="Skill Title" />
                {errors.title && <span className="text-danger">This is required</span>}
              </div>
              <div className="col">
                <button type="submit"  className="btn btn-success" > + </button>
              </div>
            </div>
        </form>
      );
     }

    return (
        <div className="container">
            <h3>Fullstack Developer Skills</h3>
            <ShowData skills={skills}/>
            <Form />
        </div>
    );
};

export default Skill;