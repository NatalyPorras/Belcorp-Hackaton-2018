import React,{Component} from 'react';

class Cyzone extends Component{
    constructor(){
        super();
        this.state = {
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
                    <h3>Catálogo Virtual</h3>
                    <p>[Mira lo último]</p>
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

export default Cyzone