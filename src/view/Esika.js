import React, { Component, Fragment } from 'react';
import Icon from '../assets/icon/icon.png'
import Header from './Header'
import './Esika.css';

class Esika extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      image: props.data.catalogue[0].image,
      coordenadas: props.data.catalogue[0].products
    }
  }

  nextSlider = () => {
    this.setState({
      index: (this.state.index + 1),
      image: this.props.data.catalogue[(this.state.index + 1)].image,
      coordenadas: this.props.data.catalogue[(this.state.index + 1)].products
    })
  }

    prevSlider = () => {
        this.setState({
          index: (this.state.index - 1),
          image: this.props.data.catalogue[(this.state.index - 1)].image,
          coordenadas: this.props.data.catalogue[(this.state.index - 1)].products
        })
      }
      render() {
        const style = (coordenada) => ({
          position: "absolute",
          cursor: "pointer",
          left: coordenada.left,
          top: coordenada.top,
          width: coordenada.width,
          height: coordenada.height,
          tabIndex: coordenada.zindex
        });
    
        return (
          <Fragment>
            <Header itemsCount={this.props.itemsCount} />
            <section>
              <div className="slider-wrapper">
                <div className="slider">
                  <img key={this.state.image} src={this.state.image} />
                </div>
                {this.state.coordenadas.map((obj, index) => {
    
                  return (
                    <div key={index} style={style(obj.style)} className="contentCoordenadas">
                      <button type="button" className="pulse-button" data-toggle="modal" data-target={`#exampleModal${index}`}>

                      </button>
                      <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">{obj.name}</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                            <div>
                              {
                                obj.hasOwnProperty("type")
                                ? (<div>
                                  <p>{obj.type}</p>
                                </div>) : null
                              }
                              
                              </div>
                              <div>
                              {
                                obj.hasOwnProperty("description")
                                ? (<div>
                                  <p>{obj.description}</p>
                                </div>) : null
                              }
                              
                              </div>
              
                              <img src={obj.image} className="imgModal" />
                            </div>
                            <div className="modal-footer">
                              <button
                                data-dismiss="modal"
                                aria-label="Close"
                                type="button"
                                className="btn btn-dark btn-width"
                                onClick={() => this.props.addItem({
                                  title: obj.name,
                                  img: obj.image,
                                  webPrice: obj.webPrice,
                                  consultantPrice: obj.consultantPrice,
                                  count: obj.count,
                                  id: obj.name
                                })}>Agregar a Bolsa</button>
                            </div>
                            {
                              obj.hasOwnProperty("video")
                              ? (<div>
                                <hr />
                                <div>
                                <video src={obj.video} autoplay poster="posterimage.jpg">
                                </video>
                                </div>
                              </div>) : null
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
              </div >
              <div className="buttons-wrapper">
                <button className="prev-button" onClick={() => this.prevSlider()} disabled={this.state.index === 0}></button>
                <button className="next-button" onClick={() => this.nextSlider()} disabled={this.state.index === this.props.data.catalogue.length-1}></button>
              </div>
            </section >
          </Fragment>
        )
      }
    }
    
    export default Esika
    
