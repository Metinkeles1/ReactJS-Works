import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from 'react'

function index() {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to="#/">
                <Image src="https://picsum.photos/200/300" alt="product" />

                <Box p="6">
                    <Box d="plex" alignItems="baseline">
                        12/12/2023
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        Macbook pro
                    </Box>
                    <Box>100 Tl</Box>
                </Box>
            </Link>

            <Button colorScheme="pink">Add to Basket</Button>
        </Box>
    )
}

export default index