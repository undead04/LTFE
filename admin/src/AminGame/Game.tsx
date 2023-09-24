import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../component/Input";
const Game = () => {
  const [showModel, setShowModel] = useState(false);

  const handleCloseModel = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);

  const handleShowEditPage = () => {
    handleShowModel();
  };
  return (
    <>
      <section className="py-5 bg-info-subtle min-vh-100">
        <div className="container-md">
          <div className="row">
            <div className="admin_table col">
              <div className="d-flex align-items-center justify-content-between text-end">
                <div>
                  <h1 className="text-dark display-2">Games</h1>
                </div>
                <button
                  onClick={handleShowEditPage}
                  className="btn btn-lg btn-submit btn-info text-light rounded-0"
                >
                  Add new game
                </button>
              </div>
              <div className="mt-3 mx-auto table-responsive">
                <table className="table table-striped table-info table-hover table-bordered">
                  <colgroup>
                    <col style={{ width: "5%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "25%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Production</th>
                      <th scope="col">Price</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr>
                      <th scope="row"></th>
                      <td />
                      <td />
                      <td>₫</td>
                      <td className="text-nowrap">
                        <button
                          className="btn btn-primary flex-grow-1"
                          onClick={() => handleShowEditPage()}
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
      <Modal show={showModel} onHide={handleCloseModel} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            method="post"
            className="mx-auto data_form"
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="_token"
              defaultValue="uPhQT4fY3QF3AUSkSeMoyeWQ0seQq6eACPsm2h6g"
            />{" "}
            <h1 className="mb-3">
              <span className="fa-solid fa-gamepad" />{" "}
            </h1>
            <Input label="Name" name="name" type="text" />
            <Input label="Developer" name="developer" type="text" />
            <Input label="Publisher" name="publisher" type="text" />
            <div className="form-group">
              <label className="form-label">
                Genre<sup className="text-danger fw-bold">*</sup>:
              </label>
              <div className="flex-grow-1">
                <select
                  className="select_item form-select"
                  name="genre[]"
                  size={4}
                >
                  <option value={-1} disabled className="d-none">
                    Genre
                  </option>
                  <option value={1}>Action</option>
                  <option value={2}>Action-advanture</option>
                  <option value={3}>Adventure</option>
                  <option value={4}>Role-playing</option>
                  <option value={5}>Simulation</option>
                  <option value={6}>Strategy</option>
                  <option value={7}>Sports</option>
                  <option value={8}>MMO</option>
                  <option value={9}>Card Game</option>
                  <option value={11}>Horror</option>
                </select>
              </div>
            </div>
            <Input label="Price" name="price" type="number" step={0.01} />
            <Input label="Discount" name="discount" type="number" />
            <Input label="Image Main" name="imageMain" type="file" />
            <Input label="Image Paner" name="imagePaner" type="file" />
            <Input label="Image Logo" name="imageLogo" type="file" />
            <Input label="Description" name="description" row={3} />
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

export default Game;
