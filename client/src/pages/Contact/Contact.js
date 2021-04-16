import React from "react";
import "../Contact/contact.css"
import {Input,FormGroup,Label,Submit} from "../../components/Form/input.styles"
const Contact = () => (
  <div id="contactForm">

    <h1>Get A tech to your house </h1>
    <form>
      <FormGroup>
       <Label>
         Email:
       </Label>
        <Input/>
      </FormGroup>
      <FormGroup>
       <Label>
         Name:
       </Label>
        <Input/>
      </FormGroup>
      <FormGroup>
       <Label>
         Phone Number:
       </Label>
        <Input/>
          <Submit/>
      </FormGroup>
    </form>
  </div>
);

export default Contact;
