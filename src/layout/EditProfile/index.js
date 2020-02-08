import React, { Fragment, useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';



const EditUserInfo = () => {

  const [ values, setValues ] = useState({
    first_name: '',
    last_name: '',
    residential_address:'',
    city:'',
    state:'',
    country:'',
});
const handleChange = (event) => {
  event.preventDefault();
  // toast('Kindly login', 'error');
  setValues({
      ...values,
      [event.target.id]: event.target.value
  });

}
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // signIn(values);
//     // toast('Kindly login', 'error');
// }
    return (  
    <Fragment>
    <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="first_name">
        <Form.Label className="font-weight-bold">First Name</Form.Label>
        <Form.Control onChange={handleChange} type="text" placeholder="Enter Firstname" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="last_name">
        <Form.Label className="font-weight-bold">Last Name</Form.Label>
        <Form.Control onChange={handleChange} type="text" placeholder="Last Name" />
      </Form.Group>
    </Form.Row>
  
    <Form.Group controlId="residential_address">
      <Form.Label className="font-weight-bold">Address</Form.Label>
      <Form.Control onChange={handleChange} placeholder="1234 Main St" />
    </Form.Group>
  
    <Form.Row>
      <Form.Group as={Col} controlId="city">
        <Form.Label className="font-weight-bold">City</Form.Label>
        <Form.Control onChange={handleChange}  type="text" placeholder="London" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="state">
        <Form.Label className="font-weight-bold">State</Form.Label>
        <Form.Control onChange={handleChange} as="select" value="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>
  
      <Form.Group as={Col} controlId="country">
        <Form.Label className="font-weight-bold">Country</Form.Label>
        <Form.Control onChange={handleChange}  type="text" placeholder="United Kingdom" />
      </Form.Group>
    </Form.Row>
    <Button variant="primary-dark" type="submit">
      Submit
    </Button>
  </Form>
   </Fragment>
)
}

export default EditUserInfo;
