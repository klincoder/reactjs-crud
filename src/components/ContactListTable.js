// Import resources
import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { fireDB } from "../api/firebase";
import { Button, Modal, Table } from "react-bootstrap";
import ContactListForm from "./ContactListForm";

// Component
function ContactListTable() {
  // Define gratList state
  const [data, setData] = useState([]);

  // Define row ID state
  const [rowID, setRowID] = useState({});

  // Define modal state - create
  const [showCreate, setShowCreate] = useState(false);
  const handleOpenCreate = () => setShowCreate(true);
  const handleCloseCreate = () => setShowCreate(false);

  // Define modal state - edit
  const [showEdit, setShowEdit] = useState(false);
  const handleOpenEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  // Define modal state - view
  const [showView, setShowView] = useState(false);
  const handleOpenView = () => setShowView(true);
  const handleCloseView = () => setShowView(false);

  // Debug
  // console.log('Row id: ', rowID);

  // READ DATA FROM DATABSE -When app loads, show the list items once
  useEffect(() => {
    // Run query
    fireDB
      .collection("gratitudes")
      .orderBy("dateCreated", "desc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone,
            address: doc.data().address,
          }))
        );
        // Debug
        console.log(
          "DB Snapshot",
          snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
        );
      });
  }, []);

  // Return
  return (
    <>
      {/** CREATE BUTTON */}
      <div className="mb-4 me-auto">
        <Button variant="success" onClick={handleOpenCreate}>
          <FaPlus /> Create
        </Button>
      </div>

      {/** TABLE */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {/** Show db results */}
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].phone}</td>
                <td>{data[id].address}</td>

                {/** Add action buttons */}
                <td className="btn-group col-6">
                  {/* View button */}
                  <Button
                    variant="secondary ms-2"
                    onClick={() => {
                      setRowID(data[id]);
                      handleOpenView();
                    }}
                  >
                    <FaEye />
                  </Button>

                  {/* Update button */}
                  <Button
                    variant="primary ms-2"
                    onClick={() => {
                      setRowID(data[id]);
                      handleOpenEdit();
                    }}
                  >
                    <FaEdit />
                  </Button>

                  {/** Delete */}
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={(e) =>
                      fireDB.collection("gratitudes").doc(data[id].id).delete()
                    }
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        {/** MODAL - CREATE */}
        <Modal show={showCreate} onHide={handleCloseCreate}>
          {/** Modal header */}
          <Modal.Header closeButton>
            <Modal.Title>Create</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/** Form */}
            <ContactListForm setShowCreate={setShowCreate} />
          </Modal.Body>
        </Modal>

        {/** If rowID exist */}
        {rowID && (
          <>
            {/** MODAL - EDIT */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
              {/** Modal header */}
              <Modal.Header closeButton>
                <Modal.Title>Edit {rowID.name}</Modal.Title>
              </Modal.Header>
              {/** Modal body */}
              <Modal.Body>
                <ContactListForm updateID={rowID} setShowEdit={setShowEdit} />
              </Modal.Body>
            </Modal>

            {/** MODAL - VIEW */}
            <Modal show={showView} onHide={handleCloseView}>
              {/** Modal header */}
              <Modal.Header closeButton>
                <Modal.Title>View {rowID.name}</Modal.Title>
              </Modal.Header>
              {/** Modal body */}
              <Modal.Body>
                <p>{rowID.name}</p>
              </Modal.Body>
            </Modal>
          </>
        )}
      </Table>
    </>
  );
}

// Export
export default ContactListTable;
