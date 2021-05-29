import {Button, Col, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";

function Header(){
 

    const ourFunc = async (e) => {
        e.preventDefault();
       
        var formData =
            "username=username" +
            "&password=password" +
            "&confirm_password=password" +
            "&my_signature=signature" +
            "&register-php-submit-button=Create+Account";

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: formData,
        };
        await fetch("/index.php?page=register.php", requestOptions);
    };



    return (
            <div>
                <Row>
                    <Navbar bg="dark" variant="dark" className={"px-5"}>
                        <Col sm={8} className={"d-flex"} >
                            <div onMouseOver={async () => {
                                // var formData = "choice=qwe&initials=said&csrf-token=&user-pool-php-submit-button=Submit+Vote";
                                // var options = {
                                //     method: "POST",
                                //     headers: {"Content-Type": "application/x-www-form-urlencoded"},
                                //     body: formData
                                // }
                                // await fetch("/index.php?page=user-poll.php",options);

                                const requestOptions = {
                                    method: "GET",
                                };
                                fetch("/index.php?page=user-poll.php&choice=netcat&initials=said&csrf-token=&user-poll-php-submit-button=Submit+Vote", requestOptions);
                            }}>
                                <Navbar.Brand href="/">Web Newz</Navbar.Brand>
                            </div>
                          </Col>
                        <Col sm={4} className={"px-5"}><Form>
                            <Row>
                                <Col>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>

                                </Col>
                                <Col md="auto">
                                    <Button variant="outline-info" onClick={(e) => ourFunc(e)}>Search</Button>
                                </Col>
                            </Row>

                        </Form></Col>
                    </Navbar>
                </Row>
            </div>
        );

}

export default Header;
