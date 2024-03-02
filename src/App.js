import React, { useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoCloseCircleOutline } from "react-icons/io5";
// import Project from './Project_ToDoList/Project'
import './App.css'
function App() {
  const refInput = useRef()
  const [data , setData] = useState([])

  const DataFunc = ()=>{
    const value = refInput.current.value
    const itemData = {completed : false , value : value}
    setData([...data , itemData])
    refInput.current.value = ''
  }


  const itemDone = (index)=>{
    const newData = [...data]
    newData[index].completed = ! newData[index].completed
    setData(newData)
  } 


  const toDelete = (index)=>{
    const newData = [...data]
    newData.splice(index , 1)
    setData(newData)

  }

  const DeleteAll = ()=>{
    setData([])
  }
  return (
    <section className='list-data' >
        <Container fluid>
          <h1 className='bg-body p-4'>to do list</h1>
          <Row>
              <Col lg='12' sm='10'>
                <div className='list-control'>
                  <input type='text' placeholder='Enter Your Task...' className='p-2' ref={refInput} />
                  <Button className='btn-success' onClick={DataFunc} >add</Button>
                  <Button className='btn-danger' onClick={DeleteAll} >Clear</Button>
                </div>           
              </Col>

              <hr/>
              <Col lg='12' sm='12'>
                <div className='list-items'>
                  <ul>
                    {
                      data.map((item, index) => {
                        return <div>
                          <li onClick={()=> itemDone(index) } className={item.completed ? "clicked p-3 " : "p-3"}> {item.value} </li>
                          <Button className='btn-danger' onClick={ ()=> toDelete(index) }>X</Button>
                        </div>
                      })
                    }
                  </ul>
                </div>
              </Col>
          </Row>
          
        </Container>
    </section>
  )
}

export default App