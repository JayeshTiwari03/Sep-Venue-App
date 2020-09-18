import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_kumbh'>The Venue</div>
                <div className='footer_copyright'>
                    Copyright - Jayesh
                </div>
            </Fade>
        </footer>
    )
}

export default Footer
