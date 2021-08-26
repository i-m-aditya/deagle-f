import logo from './logo.svg';
import './App.css';
import background from "./images/websiteBg10.png";

function App() {
  return (
    <div class=" absolute">
      <img className="object-cover" src={background} />
      <div className="absolute top-1/3 left-0 right-0">
        <div className=" text-black font-serif text-opacity-70 text-9xl font-extrabold text-center break-normal"> Deagle Protocol</div>
        {/* <div className="text-white text-opacity-50 text-bold font-extrabold absolute right-0"> NFTs Options Protocol</div> */}
        <div className="text-black font-serif text-opacity-80 text-2xl font-extrabold text-center mt-10"> Coming Soon !</div>
        <div className="text-black font-serif text-opacity-80 text-bold font-extrabold text-center mt-10"> contact@deagle.finance</div>
      </div>

     </div>
  );
}

export default App;
