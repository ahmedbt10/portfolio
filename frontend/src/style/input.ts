import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    color:"black.100",
    fontSize:"lg",
    background:"primary.light",
    // borderColor:"primary.light"
  },
})

export const inputTheme = defineMultiStyleConfig({ baseStyle })