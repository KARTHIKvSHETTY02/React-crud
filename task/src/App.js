import React, { useState } from "react";

const App = () => {

  const options = [
    {value:'',label:'Choose Teacher'},
    { value: 'ABC', label: 'ABC' },
    { value: 'BCD', label: 'BCD' },
    { value: 'CDE', label: 'CDE' },
  ];

  const [subjectname, setsubjectname] = useState("");
  const [teacher, setTeacher] = useState("");
  const [marks, setMarks] = useState("");
  const [obtainedmarks, setObtainedmarks] = useState("");

  
  const [studentdetails, setStudentDetails] = useState([]);
  const [show, setShow] = useState(false) 
  const[edititems,setEdititems] = useState(null)


  const onsubmit = (e) => {
    
    e.preventDefault();

      const subjectname = document.getElementById('subjectname').value
      const teacher = document.getElementById('teacher').value;
      const marks = document.getElementById('marks').value;
      const obtainedmarks = document.getElementById('obtainedmarks').value;
    
      const newstudent = {
      subjectname: subjectname,
      teacher: teacher,
      marks: marks,
      obtainedmarks: obtainedmarks
      }
    
    if (newstudent.subjectname === "" || newstudent.teacher === "" || newstudent.marks === "" || newstudent.obtainedmarks === "")
    {
      alert("Please Enter The Details!..")
    }
    else
    {
      setStudentDetails([...studentdetails, newstudent]);
  
      setsubjectname('');
      setTeacher('');
      setMarks('');
      setObtainedmarks('');

    }
}


//delete Record

  const  deleteitem = (id) => {
    
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
        setStudentDetails(studentdetails.filter((ele, index) => {
          return index !== id;
        })
    )  
  }
}
  
  
  const edititem = (id) => {

    setsubjectname(studentdetails[id].subjectname);
    setTeacher(studentdetails[id].teacher);
    setMarks(studentdetails[id].marks);
    setObtainedmarks(studentdetails[id].obtainedmarks);

    setShow(true);
    setEdititems(id);
 }

  const handleupdate = (e) => {

    e.preventDefault();
    const subjectname1 = document.getElementById('subjectname').value
    const teacher1 = document.getElementById('teacher').value;
    const marks1 = document.getElementById('marks').value;
    const obtainedmarks1 = document.getElementById('obtainedmarks').value;

  
    if ((studentdetails[edititems].subjectname === subjectname) &&
      (studentdetails[edititems].teacher === teacher) &&
      (studentdetails[edititems].marks === marks) &&
      (studentdetails[edititems].obtainedmarks === obtainedmarks)) 
    {
      alert("Please Update the Values! "); 
    }
    else {
          studentdetails[edititems].subjectname = subjectname1;
          studentdetails[edititems].teacher = teacher1;
          studentdetails[edititems].marks = marks1;
          studentdetails[edititems].obtainedmarks = obtainedmarks1;
   
          setStudentDetails([...studentdetails]);
          setShow(false);
      
          setsubjectname('');
          setTeacher('');
          setMarks('');
          setObtainedmarks('');
   
    } 
  }

  return (<>
    <div className="form">
      <form action="">
        
        <label >Subject Name:</label>
        <input type="text" id="subjectname" placeholder=" Enter Subject Name"
          onChange={(e) => {setsubjectname(e.target.value)}} value={subjectname} autoComplete="off" />

        <br />
        
        <label >Select Teacher:</label>
        <select id="teacher"  value={teacher} onChange={(e) => {setTeacher(e.target.value)}} autoComplete="off">

        {options.map((option) => ( 
          <option key={option.value} value={option.value}>
            {option.label}
          </option>))}
        </select>
        
        <br />
        
        <label >Total Marks:</label>
        <input type="text" id="marks" placeholder="Enter Total Marks " onChange={(e) => { setMarks(e.target.value) }} value={marks} 
          autoComplete="off"
        />
        
        <br/>

        <label >Obtained Marks:</label>
        <input type="text" id="obtainedmarks" placeholder="Enter Obtained Marks"
          onChange={(e) => {setObtainedmarks(e.target.value)}} value={obtainedmarks}  autoComplete="off"/>

        <br />
        
        {!show ?<button className="btn1" onClick={onsubmit} >Save</button>:
        <button className="btn1"  onClick={handleupdate} >Update</button>}
      </form>
    </div>

    
    <table>
    <tr>
    <th>SL No</th>
    <th>Subject</th>
    <th>Teacher</th>
    <th>Max Marks</th>
    <th>Obtained Marks</th>
    <th>Options</th>
    </tr>
      {
        studentdetails.map((ele,id) => {
          return (
            <tr>
              <td>{id+1}</td>
              <td>{ele.subjectname}</td>
        <td>{ ele.teacher}</td>
        <td>{ ele.marks}</td>
              <td>{ele.obtainedmarks}</td>
              <td> <button className="btn" onClick={() => { edititem(id) }}> 📝 </button>
                <button className="btn" onClick={() => deleteitem(id)}>❌</button> </td>
              
   </tr>)})}
      
    </table>
    
  </>)
}

export default App;