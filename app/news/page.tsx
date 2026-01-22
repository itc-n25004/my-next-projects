import { getNewsList } from "../libs/microms";
import NewsList from "../compornents/NewsList";

export default async function NewsPage() {
    const {contents:news} = await getNewsList();
    
    return <NewsList news={news}/>;
}