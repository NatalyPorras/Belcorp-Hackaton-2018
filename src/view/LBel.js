import React,{Component} from 'react';
import './LBel.css';
class Lbel extends Component{
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
                    <h3>Catálogo C-17</h3>
                    <p>Descubre nuestras novedades</p>
                </div>
                <div className="slider-wrapper"> 
                    <div className="slider">
                    HOLAAAA
                    </div>
                </div>
                <div className="buttons-wrapper">
                    <button className="prev-button"></button>
                    <button className="next-button"></button>
                </div> 
                <div>

                </div>
            </section>
        )
    }
}

export default Lbel
