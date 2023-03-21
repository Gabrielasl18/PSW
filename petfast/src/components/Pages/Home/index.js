import './index.css';
import blueIcon from '../../../assets/blueIcon.png';
import rabbit from '../../../assets/rabbit.png';
import dog from '../../../assets/dog.png';
import bird from '../../../assets/bird.png';
import cat from '../../../assets/cat.png';
import commercial from '../../../assets/commercial.png';
import Menu from '../menu/index.js';
import petshop1 from "../../../assets/petshop1.png";
import petshop2 from "../../../assets/petshop2.png";
import petshop3 from "../../../assets/petshop3.png";

const Home = () => {
return (
    <div className="App">
        <img src={blueIcon} alt="logo" className="img-blueIcon"/>
        <div className="search">
            <input type="text" placeholder='Busque por item ou loja' className="input-search" maxlength="100"/>
        </div>

        <div className="categories">
            <img src={rabbit} alt="coelho" className="img-rabbit"/>
            <img src={dog} alt="dog" className="img-dog"/>
            <img src={bird} alt="bird" className="img-bird"/>
            <img src={cat} alt="cat" className="img-cat"/>
        </div>
        <div className="business">
            <img src={commercial} alt="commercial" className="img-commercial"/>
        </div>
        <div class="slide-show" >
            <ul class="slides-list" >
                <li class="slide" >
                    <img src={petshop3} alt="animal-1"/>
                </li>
                <li class="slide" >
                    <img src={petshop1}  alt="animal-2"/>
                </li>
                <li class="slide" >
                    <img src={petshop2}  alt="animal-3"/>
                </li>
                <li class="slide" >
                    <img src={petshop3} alt="animal-4"/>
                </li>
            </ul>
        </div>
        <input type="radio" class="slide-controller" name="slide" checked />
        <input type="radio" class="slide-controller" name="slide" />
        <input type="radio" class="slide-controller" name="slide" />
        <input type="radio" class="slide-controller" name="slide" />
        <Menu />
    </div>  
    );
}

export default Home;
