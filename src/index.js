import MyMenu from "./scripts/MyMenu"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import React from "react"
import ReactDOM from "react-dom"

if (document.querySelector("#MyMenu")) {
  ReactDOM.render(<MyMenu />, document.querySelector("#MyMenu"))
}

if (document.querySelector("#render-react-example-here")) {
  ReactDOM.render(<ExampleReactComponent />, document.querySelector("#render-react-example-here"))
}
