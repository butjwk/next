import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Cards(noticia) {
    return (
        <Col key={noticia.idnoticia}>
            <Card>
                <Card.Header className="text-center fw-bold bg-info-subtle">{noticia.titulonoticia}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">{noticia.tiponoticia}</Card.Title>
                    <Card.Text> {noticia.conteudonoticia}</Card.Text>
                </Card.Body>
                <Card.Footer>{new Date(noticia.datahoracadastro).toLocaleString("pt-br")}</Card.Footer>

            </Card>
        </Col>
    );
}