/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Sheet, Table, LinearProgress } from '@mui/joy'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { MainLayout } from '../../components/layouts'
import * as actions from '../../redux/actions'

export default function ManagementProduct() {
  const [isReady, setIsReady] = useState(false)
  const product = useSelector((state) => state.product)
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(10)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getAllProduct({ page, size }))
      .then((result) => {
        setIsReady(true)
      })
      .catch((err) => {
        alert(err)
      })

    return () => {}
  }, [])

  const rightButton = (
    <div>
      <Link to="/product/create">
        <Button>เพิ่ม</Button>
      </Link>
    </div>
  )

  if (!isReady) {
    return (
      <div className="w-full p-12">
        <LinearProgress />
      </div>
    )
  }

  return (
    <div>
      <MainLayout title="จัดการรายการสินค้า" currentPage="Store" rightContainer={rightButton}>
        <Sheet>
          <Table stripe="odd" size="lg">
            <thead>
              <tr>
                <th>รหัสสินค้า</th>
                <th>ชื่อสินค้า</th>
              </tr>
            </thead>
            <tbody>
              {_.map(product?.rows, (each, index) => (
                <tr key={index}>
                  <td>{each?.type_code}</td>
                  <td>{each?.name}</td>
                </tr>
              ))}
              {_.isEmpty(product?.rows) && (
                <tr>
                  <td colSpan={2}>ยังไม่มีสินค้า</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Sheet>
      </MainLayout>
    </div>
  )
}
