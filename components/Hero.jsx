import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export default function Hero() {
    return (
        <>
            <div className="hero" style={{backgroundImage: `url(/cafer-mert-ceyhan-eSLcqzF707k-unsplash.jpg)`}}>
                <div className="hero-wrap">
                    <div className="hero-box">
                        <h1>Hello, and Welcome to My Portofolio</h1>
                        <Button>Contact me</Button>
                    </div>
                </div>
            </div>
        </>
    )
}