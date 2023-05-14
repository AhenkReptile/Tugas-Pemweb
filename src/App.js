
import './App.css';


function App() {
  return (
    <>
    <body className="overflow-x-hidden">
      <section className="relative block w-screen max-h-screen bg-white">
        <img className="max-h-screen w-screen" src="./img/bg.jpg" />
      </section>

      <section className="relative w-screen h-1/2 p-3 bg-white">
            <h1 className="font-medium text-2xl">Featured Product's</h1>
            <hr className="top-3 border-2 border-solid border-black"/>
      </section>
        
      <section>
        <div className="bg-white flex items-center flex-wrap gap-6 m-5 p-3 rounded-lg">
          <div className="flex-2">
            <img className='w-25' src="./img/hae.jpeg" alt=""/>
          </div>

          <div className="flex-2">
            <h3 className='text-5xl'>Naokids Store</h3>
            <p className='leading-loose text-2xl text-slate-700 pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mollis arcu. 
              Aenean elementum nibh et mi aliquam rutrum. Cras varius risus egestas, sollicitudin dui non, 
              tempus erat. Sed porttitor viverra mi, ac tincidunt elit mattis eu.
            </p>
          </div>
      </div>
      </section>
    </body>
    
  
    </>
    
  );
}


export default App;
