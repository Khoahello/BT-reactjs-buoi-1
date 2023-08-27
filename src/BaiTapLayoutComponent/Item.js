import React, { Component } from 'react'
import image from '../assets/images/image.png'

export default class Item extends Component {
  render() {
    return (
<section className="pt-4">
  <div className="container px-lg-5">
    {/* Page Features*/}
    <div className="row gx-lg-5">
      <div className="col-lg-3 col-xxl-4 mb-5">
        <div className="card" style={{minHeight: "500px"}}>
          <img className="card-img-top" src={image} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            <a href="#" className="btn btn-primary" style={{marginTop: "3rem"}}>Find Out More!</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-xxl-4 mb-5">
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet. consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpanatus architecto</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-xxl-4 mb-5">
        <div className="card" style={{minHeight: "500px"}}>
          <img className="card-img-top" src={image} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            <a href="#" className="btn btn-primary" style={{marginTop: "3rem"}}>Find Out More!</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-xxl-4 mb-5">
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit amet. consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpanatus architecto</p>
            <a href="#" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }
}
