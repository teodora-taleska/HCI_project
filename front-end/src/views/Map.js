import "./Map.css"

import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
  } from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete} from "@react-google-maps/api"
import { useState } from "react"
import NavBar from "../components/NavBar"

// Paris
const center = { lat: 48.8584, lng: 2.2945}


function Map(){
    // var ponto1 = new google.maps.LatLng(parseFloat("36.5"), parseFloat("-83.2"));
    
    const {isLoaded} = useJsApiLoader ({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
        libraries: ['places'],
    })

    const [map, setMap ] = useState( /** @type google.maps.Map */(null))

    if (!isLoaded){
        return <SkeletonText />
        
    }

    return(
        <div>
        <NavBar />
        <Flex
        id="flexId"
            position='relative'
            flexDirection='column'
            alignItems='center'
            // bgColor='blue.200'
            // bgImage='https://images.unsplash.com/photo-1647117181799-0ac3e50a548a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            // bgPos='bottom'
            h='100vh'
            w='100vw'
        >

            <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                {/* Google maps box */}
                <GoogleMap center={center} 
                    zoom={15} 
                    mapContainerStyle={{width: '100%', height: "100%"}}
                    options={{
                        mapTypeControl:false,
                        fullscreenControl: false
                    }}
                    onLoad={map => setMap(map)}
                    >
                    <Marker position={center}/>
                    {/* Displaying markers, or directions */}
                </GoogleMap>
            </Box>

        
            <Box id="routebox"
                h='80px' w='520px'
                p={4}
                borderRadius='2%'
                mt={4}
                bgColor='white'
                shadow='2px 3px 5px grey'
                minW='container.md'
                zIndex='5'
            >
                <HStack spacing={4}>
                <Autocomplete>
                        <Input id="originId" type='text' placeholder='Origin' />
                </Autocomplete>    
                <Autocomplete>
                    <Input id="destinationId" type='text' placeholder='Destination' />
                </Autocomplete>

                <ButtonGroup>
                    <Button id="routeButton" colorScheme='pink' type='submit'>
                    Calculate Route
                    </Button>
                    <IconButton
                    aria-label='center back'
                    icon={<FaTimes />}
                    onClick={() => alert(123)}
                    />
                </ButtonGroup>

                </HStack>
                <HStack spacing={4} mt={4} justifyContent='space-between'>
                <Text>Distance: </Text>
                <Text>Duration: </Text>
                <IconButton
                    aria-label='center back'
                    icon={<FaLocationArrow />}
                    isRound
                    onClick={() => map.panTo(center)}
                />
                </HStack>
            </Box>
        </Flex>
        </div>
    )
}

export default Map