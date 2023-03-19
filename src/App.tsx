import React, { useEffect } from 'react'
import './App.css'
import { AppRouter } from './routes/AppRouter'
import heroes from './data/heroes.json'

function App() {
	useEffect(() => {
		localStorage.setItem('heroes', JSON.stringify(heroes))
	}, [])

	return <AppRouter />
}

export default App
