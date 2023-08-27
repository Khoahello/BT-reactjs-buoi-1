import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
<header className="py-5 text-left">
  <div className="container px-lg-5">
    <div className="p-4 p-lg-5 bg-light rounded-3">
      <div className="m-2 m-lg-3">
        <h1 className="display-3 fw-bold text-left font-weight-light text-3xl">A Warm Welcome!</h1>
        <p className="fs-4 text-left">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
        <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
      </div>
    </div>
  </div>
</header>

    )
  }
}
