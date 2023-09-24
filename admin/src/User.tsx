import React, { useEffect, useState } from "react";
import userServics, { IUser } from "./services/userServics";
const User = () => {
  const [user, setUser] = useState<IUser[]>([]);
  const loadData = () => {
    userServics.list().then((res) => setUser(res.data.users));
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
              <div className="d-flex align-items-center justify-content-between text-end">
                <div>
                  <h1 className="text-dark display-2">User</h1>
                </div>
              </div>
              <div className="mt-3 mx-auto table-responsive">
                <table className="table table-info table-hover table-bordered">
                  <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "30%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">User ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {user.map((user, index) => (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
