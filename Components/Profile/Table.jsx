import React from "react";

const Table = ({ tableData, title }) => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="send-money-form transaction-log">
          <div className="form-text">
            <h4 className="form-top">
              {tableData && tableData.length === 0
                ? "No Tokens Created"
                : `${title}`}
            </h4>

            {tableData && tableData.length > 0 ? (
              <div className="form-inner table-inner">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction Hash</th>
                      <th>Token Address</th>
                      <th>Supply</th>
                      <th>Name</th>
                      <th>Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map((token, i) => (
                      <tr key={i+1}>
                        <td>{token.tokenCreatedDate}</td>
                        <td
                          onClick={() =>
                            navigator.clipboard.writeText( 
                              token.tokenTransactionHash
                            )
                          }
                        >
                          {token.tokenTransactionHash.slice(0, 15)}...
                        </td>
                        <td
                          onClick={() =>
                            navigator.clipboard.writeText(token.tokenAddress)
                          }
                        >
                          {token.tokenAddress.slice(0, 15)}...
                        </td>
                        <td>{token.tokenSupply}</td>
                        <td>{token.tokenName}</td>
                        <td>{token.tokenSymbol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
