import React from "react";

const TableTwo = ({ tableData, title }) => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="send-money-form transaction-log">
          <div className="form-text">
            <h4 className="form-top">
              {" "}
              {tableData.length == 0 ? "No Donations given" : `${title}`}{" "}
            </h4>

            {tableData.length == 0 ? (
              ""
            ) : (
              <div className="form-inner table-inner">
                <table>
                  <thead>
                    <tr>
                      <th>Donation ID</th>
                      <th>Doner</th>
                      <th>Fund</th>
                    </tr>
                    <>
                      {tableData.map((token, i) => (
                        <tr key={i + 1}>
                          <td>#{token.donationID}</td>
                          <td>{token.donor.slice(0, 55)}...</td>
                          <td>{token.fund} Sepolia</td>
                        </tr>
                      ))}
                    </>
                  </thead>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
