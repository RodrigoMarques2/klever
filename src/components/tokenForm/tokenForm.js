import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import kleverlogo from '../../imgs/logo.svg'
import kleverstar from '../../imgs/shooting-star.svg';
import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { isNull } from 'lodash';

const TokenFormA = (props) => {
    const [wallet, setWallet] = useState({
        token: props.wallet ? props.wallet.token : '',
        balance: props.wallet ? props.wallet.balance : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { token, balance } = wallet;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [token, balance];
        let errorMsg = '';
    
        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const param = {
              id: uuidv4(),
              token,
              balance
            };
            props.handleOnSubmit(param);
          } else {
            errorMsg = 'Please fill out all the fields.';
          }
          setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'token':  
            if (value !== '' || parseInt(value) !== isNull) {
                setWallet((prevState) => ({
                  ...prevState,
                  [name]: value
                }));
              }
            break;
            default:
            setWallet((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
      };

    return(
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Container fluid>
                    <Row>
                        <Col xs="12" md="12">
                            <img src={kleverlogo} alt="logo" id="logo"  />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="2" md="2">
                            <img src={kleverstar} alt="star" id="star"  />
                        </Col>
                        <Col xs="6" md="6">
                            <p id="wishw">Wish Wallet</p>
                        </Col>
                        <Col xs="4" md="4">
                            <Link to="/">
                                <Button variant="primary" name="back_btn" id="back_btn">Back</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row id="rowToken">
                        <Col xs="6" md="6">
                            <Form.Group>
                                <Form.Label>Token</Form.Label>
                                <Form.Control type="text" name="token" id="token" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id="rowBalance">
                        <Col xs="6" md="6">
                            <Form.Group>
                                <Form.Label>Balance</Form.Label>
                                <Form.Control type="text" name="balance" id="balance" mask="#000,000,000" onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="12">
                            <Button variant="primary" type="submit" name="save_btn" id="save_btn">Save</Button>
                        </Col>
                    </Row>
                    {errorMsg && <p className="errorMsg">ERROR: {errorMsg}</p>}
                </Container>
            </Form>
        </div>
    );
}

export default TokenFormA;