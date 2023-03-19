import React from 'react'
import { AboutPage } from '../pages/AboutPage'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'

export const routes = [
	{
		name: 'home',
		path: '/:heroId',
		element: <HomePage />,
		title: 'Heroes Anteriores'
	},
	{
		name: 'about',
		path: '/about',
		element: <AboutPage />,
		title: '¿Cómo Funciona?'
	},
	{
		name: 'login',
		path: '/login',
		element: <LoginPage />,
		title: 'Iniciar Sesión'
	}
]
