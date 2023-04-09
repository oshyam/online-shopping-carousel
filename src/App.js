import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import ProductCard from './Components/Product';
import Verticlcar from './Components/Verticlcar'
// import Carousel from './Components/Carousel';


function App() {


  const imageUrls = [
    "https://www.fnp.com/images/pr/l/v20221205202051/black-forest-cake-half-kg_3.jpg",
    "https://www.fnp.com/images/pr/l/v20221205202051/black-forest-cake-half-kg_4.jpg",
    "https://www.fnp.com/images/pr/l/v20221205202052/black-forest-cake-half-kg_5.jpg",
  ];


  return (
    <div className="App">
      {/* <ProductCard/> */}
      {/* <Sidebar/> */}
      {/* <Verticlcar/> */}
      {/* <Verticlcar/> */}
      <Verticlcar imageUrls={imageUrls} />


        <ProductCard
          imageUrl="https://www.fnp.com/images/pr/l/v20221205202048/black-forest-cake-half-kg_1.jpg"
          name="Black Forest Cake Half kg"
          view_more = "↓View more details"
          description="Product Description"
          price="499"
        />
     
     

      
    </div>
  );
}

export default App;
