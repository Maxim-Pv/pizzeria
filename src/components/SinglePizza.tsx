import React, { FC, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Pizza from '../modals/Pizza';
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [edit, setEdit] = useState<boolean>(false); 

  const handleToggleEdit = () => {
    setEdit(!edit);
  }

  const handleDelete = () => {
    deletePizza(pizza.id);
  }

  return (
    <div className='pizza'>
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} $</span>
      <div className='pizza-controls'>
        <CiEdit onClick={handleToggleEdit}/>
        <AiOutlineDelete onClick={handleDelete}/>
      </div>
      {edit
        ? <EditPizzaForm 
            data={pizza} 
            updatePizza={updatePizza}
            handleToggleEdit={handleToggleEdit}
          />
        : null
      }
    </div>
  )
}

export default SinglePizza