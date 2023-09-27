import React, { useState, useEffect } from "react";
import benefitServe, { IBenefi } from "./services/benefitServe";
const Benefit = () => {
  const [list, setList] = useState<IBenefi[]>([]);
  const loadData = () => {
    benefitServe.list().then((res) => {
      setList(res.data.orders);
    });
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
              <div>
                <div className="d-flex align-items-center justify-content-between text-end">
                  <div>
                    <h1 className="text-dark display-2">Benefit</h1>
                  </div>
                </div>
                <div className="mt-3 mx-auto table-responsive">
                  <table className="table table-info table-hover table-bordered">
                    <colgroup>
                      <col style={{ width: "10%" }} />
                      <col style={{ width: "45%" }} />
                      <col style={{ width: "25%" }} />
                      <col style={{ width: "20%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Games</th>
                        <th scope="col">Profit</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      {list.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{item.id}</th>
                          <td>{item.name_Game}</td>
                          <td className="text-success">+₫ {item.price}</td>
                          <td>{item.created_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
