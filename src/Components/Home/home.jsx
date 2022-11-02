import { Sidebar } from "./Sidebar";
import { CategoryMenu } from "./CategoryMenu";
import { Customers } from "./Customers";
import { SectionHeadlineCard } from "./SectionHeadlineCard";
import {Blog} from './Blog';
function Home() {
   
    return(
        <>
         <CategoryMenu />
         <Sidebar />
         <Customers />
         <SectionHeadlineCard />
         <Blog />
        </>
    )
}
export default Home;
