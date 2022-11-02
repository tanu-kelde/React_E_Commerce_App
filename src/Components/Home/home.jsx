import { useState } from 'react';
import Grid from './Grid/grid';
import List from './List/list';

function Home() {
    const [isGridView, setGridView]= useState(true);
    return(
        <>
            {
                isGridView ? <Grid />: <List />          
            }
        </>
    )
}
export default Home;
