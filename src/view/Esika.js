import React,{Component} from 'react';

class Esika extends Component{
    constructor(){
        super();
        this.state ={
            image:[],
            activeIndex : 1,
            left:0
        }
    }

    nextSlider = () =>{

    }
    prevSlider = () =>{
        
    }
    render(){
        return(
            <section>
                <div>
                    <h3>Descubre Nuestro</h3>
                    <h4>Catálogo</h4>
                    <p>Campaña 17</p>
                </div>
                <div className="slide-wrapper"> 
                    <div className="slider">
                    HOLAAAA
                    </div>
                </div>
                <div className="buttons">
                    <button></button>
                    <button></button>
                </div>
                <div>

                </div>
            </section>
        )
    }
}

export default Esika