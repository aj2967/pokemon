import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import charizard from '../assets/images/charizard-g5.png';
import raichu from '../assets/images/raichu-g5.png';
import squirtle from '../assets/images/squirtle-g5.png';
import blastoise from '../assets/images/blastoise-g5.png';
import moltres from '../assets/images/moltres-g5.png';
import ivysaur from '../assets/images/ivysaur-g5.png';
import meowth from '../assets/images/meowth-g5.png';

const Hero = () => {

    const Section = styled.div`
        height: 80vh;
        /* background-color: palegoldenrod; */
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Container = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 80vh;
        /* padding: 3rem calc((100vw - 1200px) / 2); */

        @media screen and (max-width: 768px) {
            /* grid-template-columns: 1fr; */
        }
    `;

    const ColumnLeft = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 5rem 2rem;

        p {
            font-size: 2rem;
            margin: 1rem 0;
            
            @media screen and (min-width: 768px) {
                font-size: 4rem;
            }
        }

    `;

    const Image = styled(motion.img)`
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 150px;
        max-height: 150px;
        cursor: grab;
    `;

    const ColumnRight = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        position: relative;
        /* border: 1px solid black; */

        ${Image}:nth-child(1) {
            top: 10px;
            right: 0px;
        }
        
        ${Image}:nth-child(2) {
            top: 170px;
            right: 0px;
        }
        
        ${Image}:nth-child(3) {
            top: 300px;
            right: 0px;
        }
        
        ${Image}:nth-child(4) {
            display: none;
        }

        ${Image}:nth-child(5) {
            display: none;
            bottom: 10px;
            right: 0px;
        }
        
        ${Image}:nth-child(6) {
            display: none;
        }
        
        ${Image}:nth-child(7) {
            display: none;
        }

        @media screen and (min-width: 1000px) {
            ${Image}:nth-child(1) {
                top: 50px;
                left: 0;
            }
            
            ${Image}:nth-child(2) {
                top: 0;
                right: 200px;
            }
            
            ${Image}:nth-child(3) {
                top: 80px;
                right: 20px;
            }
            
            ${Image}:nth-child(4) {
                display: flex;
                top: 250px;
                right: 0px;
            }
            
            ${Image}:nth-child(5) {
                display: flex;
                top: 340px;
                right: 120px;
            }
            
            ${Image}:nth-child(6) {
                display: flex;
                top: 360px;
                left: 120px;
            }
            
            ${Image}:nth-child(7) {
                display: flex;
                top: 240px;
                left: 10px;
            }
        }
    `;

    const Button = styled(motion.button)``;


    const fadeLeft = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x:0 }
    }
    

  return (
    <Section>
        <Container>
            <ColumnLeft>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >Pokedex
                </motion.h1>
                <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                >Browse a collection of pokemon</motion.p>
                <Link to="/pokedex">
                    <Button
                        className='btn'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: .95, backgroundColor: '#67f6e7' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >Browse</Button>
                </Link>
            </ColumnLeft>
            <ColumnRight>
                <Image src={charizard} alt='charizard' 
                    whileTap={{scale: .9}} 
                    drag={true}
                    dragConstraints={{left: 0, right:0, top:0, bottom:50}}
                    initial={{opacity:0, y: -100, x:-40}}
                    animate={{opacity:1, y:0, x:0, transition: {delay:.2,duration:.8}}}
                />
                <Image src={raichu} alt='raichu'
                    whileTap={{scale: .9}} 
                    drag={true}
                    dragConstraints={{left: 50, right:0, top:0, bottom:50}}
                    initial={{opacity:0, y: -100}}
                    animate={{opacity:1, y:0, transition: {delay:.3 ,duration:.8}}}
                />
                <Image src={moltres} alt='moltres'
                    whileTap={{scale: .9}} 
                    drag={true}
                    dragConstraints={{left: 50, right:0, top:0, bottom:100}}
                    initial={{opacity:0, x: 100, y:-60}}
                    animate={{opacity:1, x:0, y:0, transition: {delay:.4 ,duration:.8}}}
                />
                <Image src={blastoise} alt='blastoise'
                    whileTap={{scale: .8}} 
                    drag={true}
                    dragConstraints={{left: 0, right:0, top:0, bottom:0}}
                    initial={{opacity:0, x: 100}}
                    animate={{opacity:1, x:0, transition: {delay:.5 ,duration:.8}}}
                />
                
                <Image src={squirtle} alt='squirtle'
                    whileTap={{scale: .9}} 
                    drag={true}
                    dragConstraints={{left: 0, right:0, top:50, bottom:0}}
                    initial={{opacity:0, x: 100, y:60}}
                    animate={{opacity:1, x:0, y:0, transition: {delay:.6 ,duration:.8}}}
                />
                
                <Image src={ivysaur} alt='ivysaur'
                    whileTap={{scale: .9}} 
                    drag={true}
                    dragConstraints={{left: 0, right:0, top:0, bottom:0}}
                    initial={{opacity:0, x: -80, y:180}}
                    animate={{opacity:1, x:0, y:0, transition: {delay:.7 ,duration:.8}}}
                />
                
                <Image src={meowth} alt='meowth'
                    whileTap={{scale: .9}} 
                    drag={true}
                    dragConstraints={{left: 0, right:0, top:0, bottom:0}}
                    initial={{opacity:0, x: -100, y:10}}
                    animate={{opacity:1, x:0, y:0, transition: {delay:.8 ,duration:.8}}}
                />
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default Hero