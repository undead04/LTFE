import React from "react";
const User = () => {
    return ( <>
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
            <colgroup><col style={{width: '10%'}} />
              <col style={{width: '30%'}} />
              <col style={{width: '30%'}} />
              <col style={{width: '30%'}} />
            </colgroup><thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div></section>

    
    </> );
}
 
export default User;