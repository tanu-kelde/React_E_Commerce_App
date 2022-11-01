import { FruitNavigation } from '../../Category-list/FruitNavigation/FruitNavigation';
import {SideBar} from '../../Category-list/SideBar';
import { Filter } from '../../Category-list';
function List() {
    return(
        <>
            <FruitNavigation/><br />
            <Filter /><br />
            <SideBar/><br />
        </>
    )
}

export default List;