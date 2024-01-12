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

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [newTrainer, setNewTrainer] = useState({
    name: "",
    specialization: "",
    phoneNumber: "",
    email: "",
    action: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrainer({
      ...newTrainer,
      [name]: value,
    });
  };

  const handleAddTrainer = () => {
    const { name, specialization, phoneNumber, email, action } = newTrainer;

    if (name && specialization && phoneNumber && email && action) {
      const newTrainerData = {
        name,
        specialization,
        phoneNumber,
        email,
        action,
        id: trainers.length + 1,
      };

      setTrainers([...trainers, newTrainerData]);
      setNewTrainer({
        name: "",
        specialization: "",
        phoneNumber: "",
        email: "",
        action: "",
      });
    } else {
      alert("Please fill all the fields.");
    }
  };

  const handleDeleteTrainer = (index) => {
    const updatedTrainers = trainers.filter((trainer, i) => i !== index);
    setTrainers(updatedTrainers);
  };

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditTrainer = (index) => {
    const selectedTrainer = trainers[index];
    setNewTrainer({ ...selectedTrainer });
    setEditingIndex(index);
  };

  const handleUpdateTrainer = () => {
    const updatedTrainers = trainers.map((trainer, index) => {
      if (index === editingIndex) {
        return { ...newTrainer, id: trainer.id };
      }
      return trainer;
    });
    setTrainers(updatedTrainers);
    setNewTrainer({
      name: "",
      specialization: "",
      phoneNumber: "",
      email: "",
      action: "",
    });
    setEditingIndex(null);
  };

  const handleViewTrainer = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleDeleteRow = (index) => {
    const updatedTrainers = trainers.filter((trainer, i) => i !== index);
    setTrainers(updatedTrainers);
  };

  const handleEditRow = (trainer) => {
    setNewTrainer({ ...trainer });
    setEditingIndex(trainers.indexOf(trainer));
  };

  const handleViewRow = (trainer) => {
    console.log("Viewing trainer:", trainer);
  };

  const gridColumns = [
    { field: "name", headerText: "Name", width: 100 },
    { field: "specialization", headerText: "Specialization", width: 100 },
    { field: "phoneNumber", headerText: "Phone Number", width: 100 },
    { field: "email", headerText: "Email", width: 100 },
    { field: "action", headerText: "Action", width: 100 },
    {
      headerText: "Actions",
      width: 120,
      template: (rowdata) => {
        return (
          <div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 ml-2"
              onClick={() => handleDeleteRow(rowdata.id - 1)}
            >
              <AiFillDelete />
            </button>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 ml-2"
              onClick={() => handleEditRow(rowdata)}
            >
              <AiFillEdit />
            </button>
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 ml-2"
              onClick={() => handleViewRow(rowdata)}
            >
              <GiBrassEye />
            </button>
          </div>
        );
      },
    },
  ];

  const gridData = trainers.map((trainer, index) => ({
    ...trainer,
    id: index + 1,
  }));

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Trainers" />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Trainer Profile Management</h1>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Add Trainer</h2>
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Name"
            name="name"
            value={newTrainer.name}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Specialization"
            name="specialization"
            value={newTrainer.specialization}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={newTrainer.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Email"
            name="email"
            value={newTrainer.email}
            onChange={handleInputChange}
          />
          <input
            className="border rounded px-2 py-1 mr-2"
            type="text"
            placeholder="Action"
            name="action"
            value={newTrainer.action}
            onChange={handleInputChange}
          />
          <br />
          <br />
          {editingIndex !== null ? (
            <button
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700"
              onClick={handleUpdateTrainer}
            >
              Update Trainer
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
              onClick={handleAddTrainer}
            >
              Add Trainer
            </button>
          )}
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
    </div>
  );
};

export default Trainers;
