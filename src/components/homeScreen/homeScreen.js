import React, { useContext } from 'react';
import WalletsContext from '../../context/walletsContext';
import _ from 'lodash';
import Wallet from '../wallet/wallet';
import kleverlogo from '../../imgs/logo.svg'
import kleverstar from '../../imgs/shooting-star.svg';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Form, Container, Row, Col, Button} from 'react-bootstrap';

const HomeScreen = () =>{
        const { wallets } = useContext(WalletsContext);

        return(
            <Form>
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
                            <Link to="/add">
                                <Button variant="primary" name="addToken_btn" id="addToken_btn">Add Token</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="6" md="6">
                            <p id="labelToken">Token</p>
                        </Col>
                        <Col xs="6" md="6">
                            <p id="labelBalance">Balance</p>
                        </Col>
                    </Row>
                    <React.Fragment>
                        <div className="wallet-list">
                            {!_.isEmpty(wallets) ? (
                                wallets.map((wallet) => (
                                    <Wallet key={wallet.id} {...wallet}  />
                                ))
                                ) : (
                                <p className="message">No wallets on your wish list available. Please add some wallets.</p>
                            )}
                        </div>
                    </React.Fragment>
                </Container>
            </Form>
        );
    }
export default HomeScreen;