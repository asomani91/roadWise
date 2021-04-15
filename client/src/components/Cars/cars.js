import React, {
    useState,
    useEffect
} from 'react'
import API from "../../utils/API"
import { ListItem, List } from "./cars.style"
const Cars = (props) => {
    // const Car = [car, setCar] = useState({})
    console.log("cars", props.Cars);
    return (
        <>
            <List>

                {
                    props.Cars.map(car => (
                        <ListItem key={car._id}>
                           <li>
                             {car.make}  
                           </li> 
                            

                        </ListItem>

                    ))
                }
            </List>


        </>)
}

export default Cars