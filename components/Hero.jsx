import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor} from '@chakra-ui/react'

export default function Hero() {
    return (
        <>
            <div className="hero" style={{backgroundImage: `url(/cafer-mert-ceyhan-eSLcqzF707k-unsplash.jpg)`}}>
                <div className="hero-wrap">
                    <div className="hero-box">
                        <h1>Hello, and Welcome to My Portofolio</h1>
                        <Popover>
                            <PopoverTrigger>
                                <Button>Contact Me</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Contact</PopoverHeader>
                                <PopoverBody>
                                    <p>hilman.maulana@massivemusic.co.id</p>
                                    <p>08123456789</p>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </>
    )
}