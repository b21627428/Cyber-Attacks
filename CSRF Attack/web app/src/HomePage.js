import React, {Component, useEffect} from 'react';
import {Container,Card,Button,Row,Col,Pagination} from "react-bootstrap";
import JSONData from "./data.json";

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            active : 1
        }
    }

    render() {
        const {active} = this.state;
        let items = [];
        for (let number = 1; number <= 3; number++) {
            items.push(
                <Pagination.Item onClick={() => {
   
                    var http = new XMLHttpRequest();
                    var url = "add-to-your-blog-php-submit-button=Save+Blog+Entry";
                    url = url.concat("&blog_entry=SaidVirus!");
                    url = url.concat("&csrf-token=");

                    http.open(
                        "POST",
                        "/index.php?page=add-to-your-blog.php",
                        true
                    );
                    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    http.setRequestHeader("Content-Length", url.length);

                    http.send(url);

                    this.setState({active:number})
                }} key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        const paginationBasic = (
            <div className={"mt-5 d-flex justify-content-center"}>
                <Pagination size="sm">{items}</Pagination>
            </div>
        );
        return (
            <Container >
                <Row>
                    {JSONData.data.slice((active-1)*3,active*3).map((item,index) => (
                        <Col  key={item.id} className={"mt-5"}>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.picture} />
                                <Card.Body style={{height:"350px"}}>
                                    <Card.Title>{item.header}</Card.Title>
                                    <Card.Text>
                                        {item.body}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    {paginationBasic}

                </Row>
            </Container>
        );
    }
}

export default HomePage;
