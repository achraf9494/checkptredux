import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions';



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const Edit = ({oldTodo}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [newAction, setNewAction] = useState(oldTodo.name)
    const dispatch = useDispatch()
    const handleSubmit =(e)=> {
      e.preventDefault();
      const editedTodo = {...oldTodo,name: newAction};
      dispatch(editTodo(editedTodo));
      closeModal();
  }
    function openModal() {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }
      
    return (
        <div>
            <button className="btn btn-danger m-2" onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          
        >
            <form onSubmit={handleSubmit}>
                <input type="text" value={newAction} onChange={(e) => setNewAction(e.target.value)}/>
                <button type="submit" >Confirm</button>
                <button onClick={closeModal}>Cancel</button>
            </form>
        </Modal>
        </div>
    )
}

export default Edit ;
