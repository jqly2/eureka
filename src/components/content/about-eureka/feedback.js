import React from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

class FeedbackMenuItem extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            show: false
        };
    }

    render() {

        return (
            <div className="App-About-formControl">
                        <form action="mailto:someone@example.com" method="post" enctype="text/plain"> 
                            <FormGroup className="App-About-formControl-feedback">
                                <p>Have  any  questions,  problems  or  suggestions?    We  love  to  hear  from  our  users,  investors  and  potential  employees  so  please  reach  out  with  the  form  below.    A  Eureka  executive  will  get  back  to  you  shortly.</p>
                                <FormControl componentClass="input" placeholder="Name." />
                                <br />
                                <FormControl componentClass="input" placeholder="Email." />
                                <br />
                                <FormControl componentClass="textarea" style={{ height: 230 }} placeholder="Share your opinion here." />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </form>
            </div>
        );
    }
}

export default FeedbackMenuItem


// WEBPACK FOOTER //
// ./src/components/about-feedbackMenu.js