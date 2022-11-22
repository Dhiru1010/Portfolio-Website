import './PricingCardstyle.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const PricingCard = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'> $ 100</p>
                    <p>- 3 days -</p>
                    <p>- 3 pages -</p>
                    <p>-featured-</p>
                    <p>- Responsive -</p>
                    <Link to='/contact'>
                        <Button className='button' name='Purchase Now'> </Button>
                    </Link>
                </div>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'> $ 200</p>
                    <p>- 3 days -</p>
                    <p>- 5 pages -</p>
                    <p>-featured-</p>
                    <p>- Responsive -</p>
                    <Link to='/contact'>
                        <Button className='button' name='Purchase Now'> </Button>
                    </Link>
                </div>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'> $ 300</p>
                    <p>- 5 days -</p>
                    <p>- 3 pages -</p>
                    <p>-featured-</p>
                    <p>- Responsive -</p>
                    <Link to='/contact'>
                        <Button className='button' name='Purchase Now'> </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default PricingCard