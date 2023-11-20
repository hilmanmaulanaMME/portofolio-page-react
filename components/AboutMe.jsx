import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button } from '@chakra-ui/react'
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

export default function AboutMe() {
    return (
        <>
        <div className='about'>
            <div className='about-title-wrap'>
                <div className='about-title'>
                    <h1>Experiences</h1>
                </div>
            </div>
            <div className='about-wrap'>
            <SimpleGrid className='about-box left' spacing='4' templateColumns='repeat(auto-fill, minmax(300px,1fr))'>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Music Publishing</Heading>
                    </CardHeader>
                    <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti officiis explicabo ducimus est tempora.
                    </CardBody>
                    <CardFooter>
                        <Popover>
                            <PopoverTrigger>
                                <Button>See More</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Music Publishing</PopoverHeader>
                                <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio provident eaque quasi! Maxime rem ducimus quas! Dicta, autem! Saepe illo esse ratione nihil tempora. Eius natus non atque quasi.</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <SimpleGrid className='about-box middle' spacing='4' templateColumns='repeat(auto-fill, minmax(300px,1fr))'>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Royalty Management</Heading>
                    </CardHeader>
                    <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti officiis explicabo ducimus est tempora.
                    </CardBody>
                    <CardFooter>
                    <Popover>
                            <PopoverTrigger>
                                <Button>See More</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Royalty Management</PopoverHeader>
                                <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio provident eaque quasi! Maxime rem ducimus quas! Dicta, autem! Saepe illo esse ratione nihil tempora. Eius natus non atque quasi.</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            <SimpleGrid className='about-box right' spacing='4' templateColumns='repeat(auto-fill, minmax(300px,1fr))'>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Copyright Management</Heading>
                    </CardHeader>
                    <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti officiis explicabo ducimus est tempora.
                    </CardBody>
                    <CardFooter>
                    <Popover>
                            <PopoverTrigger>
                                <Button>See More</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Copyright Management</PopoverHeader>
                                <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio provident eaque quasi! Maxime rem ducimus quas! Dicta, autem! Saepe illo esse ratione nihil tempora. Eius natus non atque quasi.</PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            </div>
        </div>
        </>
    )
}