import React, {Component} from 'react';
import {Card, CardImg, CardText,  CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        const comments = this.props.selectedDish.comments.map((comment) => {
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
                    <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                    <CardBody>
                        <CardTitle heading>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                    </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                           <CardBody>{comments}</CardBody>
                        </Card>
                    </div>
                </div>
                </div>
            );
        }
}

export default DishDetail;