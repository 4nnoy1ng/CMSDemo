import Card from './components/Card';


function App() {
  return (
    <>
      <div className="pt-20 h-32 text-white font-bold text-5xl pr-8 bg-yellow-900   flex justify-end" >HTL Dornbirn 5bWI</div>
      <div className=" bg-yellow-900 m-20 pb-48 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;