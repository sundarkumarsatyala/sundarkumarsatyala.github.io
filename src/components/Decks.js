import React from 'react';
import Deck1 from './../img/communication_skills.png';
import Deck2 from './../img/conceptual_thinking_2.jpg';
import Deck3 from './../img/hand_writing_2.jpg';
import Deck4 from './../img/maths.png';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Decks = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={Deck1} width="256" height="186" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Communication Skills</CardTitle>
          <CardText>Learn English language in a smart way with our advanced programs offered by Cambridge University, London. Enhance your English knowledge and develop your skills with our qualified and certified trainers.<br></br><br></br>We offer classes from1st standard onwards. Professionals, Job holders, House wives, Students, Teachers and any one with a lust to learn the language can join our course.</CardText>
          <Button>Contact Us</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Deck2} width="256" height="186" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Conceptual Studies</CardTitle>
          <CardText>A unique way of learning in a simple and smart way. Our qualified teachers make your kid to learn in a simplified way with conceptual orientation. This makes them to understand and perform better in higher classes<br></br><br></br>We offer this program from LKG to 5th standards.</CardText>
          <Button>Contact Us</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Deck3} width="256" height="186" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Handwriting</CardTitle>
          <CardText>Our program offers both cursive and print style handwriting. Our teachers provides a stress free environment which helps you to develop your complex motor  skills.<br></br><br></br>We offer this essential program  for both children and adults.</CardText>
          <Button>Contact Us</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Deck4} width="256" height="186" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Maths-Runn</CardTitle>
          <CardText>A fun way of learning mathematics without getting bored. Open your kid's ability to solve the problems with ease.<br></br><br></br>Maths-run program is offered from 1st to 10th standard students.</CardText>
          <Button>Contact Us</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
}

export default Decks;