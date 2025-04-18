/* src/Router.jsx */
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Public from './Public'
import Profile from './Profile'
import Protected from './Protected'
import Content from './Content'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Nav/>}>
            
                <Route index element={<Public/>}/>
                <Route path="/protected" element={<Protected/>}/>
                <Route path="/content" element={<Content/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Public/>}/>
            
            </Route>
        </Routes>

    )
}

export default Router