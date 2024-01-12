import React, { useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../Components";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GiBrassEye } from "react-icons/gi";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    Course: "",
    phoneNumber: "",
    branch: "",
    email: "",
    status: "",
    action: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleAddStudent = () => {
    const { name, Course, phoneNumber, branch, email, status, action } =
      newStudent;
    // Check if all required fields are filled
    if (name && Course && phoneNumber && branch && email && status && action) {
      const newStudentData = {
        name,
        Course,
        phoneNumber,
        branch,
        email,
        status,
        action,
        id: students.length + 1, // Add a unique identifier for each student
      };

      setStudents([...students, newStudentData]);
      setNewStudent({
        name: "",
        Course: "",
        phoneNumber: "",
        branch: "",
        email: "",
        status: "",
        action: "",
      });
    } else {
      alert("Please fill all the fields.");
    }
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((student, i) => i !== index);
    setStudents(updatedStudents);
  };

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditStudent = (index) => {
    // Set the selected student's details for editing
    const selectedStudent = students[index];
    setNewStudent({ ...selectedStudent });
    setEditingIndex(index);
  };

  const handleUpdateStudent = () => {
    // Update the student details in the list
    const updatedStudents = students.map((student, index) => {
      if (index === editingIndex) {
        return { ...newStudent, id: student.id };
      }
      return student;
    });
    setStudents(updatedStudents);
    setNewStudent({
      name: "",
      Course: "",
      phoneNumber: "",
      branch: "",
      email: "",
      status: "",
      action: "",
    });
    setEditingIndex(null);
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleDeleteRow = (index) => {
    const updatedStudents = students.filter((student, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleEditRow = (student) => {
    setNewStudent({ ...student });
    setEditingIndex(students.indexOf(student));
  };

  const handleViewRow = (student) => {
    // Implement view functionality
    console.log("Viewing student:", student);
  };
  const gridColumns = [
    { field: "name", headerText: "Name", width: 100 },
    { field: "Course", headerText: "Course", width: 100 },
    { field: "phoneNumber", headerText: "Phone Number", width: 100 },
    { field: "branch", headerText: "Branch", width: 100 },
    { field: "email", headerText: "Email", width: 100 },
    { field: "status", headerText: "Status", width: 100 },
    { field: "action", headerText: "Action", width: 100 },
    {
      headerText:"Actions", width:120 ,template: (rowdata) =>{
        return(
          <div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 ml-2"
            onClick={() => handleDeleteRow(rowdata.id - 1)}
          >
            <AiFillDelete/>
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 ml-2"
            onClick={() => handleEditRow(rowdata)}
          >
            <AiFillEdit/>
          </button>
          <button
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 ml-2"
            onClick={() => handleViewRow(rowdata)}
          >
            <GiBrassEye/>
          </button>
        </div>
        )
      }
    }
  ];

  const gridData = students.map((student, index) => ({
    ...student,
    id: index + 1,
  }));

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Students" />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Student Profile Management</h1>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Add Student</h2>
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Name"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Course"
            name="Course"
            value={newStudent.Course}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={newStudent.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Branch"
            name="branch"
            value={newStudent.branch}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Email"
            name="email"
            value={newStudent.email}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Status"
            name="status"
            value={newStudent.status}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Action"
            name="action"
            value={newStudent.action}
            onChange={handleInputChange}
          />
          <br />
          <br />
          {editingIndex !== null ? (
            <button
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700"
              onClick={handleUpdateStudent}
            >
              Update Student
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
              onClick={handleAddStudent}
            >
              Add Student
            </button>
          )}
        </div>

        {/* <div>
          <h2 className="text-xl font-bold mb-2">Student List</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index} className="mb-2">
                {student.name} - {student.Course} - {student.phoneNumber} -{" "}
                {student.branch} - {student.email} - {student.status} -{" "}
                {student.action}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 ml-2"
                  onClick={() => handleDeleteStudent(index)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 ml-2"
                  onClick={() => handleEditStudent(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 ml-2"
                  onClick={() => handleViewStudent(student)}
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        </div> */}

        {/* {selectedStudent && (
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Student Details</h2>
        <p>Name: {selectedStudent.name}</p>
        <p>Course: {selectedStudent.Course}</p>
        <p>Phone Number: {selectedStudent.phoneNumber}</p>
        <p>Branch: {selectedStudent.branch}</p>
        <p>Email: {selectedStudent.email}</p>
        <p>Status: {selectedStudent.status}</p>
        <p>Action: {selectedStudent.action}</p>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
          onClick={() => setSelectedStudent(null)}
        >
          Close
        </button>
      </div>
    )} */}
      </div>
      <GridComponent
        dataSource={gridData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {gridColumns.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Students;