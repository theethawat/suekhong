import React from 'react'
import { useNavigate } from 'react-router'
import { TextInput, Button } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { AuthLayout } from '../../components/layouts'
import * as actions from '../../redux/actions'

export default function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const handleLogin = (data) => {
    dispatch(actions.meLogin(data))
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        window.alert(err?.message)
      })
  }

  return (
    <AuthLayout title="Login">
      <div>
        <div className="flex justify-center">
          <div className="w-full lg:w-1/3 md:w-1/2 m-2 p-2">
            <h1 className="text-2xl font-semibold my-2 text-center">
              Bangriang Garden
            </h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="my-2">
                <TextInput
                  label="Username"
                  name="username"
                  {...register('username')}
                  placeholder="username"
                />
              </div>
              <div className="my-2">
                <TextInput
                  label="Password"
                  name="password"
                  placeholder="password"
                  {...register('password')}
                  type="password"
                />
              </div>
              <div className="w-full my-4">
                <Button variant="outline" color="cyan" fullWidth type="submit">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
