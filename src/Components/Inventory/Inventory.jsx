import { useState } from 'react';
// import {GridView} from '../Inventory/GridView/GridView';
import {ListView} from '../Inventory/ListView/Listview';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function Inventory() {
    const [isGridView, setGridView]= useState(true);
    return(
        <>
            {
                <ListView />
                        //   <Router>
                        //   <Routes>
                        //       <Route path="/listview" element={<ListView/>} />
                        //   </Routes>
                        //  </Router>  
            }
        </>
    )
}
export default Inventory;
