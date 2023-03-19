import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from './routes'

export const AppRouter = () => {
	return (
		<div className="w-screen ">
			<Routes>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
				))}
				<Route path="/*" element={<Navigate to="/dc-batman" replace />} />
			</Routes>
		</div>
	)
}
