import { TabList, Tabs ,Tab, TabPanels, TabPanel} from '@chakra-ui/react'

import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'

const Cards = () => {
  return (
   <Tabs p={4} variant='enclosed' size='md'>
      <TabList>
        <Tab>Card-1</Tab>
        <Tab>Card-2</Tab>
        <Tab>Card-3</Tab>
        <Tab>Card-4</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CardOne/>
        </TabPanel>
        <TabPanel>
          <CardTwo/>
        </TabPanel>
        <TabPanel>
         <CardThree/>
        </TabPanel>
        <TabPanel>
          <CardFour/>
        </TabPanel>
      </TabPanels>



   </Tabs>
  )
}

export default Cards