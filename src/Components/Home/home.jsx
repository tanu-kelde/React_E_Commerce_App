import { useState } from 'react';
import Grid from './Grid/grid';
import List from './List/list';

function Home() {
    const [isGridView, setGridView]= useState(false);
    return(
        <>
            {
                isGridView ? <Grid/> : <List/>
            }
        </>
    )
}
export default Home;