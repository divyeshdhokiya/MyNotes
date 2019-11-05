import * as React from "react";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <div style={{ width: "70%" }}>
            My Notes{" "}
            <small>
              <Link to="/">All</Link>
            </small>
          </div>
        </header>
        {/* <div style={{ float: "right", width: "30%" }}>
                <ul>
                  <li>
                    <Link to="/">All</Link>
                  </li>
                  <li>
                    <Link to="/completed">Completed</Link>
                  </li>
                  <li>
                    <Link to="/pending">Pending</Link>
                  </li>
                </ul>
              </div> */}
      </div>
    );
  }
}
