import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../component/Input";
const Genre = () => {
  const [showModel, setShowModel] = useState(false);

  const handleCloseModel = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);
  const handleShowPage = () => {
    handleShowModel();
  };
  return (
    <>
      <section className="py-5 bg-info-subtle min-vh-100">
        <div className="container-md">
          <div className="row">
            <div className="admin_table col">
              <div className="w-100 d-flex align-items-center text-end">
                <div>
                  <h1 className="text-dark display-2">Genre</h1>
                </div>
                <button
                  onClick={() => handleShowPage()}
                  className="btn btn-lg btn-submit btn-info text-light rounded-0"
                >
                  Add new genres
                </button>
              </div>
              <div className="w-100 mt-3 mx-auto table-responsive">
                <table className="table table-striped table-bordered table-info table-hover">
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "80%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr>
                      <th colSpan={2}>Chưa có dữ liệu</th>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td />
                      <td className="text-nowrap">
                        <button
                          className="btn btn-primary flex-grow-1"
                          onClick={() => handleShowPage()}
                        >
                          <i className="fa-solid fa-pen-to-square" />
                        </button>
                        <button className="btn btn-danger ms-2 flex-grow-1">
                          <i className="fa-solid fa-trash-can" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showModel} onHide={handleCloseModel}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="mb-3">
              <i className="fa-solid fa-bars-staggered" />
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form method="post">
            <Input type="text" label="Type Name" name="type" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="lg" onClick={handleCloseModel}>
            Submit
          </Button>
          <Button variant="danger" size="lg" onClick={handleCloseModel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Genre;
