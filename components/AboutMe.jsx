import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button } from '@chakra-ui/react'

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
                        <Button>See More</Button>
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
                        <Button>See More</Button>
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
                        <Button>See More</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
            </div>
        </div>
        </>
    )
}