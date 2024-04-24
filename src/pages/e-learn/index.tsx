'use client'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { Card, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { categories } from './data'

import ReactPlayer from 'react-player'

const ELearn = () => {
  // ** variables
  const [tab, setTab] = useState(0)

  // ** functions
  const handleTabChange = (_: React.SyntheticEvent, selectedTab: number) => {
    setTab(selectedTab)
  }

  return (
    <TabContext value={`${tab}`}>
      <Tabs
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        value={tab}
        onChange={handleTabChange}
        className=''
      >
        {categories.map((category, i) => (
          <Tab key={i} label={category.title} centerRipple />
        ))}
      </Tabs>
      {categories.map((category, index) => (
        <TabPanel value={`${index}`} key={index} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {category.videos.map((video, index) => (
            <Card key={index}>
              <div className='flex flex-col lg:flex-row gap-3 md:gap-6 lg:gap-9'>
                <div className='p-2 w-[300px]'>
                  <ReactPlayer url={video.src} width={300} height={250} />
                </div>
                <div className='flex flex-col px-5'>
                  <div className='h-[100px] pt-0 md:pt-5 lg:pt-10'>
                    <h1 className='md:text-lg font-bold'>{video.title}</h1>
                  </div>
                  <div>
                    <p>{video?.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabPanel>
      ))}
    </TabContext>
  )
}

export default ELearn
