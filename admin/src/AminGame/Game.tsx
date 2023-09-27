import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "../component/Input";
import gameServics, {
  IGameAdd,
  ITypeAdd,
  gameMessage,
} from "../services/gameServics";
import { toast } from "react-toastify";

const Game = () => {
  const [showModel, setShowModel] = useState(false);
  const [message, setMessage] = useState<gameMessage>();
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
  });
  const [imageMain, setImageMain] = useState<any>("");
  const [imageLogo, setImageLogo] = useState();
  const [imagePaner, setImagePaner] = useState();
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

    console.log(game);

    setGame({
      ...game,
      [e.currentTarget.name]: e.currentTarget.value,
      genre: genre,
    });
  };
  const handleSave = (id: number) => {
    const fData = new FormData();
    fData.append("image", imageMain[0]);
    if (Number(id) === 0) {
      gameServics.add(game).then((res) => {
        console.log(res.message);
        if (res.errorCode === 0) {
          console.log(res);
          handleCloseModel();
          toast.success(res.message);
          loadData();
        } else {
          setMessage(JSON.parse(decodeURIComponent(res.message)));
        }
      });
    } else {
      gameServics.update(id, game).then((res) => {
        if (res.errorCode === 0) {
          handleCloseModel();
          toast.success(res.message);
          loadData();
        } else {
          setMessage(JSON.parse(decodeURIComponent(res.message)));
        }
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  const handleDelete = (e: any, id: number) => {
    e.preventDefault();

    gameServics.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.success(res.message);
      } else {
        toast.error(res.message);
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
          <form className="mx-auto data_form">
            <h1 className="mb-3">
              <span className="fa-solid fa-gamepad" />{" "}
            </h1>
            <Input
              label="Name"
              name="name_Game"
              type="text"
              onChange={handleChange}
              message={message?.name_Game}
              defaultValue={game.name_Game}
            />

            <Input
              label="Developer"
              name="developer"
              type="text"
              onChange={handleChange}
              message={message?.developer}
              defaultValue={game.developer}
            />
            <Input
              label="Publisher"
              name="publisher"
              type="text"
              onChange={handleChange}
              message={message?.publisher}
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
                <span className="text-danger">{message?.genre}</span>
              </div>
            </div>

            <Input
              label="Price"
              name="price"
              type="number"
              step={0.01}
              onChange={handleChange}
              defaultValue={game.price}
              message={message?.price}
            />
            <Input
              label="Discount"
              name="discount"
              type="number"
              onChange={handleChange}
              defaultValue={game.discount}
              message={message?.discount}
            />
            <Input
              label="Image Main"
              name="image"
              type="file"
              onChange={(e) => setImageMain(e.target.files)}
              message={message?.imageMain}
            />
            <Input
              label="Image Paner"
              name="imagePaner"
              type="file"
              onChange={handleChange}
            />
            <Input
              label="Image Logo"
              name="imageLogo"
              type="file"
              onChange={handleChange}
            />

            <Input
              label="Description"
              name="description"
              row={3}
              onChange={handleChange}
              message={message?.description}
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
