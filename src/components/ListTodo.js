// Import Library
import React from "react";
import { Button, ButtonGroup, Col, ListGroup, Row } from "react-bootstrap";
import { GiTrashCan, GiPencil } from "react-icons/gi"
// Import Components
import "./../style/index.css"

const ListTodo = ({ todo, handleDelete, handleEdit, handleDetail }) => {
    return (
        <div className="list-container">
            {todo.map((data, index) => {
                return (
                    <ListGroup key={index} className="mt-3 mx-1">
                        <Col sm={12}>
                            <ListGroup.Item action className="shadow-sm rounded">
                                <Row>
                                    <Col sm={1}>
                                        <input type="checkbox" className="me-2 mt-2 box" />
                                    </Col>
                                    <Col sm={9} onClick={() => handleDetail(data)}>
                                        <span className="title">{data.content}</span>
                                    </Col>
                                    <Col sm={2}>

                                        <ButtonGroup>
                                            <Button
                                                className="float-sm-end"
                                                onClick={() => handleEdit(data)}
                                            >
                                                <GiPencil />
                                            </Button>
                                            <Button className="float-sm-end" variant="danger" onClick={() => handleDelete(data)}><GiTrashCan /></Button>
                                        </ButtonGroup>

                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Col>
                    </ListGroup>
                )
            })}
        </div>
    )
}

export default ListTodo