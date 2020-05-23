import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer'
import TestHooks from '../components/TestHooks'
import '../styles/app.scss';

const App = () => { 
    //se debe inicializar el estado de cada objeto como un arreglo, si no, regresa un error con mensaje de 'undefined'
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    useEffect(()=> {
        fetch("http://localhost:3000/initalState")
        .then(response => response.json())
        .then(data => setVideos(data));
    },[]);
console.log(videos)
return (
    <div className="App">
        <Header/>
        <Search/>
        { videos.mylist.lenght > 0 &&
            <Categories title="My List">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
        }
        <Categories title="Trends">
            <Carousel>
                { videos.trends !== 0 && videos.trends.map(item=>
                    <CarouselItem key={item.id} {...item}/>
                    //Destructuramos item y asignamos los valores desde el componente CarouselItem.jsx
                )}
            </Carousel>
        </Categories>
        <TestHooks/>
        <Footer/>
    </div>
);
};
export default App;