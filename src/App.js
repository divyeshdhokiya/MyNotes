import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch } from "react-router";

import reducers from "./reducers";
import "./App.css";
import EditNoteContainer from "./EditNoteContainer";
import NotesContainer from "./NotesContainer";

const initialState = {
  hasError: false,
  notes: [
    {
      title: "First Note",
      detail: "First note of an assignment"
    }
  ]
};

let store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const unsubscribe = store.subscribe(() => console.log(store.getState()));
class App extends Component {
  // state = store.getState();

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }
  // componentDidCatch = (error, info) => {
  //   console.log(
  //     `Error caught in componentDidCatch: ${error}, info: ${JSON.stringify(
  //       info
  //     )}`
  //   );
  //   return { hasError: true };
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(
  //     `preProps: ${JSON.stringify(prevProps)}, prevState: ${JSON.stringify(
  //       prevState
  //     )}`
  //   );
  // }

  render() {
    // if (this.state.hasError) {
    //   return <h1>Something went wrong.</h1>;
    // }
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={NotesContainer} />
            <Route path="/edit/:index" exact component={EditNoteContainer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
