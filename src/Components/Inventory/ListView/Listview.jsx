import { FruitNavigation } from '../ListView/FruitNavigation';
import {SideBar} from '../ListView/SideBar';
import { Filter } from '../ListView/Filter';

export function ListView() {
    return(
        <>
            <FruitNavigation/><br />
            <Filter /><br />
            <SideBar/><br />
        </>
    )
}

