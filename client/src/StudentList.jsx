import React, { useEffect } from 'react'

const StudentList = () => {
    const[students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/students")
        .then(({data})=>{
            setStudents(data)
})
.catch((err)=>{
    console.log(err)
})

    },[])
const dataTable=()=>{
    return students.map((res, i) => {
        return <StudentTableRow obj={res} key={i} />;
      });
    };



  return (
  <>
   <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{dataTable()}</tbody>
      </Table>
    </div>
  </>
  )
}

export default StudentList