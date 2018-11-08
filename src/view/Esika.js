import React,{Component} from 'react';
import './LBel.css';
class Esika extends Component{
    constructor(props){
        super(props);
        this.state ={
            index : 0,
            image : props.data.catalogue[0].image,
            coordenadas: props.data.catalogue[0].links.map(item => console.log(item)||
            ({

                left:item.style.left,
                top:item.style.top,
                width:item.style.width,
                height:item.style.height,
                zindex:item.style.zindex
            }))
        }
        console.log(this.state);
        
    }
//    loadData(){
//         this.props.data.catalogue.map(image=>{
//             console.log(image);
            
//             this.state.image.push({
//                     index:image.index,
//                     id:image.id,
//                     image:image.image,
//                     links:image.links
//                 }
//             )
//             this.setState({image})
//         })
       
//     }
    nextSlider = () =>{
        // const nwIndex = ;
        console.log(this.state)
        this.setState({
          index : this.state.index + 1,
          image : this.props.data.catalogue[this.state.index].image
        })

    }
    prevSlider = () =>{
        // const newIndex = ;
        this.setState({
          property: this.props.data.catalogue[this.state.property.index-1]
        })
    }

    handleClick  = () =>{
        console.log("clicklie");
        
    }
    // componentWillMount(){
    //     this.loadData()
    // }
    render(){
        console.log(this.props.data.catalogue)
        console.log(this.state.index)
        console.log(this.state.image)
        console.log(this.state.coordenadas);
        
        const style = (coordenada) => ({
            position: "absolute",
            cursor:"pointer",
            left: coordenada.left,
            top: coordenada.top,
            width: coordenada.width,
            height: coordenada.height,
            zIndex: coordenada.zindex
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
                              { 
                              this.state.coordenadas.map((coordenada,index)=>{

                               return(<a key={index} onClick={this.handleClick} title="" style={style(coordenada)} />)

                              })                     
                        }
                    </div>
                </div>
                <div className="buttons-wrapper">
                    <button className="prev-button" onClick={()=>this.prevSlider()} ></button>
                    <button className="next-button" onClick={()=>this.nextSlider()} disabled={this.state.index === this.props.data.catalogue.length  }></button>
                </div> 
                <div>

                </div>
            </section>
        )
    }
}

export default Esika
