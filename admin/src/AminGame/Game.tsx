import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../component/Input";
import gameServics, { IGameAdd, ITypeAdd } from "../services/gameServics";

const Game = () => {
  const [showModel, setShowModel] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [listGame, setListGame] = useState<IGameAdd[]>([]);
  const [listType, setListType] = useState<ITypeAdd[]>([]);
  const [genre, setGenre] = useState<string[]>([]);
  const [game, setGame] = useState<IGameAdd>({
    id: 0,
    name_Game: "",
    description: "",
    price: 0,
    genre: [],
    discount: 0,
    publisher: "",
    developer: "",
    imageMain: "",
    imagePaner: "",
    imageLogo: "",
  });
  const handleCloseModel = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);
  const loadData = () => {
    gameServics.list().then((res) => {
      setListGame(res.data.games);
    });
    gameServics.listType().then((res) => {
      setListType(res.data.typeGame);
    });
  };
  const handleShowEditPage = (e: any, id: number) => {
    if (e) e.preventDefault();
    if (id > 0) {
      gameServics.get(Number(id)).then((res) => {
        setGame(res.data.games);
        handleShowModel();
      });
    } else {
      setGame({
        id: 0,
        name_Game: "",
        description: "",
        price: 0,
        genre: [],
        discount: 0,
        publisher: "",
        developer: "",
        imageMain: "",
        imagePaner: "",
        imageLogo: "",
      });
      handleShowModel();
    }
  };

  const handleChange = (
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (e.target instanceof HTMLSelectElement) {
      const selectedValues = Array.from(e.target.options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setGenre(selectedValues);
    }

    setGame({
      ...game,
      [e.currentTarget.name]: e.currentTarget.value,
      genre: genre,
    });
  };
  const handleSave = (id: number) => {
    if (Number(id) === 0) {
      gameServics.add(game).then((res) => {
        if (res.errorCode === 0) {
          handleCloseModel();
          loadData();
        }
      });
    } else {
      gameServics.update(id, game).then((res) => {
        handleCloseModel();
        loadData();
      });
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleDelete = (e: any, id: number) => {
    e.preventDefault();
    console.log(id);
    gameServics.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
      }
    });
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
                  onClick={(e) => handleShowEditPage(e, 0)}
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
                    {listGame.map((game, index) => (
                      <tr key={index}>
                        <th scope="row">{game.id}</th>
                        <td>{game.name_Game}</td>
                        <td>{game.description}</td>
                        <td>₫ {game.price}</td>
                        <td className="text-nowrap">
                          <button
                            className="btn btn-primary flex-grow-1"
                            onClick={(e) => handleShowEditPage(e, game.id)}
                          >
                            <i className="fa-solid fa-pen-to-square" />
                          </button>

                          <button
                            className="btn btn-danger ms-2 flex-grow-1"
                            onClick={(e) => handleDelete(e, game.id)}
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
            <h1 className="mb-3">
              <span className="fa-solid fa-gamepad" />{" "}
            </h1>
            <Input
              label="Name"
              name="name_Game"
              type="text"
              onChange={handleChange}
              defaultValue={game.name_Game}
            />
            <Input
              label="Developer"
              name="developer"
              type="text"
              onChange={handleChange}
              defaultValue={game.developer}
            />
            <Input
              label="Publisher"
              name="publisher"
              type="text"
              onChange={handleChange}
              defaultValue={game.publisher}
            />
            <div className="form-group">
              <label className="form-label">
                Genre<sup className="text-danger fw-bold">*</sup>:
              </label>
              <div className="flex-grow-1">
                <select
                  className="select_item form-select"
                  name="genre"
                  size={4}
                  multiple={true}
                  onChange={handleChange}
                >
                  <option value={-1} disabled className="d-none">
                    Genre
                  </option>
                  {listType.map((type, index) => (
                    <option value={type.id} key={index}>
                      {type.typeNames}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Input
              label="Price"
              name="price"
              type="number"
              step={0.01}
              onChange={handleChange}
              defaultValue={game.price}
            />
            <Input
              label="Discount"
              name="discount"
              type="number"
              onChange={handleChange}
              defaultValue={game.discount}
            />
            <Input
              label="Image Main"
              name="imageMain"
              type="file"
              onChange={handleChange}
              defaultValue={game.imageMain}
            />
            <Input
              label="Image Paner"
              name="imagePaner"
              type="file"
              onChange={handleChange}
              defaultValue={game.imagePaner}
            />
            <Input
              label="Image Logo"
              name="imageLogo"
              type="file"
              onChange={handleChange}
              defaultValue={game.imageLogo}
            />

            <Input
              label="Description"
              name="description"
              row={3}
              onChange={handleChange}
              defaultValue={game.description}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleSave(game.id)}
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

export default Game;
