import { useState } from 'react';
import {ListView} from '../Inventory/ListView/Listview';
import { GridView } from '../Inventory/GridView';
import { FruitNavigation } from './FruitNavigation';
import { SideBar } from './SideBar';

function Inventory() {
    const [isGridView, setGridView]= useState(true);

    function updateGridViewState(state) {
        setGridView(state);
    }
    
    return(
        <>
        <FruitNavigation active={isGridView} changeView={updateGridViewState}/>
        <SideBar />
            {
                isGridView ? <GridView />: <ListView />
            }
        </>
    )
}
export default Inventory;
