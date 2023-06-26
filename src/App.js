import Hello from "./components/Hello";

/* Mobile first! e.g.:
w- : mobile
lg: w- : computer */

function App() {
  return (
    <body className = "flex justify-center lg:p-20 h-screen">
      <container className = "flex bg-cyan-600 p-10 w-full lg:w-2/5 h-full lg:h-2/3 rounded-3xl">
        <div>
          <Hello />
        </div> 
      </container>
    </body>
   
  );
}

export default App; 

