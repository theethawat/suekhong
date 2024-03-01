import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faSliders } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { Button } from '@mui/joy'

import { MainLayout } from '../components/layouts'

function Home() {
  return (
    <MainLayout title="หน้าแรก" currentPage="Home">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 md:w-1/2 gap-2">
          <div className="">
            <Link to="/shoping-list/create">
              <Button size="lg" fullWidth>
                <div className="py-8">
                  <div className="text-center text-2xl">
                    <FontAwesomeIcon icon={faList} />
                  </div>
                  <div className="font-display">สั่งซื้อของ</div>
                </div>
              </Button>
            </Link>
          </div>
          <div className="">
            <Link to="/product">
              <Button size="lg" color="neutral" fullWidth>
                <div className="py-8">
                  <div className="text-center text-2xl">
                    <FontAwesomeIcon icon={faSliders} />
                  </div>
                  <div className="font-display">จัดการรายการในระบบ</div>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
