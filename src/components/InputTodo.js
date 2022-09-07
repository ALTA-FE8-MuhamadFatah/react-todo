// Import Library
import React from "react";
import { Button, Form, FloatingLabel, Col } from "react-bootstrap";

const InputTodo = ({ handleChange, handleSubmit, item, edit }) => {
    return (
        <>
            <Form className="w-100" onSubmit={handleSubmit}>
                {/* context / title */}
                <Col sm={6} className="mx-auto">
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Input title"
                        className="mt-3"
                        type="text"
                    >
                        <Form.Control
                            required
                            name="content"
                            value={item.content}
                            onChange={handleChange}
                            className="shadow-sm"
                            as="textarea"
                            placeholder="Leave a comment here"
                        />
                    </FloatingLabel>
                </Col>

                {/* description */}
                <Col className="mt-1">
                    <FloatingLabel
                        label="Description"
                        type="text"
                        placeholder="Enter description"
                    >
                        <Form.Control
                            name="description"
                            style={{ height: "100px" }}
                            onChange={handleChange}
                            value={item.description}
                            as="textarea"
                            placeholder="Leave a comment here"
                        />
                    </FloatingLabel>
                </Col>
                <Button className="mt-2 w-100 mx-auto mb-3" variant="success" type="submit">
                    {edit ? "Edit Data" : "Create Data"}
                </Button>
            </Form>
        </>
    )
}

export default InputTodo