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
        };    
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

    
    
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="researcher_name" md={{size:3, offset:1}}>
                        Researcher's Name:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="r_name_id" name="rname"
                     innerRef={(input) => this.rname = input}></Input>
                    </Col>
                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="location" md={{size:3, offset:1}}>
                        Location:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="location_id" name="location" 
                     innerRef={(input) => this.location = input}
                        ></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="folder_name" md={{size:3, offset:1}}>
                        Folder Name:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="folder_name_id" name="foldername" 
                     innerRef={(input) => this.foldername = input}
                    ></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="file_name" md={{size:3, offset:1}}>
                        File Name:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="file_name_id" name="filename"
                     innerRef={(input) => this.filename = input}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="description" md={{size:3, offset:1}}>
                        Description:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="description_id" name="description"
                     innerRef={(input) => this.description = input}></Input>
                    </Col>                    
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor="image_count" md={{size:3, offset:1}}>
                        Image Count:
                    </Label>
                    <Col md={3}>
                    <Input type="text" id="image_count_id" 
                    name="imagecount" innerRef={(input) => this.description = input}
                    ></Input>
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