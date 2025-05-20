import Card from './components/card/Card';

function App() {
  return (
    <div className='App'>
      <div className='background' />
      <div className='container'>
        {[...Array(12)].map((__, i) => (
          <Card key={i} index={i+1} />
        ))}
      </div>
    </div>
  );
}

export default App;
