'use client'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { Breadcrumbs, Card, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import { categories } from '../../data/videos'

import ReactPlayer from 'react-player'
import Link from 'next/link'

const ELearn = () => {
  // ** variables
  const [tab, setTab] = useState(0)

  // ** functions
  const handleTabChange = (_: React.SyntheticEvent, selectedTab: number) => {
    setTab(selectedTab)
  }

  return (
    <div className='flex flex-col gap-10'>
      <Breadcrumbs>
        <Link href={'/dashboards/ecommerce/'}>داشبورد</Link>
        <Typography>آموزش های بازرگانی</Typography>
      </Breadcrumbs>
      <TabContext value={`${tab}`}>
        <Tabs variant='scrollable' scrollButtons allowScrollButtonsMobile value={tab} onChange={handleTabChange}>
          {categories.map((category, i) => (
            <Tab key={i} label={category.title} />
          ))}
        </Tabs>
        {categories.map((category, index) => (
          <TabPanel value={`${index}`} key={index} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {category.videos.map((video, index) => (
              <Card key={index} className='w-full md:w-11/12 mx-auto'>
                <div className='flex flex-col gap-3 md:gap-6 lg:gap-9'>
                  <ReactPlayer
                    controls
                    url={video.src}
                    style={{
                      padding: '20px 20px'
                    }}
                    width={'100%'}
                  />
                  <div className='flex flex-col p-5 gap-5'>
                    <h1 className='md:text-lg font-bold'>{video.title}</h1>
                    <p>{video?.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabPanel>
        ))}
      </TabContext>
    </div>
  )
}

export default ELearn
