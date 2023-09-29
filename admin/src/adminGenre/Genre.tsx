import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../component/Input";
import genreServics, { IGenre, IMessage } from "../services/genreServics";
import { toast } from "react-toastify";

const Genre = () => {
  const [showModel, setShowModel] = useState(false);
  const handleCloseModel = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);
  const [listGenre, setListGenre] = useState<IGenre[]>([]);
  const [genre, setGenre] = useState<IGenre>({
    id: 0,
    typeNames: "",
  });
  const [message, setMessage] = useState<IMessage>();
  const handleShowPage = (e: any, id: number) => {
    if (e) e.preventDefault();
    if (id > 0) {
      genreServics.get(Number(id)).then((res) => setGenre(res.data.genres));
    } else {
      setGenre({ id: 0, typeNames: "" });
    }
    console.log(genre, id);
    handleShowModel();
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setGenre({
      ...genre,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSave = (id: number) => {
    if (id > 0) {
      genreServics.update(id, genre).then((res) => {
        if (res.errorCode === 0) {
          handleCloseModel();
          loadData();
          toast.success(res.message);
        } else {
          setMessage(JSON.parse(decodeURIComponent(res.message)));
        }
      });
    } else {
      genreServics.add(genre).then((res) => {
        if (res.errorCode === 0) {
          handleCloseModel();
          loadData();
          toast.success(res.message);
        } else {
          setMessage(JSON.parse(decodeURIComponent(res.message)));
        }
      });
    }
  };
  const handleDelete = (e: any, id: number) => {
    e.preventDefault();

    genreServics.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.success(res.message);
      }
    });
  };
  const loadData = () => {
    genreServics.list().then((res) => setListGenre(res.data.genres));
  };
  useEffect(() => {
    loadData();
  }, []);
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
                  onClick={(e) => handleShowPage(e, 0)}
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
                    {listGenre.length === 0 ? (
                      <tr>
                        <th colSpan={2}>Chưa có dữ liệu</th>
                      </tr>
                    ) : (
                      ""
                    )}
                    {listGenre.map((item, index) => (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.typeNames}</td>
                        <td className="text-nowrap">
                          <button
                            className="btn btn-primary flex-grow-1"
                            onClick={(e) => handleShowPage(e, item.id)}
                          >
                            <i className="fa-solid fa-pen-to-square" />
                          </button>
                          <button
                            className="btn btn-danger ms-2 flex-grow-1"
                            onClick={(e) => handleDelete(e, item.id)}
                          >
                            <i className="fa-solid fa-trash-can" />
                          </button>
                        </td>
                      </tr>
                    ))}
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
          <form>
            <Input
              type="text"
              label="Type Name"
              name="typeNames"
              onChange={handleChange}
              value={genre.typeNames}
              message={message?.typeNames}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleSave(genre.id)}
          >
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
