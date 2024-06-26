//import {MouseEvent} from "react";
import {useState} from "react";
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup({items,heading, onSelectItem}: Props) {

    const [selectedIndex,setSelectedIndex] = useState(-1);
   

     //const handleClick = (event: MouseEvent)=> console.log(event.clientX + " " + event.clientY + " " + event.button);

    return (<>
    <h1>{heading}</h1>
    <ul className="list-group">
    {items.map((itemParameterName,index) => <li 
    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
    key={itemParameterName}
    onClick={()=> {
        setSelectedIndex(index)
        onSelectItem(itemParameterName);
    }} 
    >{itemParameterName}</li>)}
    </ul>
    </>)
}
export default ListGroup;