import React from 'react';
import Container from 'react-bootstrap/Container'
import { 
} from 'react-router-dom';

class Story extends React.Component {
    render() {
        return (
            <div>
                {/* <h2>Story </h2>
                <h5>Work with Versatile Tone Group</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p> */}
                
                {/* BOOTSTRAP */}
                    <Container className="section" >
                        <div className="about-photos">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                        </Card>
                        </div>
                        <h2 className="heading" >Tone is a talent agency for music</h2>
                        <p>hhhhhhTONE is a creative, safe haven for artists looking to take their career to the next level. Co-founded in 2020 by Daniel Kontoh-Boateng, Kwame Twum-Barima, and Evangelos Mines, the vision of the group is channeling energy, creative vision, and striving to cultivate family-like relationships with our clients that empowers the full spectrum of their creativity and unique artist brands without any alteration influenced by "demands" of the entertainment world. We proudly say, SET YOUR TONE, and we’ll do the WORK. </p>
                        {/* <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p> */}
                        {/* <p><a className="btn btn-secondary" href="https://apple.com" role="button">View details</a></p> */}
                    </Container>

                    {/* <spacer className="spacer" /> */}


            </div>
        )
    }
}

export default Story;