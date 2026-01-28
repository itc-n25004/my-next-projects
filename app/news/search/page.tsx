import { getNewsList } from "@/app/libs/microms";
import { NEWS_LIST_LIMIT } from "@/app/constance";
import NewsList from "@/app/compornents/NewsList";
import SearchField from "@/app/compornents/SearchField";


type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({searchParams}: Props) {
    
    const {contents:news} = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}