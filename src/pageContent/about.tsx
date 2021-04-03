import React from 'react';
import Hero from '../components/hero';
import Content from '../components/content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Frederick; and I design and develop New experiences, which makes people's lives Simple.  I love winning people; and building valuable relationships. Let's change our world, together; and make it better for one another.</p>

            <p>I'm well-versed: I love playing various types of saxophones; especially for GOD! I love motivating people, I love Changing My World, Daily. I learn new customs in other cultures and common phrases of other languages. I like playing football, rugby, soccer, and hockey. I learn wrestling and mixed martial arts. I practice home defense safely, with rifles and pistols, at ranges that uphold the safest standards possible. I sing casually and formally. I like watching skydivers and extreme sports. I live my life; and I love it: I don't let social or political extremes and norms dictate how I live; because I have a moral compass, which causes me to naturally treat my fellow person with respect, as I believe GOD desires.</p>

            <p>I am ever learning new things, daily.  <b>No one knows everything</b>.  My over-all game-plan is to remain clear, focused, and thorough: you have to "Gather the facts, Analyze the facts, Make a plan; and Execute it triumphantly- THAT'S HOW YOU WIN A G.A.M.E!"- Frederick D. Thomas, Sr.</p>

            <p>My latest project, <a href="https://joia.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i>Joia</i></a>, pronounced as "Joy-ah" (means gem or jewel) was a final production required for graduation. Joia is your jewel eCommerce website for local art, where you can find your gem for your Jewel or Jim! My chief roles were Project Manager, Repository Maintenance, and Back-end Registration.  We built this application with the following technologies and tools: React and React-Router, JWT, TypeScript (TSX), Bcrypt, Multer, MongoDB, MongooseJS, Figma, Clickup, Heroku, GitHub; and Slack.  We accompplished the build and learning new technologies, in a span of two weeks; where we recieved an "<i>A+</i>" for our final grade!</p>

            <p>When I'm not learning something new, I am an active minister, currently assigned to the Graham, WA location, for my church organization. I currently am involve in our evangelical and music programs (vocal and instrumental).</p>
            </Content>
        </div>
    );

}

export default AboutPage;