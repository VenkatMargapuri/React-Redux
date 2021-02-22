import { Alert } from 'bootstrap';
import React, {Component} from 'react';
import { FormGroup, Input, Form, Label, Col, Button, FormFeedback } from 'reactstrap';

export default class Seed extends Component{
    constructor(props){
        super(props);
        this.state = {
            rname: '',
            location: '',
            foldername: '',
            filename: '',
            description: '',
            imagecount: '',      
            touched:{
                rname: false
            }
        };    
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        //this.validate = this.validate.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleSubmit(event){
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'radio' ? target.checked : target.value;
            const name = target.name;
    
            this.setState({
              [name]: value
            });
    }

    validate(rname){
        const errors = {
            rname: '',
            location: '',
            foldername: '',
            filename: '',
            description: '',
            imagecount: ''
        };

        if(this.state.touched.rname && rname.length < 3){
            errors.rname = 'Researchers name should have at least 3 characters.';
        }else if(this.state.touched.rname && rname.length > 30){
            errors.rname = 'Researchers name should have at most 30 characters.';
        }

        return errors;
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    
    
    render(){
        const errors = this.validate(this.state.rname);
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="researcher_name" md={{size:3, offset:1}}>
                        Researcher's Name:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="r_name_id" name="rname" onChange={this.handleInputChange}
                    value={this.state.rname} valid={errors.rname === ''} invalid={errors.rname !==''}
                    onBlur={this.handleBlur('rname')}></Input>
                    <FormFeedback>{errors.rname}</FormFeedback>

                    </Col>
                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="location" md={{size:3, offset:1}}>
                        Location:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="location_id" name="location" onChange={this.handleInputChange}
                    value={this.state.location}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="folder_name" md={{size:3, offset:1}}>
                        Folder Name:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="folder_name_id" name="foldername" onChange={this.handleInputChange}
                    value={this.state.foldername}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="file_name" md={{size:3, offset:1}}>
                        File Name:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="file_name_id" name="filename" onChange={this.handleInputChange}
                    value={this.state.filename}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="description" md={{size:3, offset:1}}>
                        Description:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="description_id" name="description" onChange={this.handleInputChange}
                    value={this.state.description}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="image_count" md={{size:3, offset:1}}>
                        Image Count:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="image_count_id" 
                    name="imagecount" onChange={this.handleInputChange}
                    value={this.state.imagecount}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="rotation" md={{size:3, offset:1}}>
                        Rotation (in degrees):
                    </Label>
                    <Col md={1}>                    
                    <Input type="radio" id="five" name="f" value="5">
                    </Input> <label for="five">5</label>
                    </Col> 
                    <Col md={1}>
                    <Input type="radio" id="ten" name="t" value="10">
                    </Input> <label for="ten">10</label>
                    </Col>
                    <Col md={1}>
                    <Input type="radio" id="twenty" name="tw" value="20">
                    </Input> <label for="twenty">20</label>
                    </Col>
                    <Col md={1}>
                    <Input type="radio" id="thirty" name="th" value="30">
                    </Input> <label for="thirty">30</label>
                    </Col>
                                       
                </FormGroup>
                <FormGroup row>
                    <Col md={{size:1, offset:4}}>
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                    </Col>   
                    <Col md={1}>
                    <Button type="submit" color="primary">
                        Cancel
                    </Button>
                    </Col>                    
                </FormGroup>
            </Form>
        );
    }
}