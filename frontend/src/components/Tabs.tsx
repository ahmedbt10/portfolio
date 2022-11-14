import {ChakraProvider,Tab,TabList,Tabs,TabPanels,TabPanel} from "@chakra-ui/react"
import { useState } from "react"
import theme from "../style/theme"
const TabsComponent = () => {
    const [idSelected,setIdSelected] = useState(0)
    return (
    <ChakraProvider theme={theme}>
        <Tabs 
            display={"flex"} 
            alignItems="center" 
            flexDirection={"column"}
            colorScheme={"white.100"}
            backgroundColor="white.100"
            onChange={(id)=>setIdSelected(id)}
            
            >
            <TabList
                border={"solid 1px"} 
                borderColor="black.100"
                borderRadius={"40px"}
                pb="2px"
                id="tab-btn"
            >
                <Tab 
                    backgroundColor={idSelected===0?"black.100":"white.100"}
                    color={idSelected===0?"white.100":"black.100"}
                >Design</Tab>
                <Tab
                    backgroundColor={idSelected===1?"black.100":"white.100"}
                    color={idSelected===1?"white.100":"black.100"}
                >Frontend</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p style={{textAlign:"center"}}>Design tools</p>
                </TabPanel>
                <TabPanel>
                <p style={{textAlign:"center"}}>Development tech</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </ChakraProvider>
  )
}

export default TabsComponent