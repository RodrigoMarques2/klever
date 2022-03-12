import React from 'react';
import { useHistory } from 'react-router-dom';
import edit_icon from '../../imgs/ico-edit.ico';
import { Button, Form, Col, Row, Table} from 'react-bootstrap';

const Wallet = ({id, token, balance}) => {
        const history = useHistory();

        return (
            <Form>    
                <Row>
                    <Col xs="12" md="12">
                        <Table striped borderless id="tabTokens">
                            <thead>
                                <tr><th></th></tr>
                            </thead>
                            <tbody>
                                <td>
                                    <Row>
                                        <Col xs="2" md="2">
                                            <Button variant="primary" name="edit_btn" id="edit_btn" onClick={() => history.push(`/edit/${id}`)}>
                                                <img src={edit_icon} alt="edit" id="edit"  />
                                            </Button>
                                        </Col>
                                        <Col xs="5" md="5">
                                            <p id="tokenValue">{token}</p>
                                        </Col>
                                        <Col xs="5" md="5">
                                            <Form.Group>
                                                <p id="balanceValue">{balance}</p>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </td>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Form>
        );
};
export default Wallet