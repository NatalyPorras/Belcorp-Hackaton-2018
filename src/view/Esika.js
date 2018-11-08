import React,{Component , Fragment} from 'react';

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
    console.log(this.state);
  }

  nextSlider = () => {
    console.log(this.state)
    this.setState({
      index: (this.state.index + 1),
      image: this.props.data.catalogue[(this.state.index + 1)].image,
      coordenadas: this.props.data.catalogue[(this.state.index + 1)].products
    })
  }

    handleClick  = () =>{
        console.log("clicklie");
        
    }
    prevSlider = () => {
        // const newIndex = ;
        this.setState({
          index: (this.state.index - 1),
          image: this.props.data.catalogue[(this.state.index - 1)].image,
          coordenadas: this.props.data.catalogue[(this.state.index - 1)].products
        })
      }
   
    render(){
        console.log(this.state)
        console.log(this.props.data.catalogue.length);
        
        const style = (coordenada) => ({
            position: "absolute",
            cursor:"pointer",
            left: coordenada.left,
            top: coordenada.top,
            width: coordenada.width,
            height: coordenada.height,
            tabIndex: coordenada.zindex
        });
        return(
            <Fragment>
            <Header />
            <section className="contentCatalogo">
                <div className="container slider-wrapper"> 
                    <div className="row slider">    
                      <img key={this.state.image} src={this.state.image}/>   
                    </div>
                    {this.state.coordenadas.map((obj,index)=>{
                        return (
                        <div key={index} style={style(obj.style)} className="contentCoordenadas">
                            <button type="button" className="pulse-button" data-toggle="modal" data-target={`#exampleModal${index}`}>
                </button>
                <div className="modal fade" id={`exampleModal${index}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{obj.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <img src={obj.image} />
                        <i className="fas fa-minus border p-2" onClick={this.props.reduceCount}></i>
                        <span className="p-2">{obj.count}</span>
                        <i className="fas fa-plus border p-2" onClick={() => this.addCount(obj.count)}></i>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => this.props.addItem({
                            title: obj.name,
                            img: obj.image,
                            webPrice: obj.webPrice,
                            consultantPrice: obj.consultantPrice
                          })}>Agregar a Bolsa</button>
                      </div>
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
          <button className="next-button" onClick={() => this.nextSlider()} disabled={this.state.index === (this.props.data.catalogue.length - 1)}></button>
        </div>
      </section >
      </Fragment>
    )
  }
}

export default Esika
