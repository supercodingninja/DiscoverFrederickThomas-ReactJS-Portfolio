import React from 'react';

import Card from '../components/card';

import Nasa from '../assets/media/projectImages/Nasa.png';
import who from '../assets/media/projectImages/team.png';
import Joia from '../assets/media/images/Joia.png';
import ReadMe from '../assets/media/projectImages/rmg.png';
import My1st from '../assets/media/projectImages/scn.png';
import orderForm from '../assets/media/projectImages/of.png';
import noteTaker from '../assets/media/projectImages/nt.png';
import cr from '../assets/media/projectImages/cr.png';
import CV from '../assets/media/projectImages/CV.png';
import pw from '../assets/media/projectImages/pg.png';
import MCT from '../assets/media/projectImages/mct.png';
import start from '../assets/media/projectImages/strt.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'NASA Query',
                    subTitle: 'Double API Wammy Project',
                    imgSrc: Nasa,
                    link: 'https://github.com/supercodingninja/NASAquery',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Who Is Outside',
                    subTitle: 'Extension on Code 201 project, at CodeFellows.',
                    imgSrc: who,
                    link: 'https://github.com/supercodingninja/WhoIsOutside',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Joia',
                    subTitle: 'Joia is your jewel eCommerce website for local art, where you can find your gem for your Jewel or Jim!',
                    imgSrc: Joia,
                    link: 'https://github.com/supercodingninja/Joia',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Read Me Generator',
                    subTitle: 'Professional README Generator.',
                    imgSrc: ReadMe,
                    link: 'https://www.youtube.com/watch?v=Pp9IG-prQjE',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Super Coding Ninja',
                    subTitle: 'This was my first repository (edited)!',
                    imgSrc: My1st,
                    link: 'https://supercodingninja.github.io/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Order Form',
                    subTitle: 'This was my first repository (edited)!',
                    imgSrc: orderForm,
                    link: 'https://supercodingninja.github.io/orderform2',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Note Taker',
                    subTitle: 'An application that can be used to write, save, and delete notes. This application will use an express backend, and it will save and retrieve note data from a JSON file.',
                    imgSrc: noteTaker,
                    link: 'https://yes-notetaker.herokuapp.com/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Code Refactored',
                    subTitle: 'I am learning that some of the more difficult and common tasks for  both, front-end and junior developers, are to refactor existing code.',
                    imgSrc: cr,
                    link: 'https://github.com/supercodingninja/codeRefactored',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Creating A Curriculum Vitae',
                    subTitle: 'This is a simple template to help you write your CV, in a readable markdown file; and use CSS to publish/print it.',
                    imgSrc: CV,
                    link: 'https://github.com/supercodingninja/markdown-cv',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Password Generator',
                    subTitle: 'This application randomly generates a password for the user to use.',
                    imgSrc: pw,
                    link: 'https://github.com/supercodingninja/passwordGenerator',
                    selected: false
                },
                {
                    id: 10,
                    title: 'MY FAVORITE PROJECT',
                    subTitle: 'I used the Adobe Creative Cloud Suite To Create A Beautiful Birthday Message To My Daughter.',
                    imgSrc: MCT,
                    link: 'https://www.youtube.com/watch?v=CK_Z686G6No',
                    selected: false
                },
                {
                    id: 11,
                    title: 'Need Motivation?',
                    subTitle: `Today, is the time to start!  When you start today, you're a lot further than you were, yesterday.`,
                    imgSrc: start,
                    link: 'https://www.youtube.com/watch?v=gP-fl4-H7hY',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;