import React from 'react';
import "./Products.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Products = () => {
    return (
        <article className='productsHome_container'>
            <div className='productsHome_container_div'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="/images/defaultProduct.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/defaultProduct.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/defaultProduct.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </article>
    );
}

export default Products;
