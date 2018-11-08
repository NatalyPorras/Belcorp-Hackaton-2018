import React,{Component} from 'react';
import './LBel.css';
class Esika extends Component{
    constructor(props){
        super(props);
        this.state ={
            index : 0,
            image : props.data.catalogue[0].image,
            coordenadas: props.data.catalogue[0].products
        }
        console.log(this.state);
        
    }

    nextSlider = () =>{
        console.log(this.state)
        this.setState({
          index : this.state.index + 1,
          image : this.props.data.catalogue[this.state.index].image,
          coordenadas: this.props.data.catalogue[this.state.index].products
        })

    }
    prevSlider = () =>{
        // const newIndex = ;
        this.setState({
          index : this.state.index - 1,
          image : this.props.data.catalogue[this.state.index].image,
          coordenadas: this.props.data.catalogue[this.state.index].products
        })
    }

    handleClick  = () =>{
        console.log("clicklie");
        
    }
   
    render(){
        console.log(this.state.coordenadas)


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
            <section>
                <div>
                    <h3>Catálogo C-17</h3>
                    <p>Descubre nuestras novedades</p>
                </div>
                <div className="slider-wrapper"> 
                    <div className="slider">    
                      <img key={this.state.image} src={this.state.image}/>   
                    </div>
                    {this.state.coordenadas.map((obj,index)=>{
                        return (
                        <div key={index} style={style(obj.style)}>
                            <button type="button" className="pulse-button" data-toggle="modal" data-target={`#exampleModal${index}`}>

                            </button>
                            <div className="modal fade" id={`exampleModal${index}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <span>{obj.name}</span>
                                    <img src={obj.image} />
                                    <span>{obj.webPrice}</span>
                                    <span>{obj.consultantPrice}</span>
                                    <span>{obj.regularPrice}</span>
                                    <button> + </button>
                                    <button> - </button>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="buttons-wrapper">
                    <button className="prev-button" onClick={()=>this.prevSlider()} disabled={this.state.index === 0}></button>
                    <button className="next-button" onClick={()=>this.nextSlider()} disabled={this.state.index === this.props.data.catalogue.length}></button>
                </div> 
                <div>

                </div>
            </section>
        )
    }
}

export default Esika
