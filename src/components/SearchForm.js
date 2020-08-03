import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'

const SearchForm=()=>{
  const [params, setParams] = useState({});
  const handleChange =(e)=>{
    const param = e.target.name;
    const value = e.target.value;
    setParams(prevParams => {
      return { [param]: value }
    });
  }

  return (
    <Form className="mb-4" >
      <h5 className="p-auto alert alert-danger" role="alert">Search feature is temporary unavailable</h5>
      <Form.Row className="align-items-end">
        
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={handleChange} value={params.description} name="description" type="text" disabled />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Location</Form.Label>
          <Form.Control onChange={handleChange} value={params.location} name="location" type="text" disabled/>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check onChange={handleChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" disabled/>
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

export default SearchForm