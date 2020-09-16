import React, {Component} from 'react';
import {Card, CardImg, CardText,  CardBody, CardTitle} from 'reactstrap';
import CommentForm from './CommentFormComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: props.dish,
            comments: props.comments,
        }
        
    }

        render(){
        const comments = this.state.comments.map((comment) => {
            /*
            var date = new Date(comment.date);
            var newDate = date.toDateString();
            newDate = newDate.substring(4);
            */
            return(
                <div key={comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
                        <CardText></CardText>
                </div>
            );
        });
            return(
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%" src={this.state.selectedDish.image} alt={this.state.selectedDish.name}/>
                    <CardBody>
                        <CardTitle heading>{this.state.selectedDish.name}</CardTitle>
                        <CardText>{this.state.selectedDish.description}</CardText>
                    </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                           <CardBody>{comments}</CardBody>
                           <CardBody>
                                <CommentForm></CommentForm>
                           </CardBody>
                        </Card>
                    </div>
                </div>
                
                </div>
            );
        }
}

export default DishDetail;