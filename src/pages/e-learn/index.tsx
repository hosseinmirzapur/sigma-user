'use client'

import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { Card, CardContent, Tab, Tabs } from '@mui/material'
import { useState } from 'react'

interface Category {
  title: string
  videos: Video[]
}

interface Video {
  title: string
  description?: string
  src: string
}

const categories: Category[] = [
  {
    title: 'مالی',
    videos: []
  },
  {
    title: 'مالیاتی',
    videos: []
  },
  {
    title: 'ارزی',
    videos: []
  },
  {
    title: 'بیمه',
    videos: []
  },
  {
    title: 'حمل بین المللی',
    videos: []
  },
  {
    title: 'گمرکی',
    videos: []
  },
  {
    title: 'قرارداد های تجاری بین المللی',
    videos: []
  },
  {
    title: 'سامانه جامع تجارت',
    videos: []
  },
  {
    title: 'سامانه جامع امور گمرکی',
    videos: []
  },
  {
    title: 'سایرین',
    videos: []
  }
]

const ELearn = () => {
  // ** variables
  const [tab, setTab] = useState(0)

  // ** functions
  const handleTabChange = (e: React.SyntheticEvent, selectedTab: number) => {
    setTab(selectedTab)
  }

  return (
    <div>
      <TabContext value={`${tab}`}>
        <Tabs variant='scrollable' scrollButtons allowScrollButtonsMobile value={tab} onChange={handleTabChange}>
          {categories.map((category, index) => (
            <Tab key={index} label={category.title} />
          ))}
        </Tabs>
        {categories.map((category, index) => (
          <TabPanel value={`${tab}`} key={index}>
            {category.videos.map((video, index) => (
              <Card key={index}>
                <CardContent></CardContent>
              </Card>
            ))}
          </TabPanel>
        ))}
      </TabContext>
    </div>
  )
}

export default ELearn
