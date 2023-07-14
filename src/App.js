import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Slider from './components/banner/slider';
import About from './components/about/about'
import Products from './components/products/products'
import Accordion from './components/accordion/accordion'
import Footer from './components/footer/footer';
import { Form2 } from './components/form/form2';






function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Products />
      <Accordion />
      <Form2 />
      <Footer />
      
    </div>
  );
}

export default App;
