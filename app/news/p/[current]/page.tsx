import { notFound } from "next/navigation";
import { getNewsList } from "@/app/libs/microms";
import NewsList from "@/app/compornents/NewsList";
import Pagination from "@/app/compornents/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/constance";


type Props = {
    params: {
        current: string;
    };
};


export default async function  Page({ params }: Props){
    const current= parseInt(params.current,10);
    if (Number.isNaN(current) || current < 1) {
        return notFound();
    }
    const {contents: news, totalCount} = await getNewsList({ offset: (current -1) * NEWS_LIST_LIMIT, limit: NEWS_LIST_LIMIT,});
    if (news.length ===0) {
        return notFound();
    }

    return (
        <>
            <NewsList news={news}/>
            <Pagination totalCount={totalCount} current={current}/>
        </>
    );
}