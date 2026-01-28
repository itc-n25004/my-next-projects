import { getNewsList } from "../libs/microms";
import NewsList from "../compornents/NewsList";
import Pagination from "../compornents/Pagination";
import SearchField from "../compornents/SearchField";
import { NEWS_LIST_LIMIT } from "../constance";

export default async function NewsPage() {
    const {contents:news, totalCount} = await getNewsList({ limit: NEWS_LIST_LIMIT });
    
    return (<>
        <SearchField />
        <NewsList news={news} />
        <Pagination totalCount={totalCount} />
    </>);
}