import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_kumbh'>Bhiyaoo</div>
                <div className='footer_copyright'>
                    Copyright - Jayesh Tiwari - <a href='https://github.com/JayeshTiwari03'>Github</a> | <a href='https://twitter.com/jayeshomg'>Twitter</a>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer
