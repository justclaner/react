import ListGroup from "./components/ListGroup";

function App() {
  let items = ['David','Justin','Cindy', 'Jonathan', 'Jennifer'];

  const handleSelectItem = (item: String) => {
    console.log(item);
  }
  return <div><ListGroup items={items} heading="Names" onSelectItem={handleSelectItem}/></div>
}

export default App;