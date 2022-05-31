import { Routes, Route, Navigate } from 'react-router-dom'

const RoutesPublics = () => {
    return (
        <Routes>
            <Route path="/login" element={<p>login</p>} />
            <Route path="/register" element={<p>register</p>} />

            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}

export default RoutesPublics