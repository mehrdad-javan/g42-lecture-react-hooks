import React, { useEffect, useState } from "react";

const DataTable = () => {
  const initialState = [
    {
      id: 1,
      firstName: "Test1",
      lastName: "Test1",
      age: 22,
      birthDate: "2000-01-01",
      country: "Sweden",
      city: "Växjö",
    },
    {
      id: 2,
      firstName: "Test2",
      lastName: "Test2",
      age: 21,
      birthDate: "2001-01-01",
      country: "Sweden",
      city: "Växjö",
    },
  ];

  const [studentList, setStudentList] = useState(initialState);
  const [showDetails, setShowDetails] = useState(false);
  const [student, setStudent] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    birthDate: "",
    country: "",
    city: "",
  });

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableAction = (props) => {
    const showData = () => {
      console.log("STUDENT:", student);
      setStudent(props.student);
      setShowDetails(true);
    };

    return (
      <button type="button" className="btn btn-primary" onClick={showData}>
        Details
      </button>
    );
  };

  const TableRow = (props) => {
    const [tableRows, setTableRows] = useState([]);
    useEffect(() => {
      setTableRows(props.list);
    }, []);

    if (tableRows.length == 0) {
      return (
        <tbody>
          <tr>
            <td colSpan="5">Data not Found</td>
          </tr>
        </tbody>
      );
    } else {
      return (
        <tbody>
          {tableRows.map((student) => {
            const row = (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td>
                  <TableAction student={student} />
                </td>
              </tr>
            );
            return row;
          })}
        </tbody>
      );
    }
  };

  const ShowStudentDetails = () => {
    console.log(student);
    return (
      <>
        {showDetails && (
          <div className="card">
            <div className="card-header bg-info text-white">
              Student Information
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {student.country} {student.city}
              </h5>
              <p className="card-text">Id: {student.id} </p>
              <p className="card-text">
                Name: {student.firstName} {student.lastName}{" "}
              </p>
              <p className="card-text">BirthDate: {student.birthDate} </p>
            </div>
            <div className="card-footer bg-dark">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => {
                  setStudent({});
                  setShowDetails(false);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        )}
      </>
    );
  };




  
  return (
    <div className="container mt-5">
      <h1> Student List </h1>
      <table className="table table-striped">
        <TableHeader />
        <TableRow list={studentList} />
      </table>
      <div className="w-50 mx-auto">
        <ShowStudentDetails />
      </div>
    </div>
  );
};



export default DataTable;
