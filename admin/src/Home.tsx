import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="py-5 bg-info-subtle min-vh-100">
        <div className="container-md">
          <div className="row">
            <div className="admin_table col">
              <div className="row g-0 g-md-5">
                <div className="col-md-6">
                  <Link
                    to="/admin/user"
                    className="w-100 gradient--0 gradient start-color end-color  mt-4 mt-md-0 "
                  >
                    <div className="admin_panel border text-light">
                      <div className="admin_title">
                        <div className="admin_header">
                          <i className="fa-solid fa-user" />
                        </div>
                        User
                      </div>
                      <div className="fs-2 fs-md-1 pe-5 text-end">
                        people joined
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link
                    to="/admin/game"
                    className="w-100 gradient--5 gradient start-color end-color  mt-4 mt-md-0 text-light"
                  >
                    <div className="admin_panel border text-light">
                      <div className="admin_title">
                        <div className="admin_header">
                          <i className="fa-solid fa-trophy" />
                        </div>
                        Games
                      </div>
                      <div className="fs-2 fs-md-1 pe-5 text-end">
                        + hot games
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link
                    to="/admin.benefit"
                    className="w-100 gradient--9 gradient start-color end-color mt-4 mt-md-0"
                  >
                    <div className="admin_panel border text-light">
                      <div className="admin_title">
                        <div className="admin_header">
                          <i className="fa-solid fa-money-check" />
                        </div>
                        Benefit
                      </div>
                      <div className="fs-2 fs-md-1 pe-5 text-end">+₫</div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link
                    to="/admin/genre"
                    className="w-100 gradient--14 gradient start-color end-color  mt-4 mt-md-0 text-light"
                  >
                    <div className="admin_panel border text-light">
                      <div className="admin_title">
                        <div className="admin_header">
                          <i className="fa-solid fa-bars-staggered" />
                        </div>
                        Genre
                      </div>
                      <div className="fs-2 fs-md-1 pe-5 text-end">+ genres</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
