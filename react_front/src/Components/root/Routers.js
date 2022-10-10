import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import {Cience} from "../Cience"
import {Technology} from "../Technology"



export const Routers = () => {
    
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/Cience" element = {<Cience/>} />
                <Route path='/Technology' element = {<Technology/>} />
                
            </Routes>
        </BrowserRouter>
    )

}

