import { notFound } from "next/navigation";
import { getCategoryDetail } from "@/app/libs/microms";
import { getNewsList } from "@/app/libs/microms";
import NewsList from "@/app/compornents/NewsList";
import Pagination from "@/app/compornents/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/constance";


type Props = {
    params: {
    id: string;
    current: string;

    };
};


export default async function  Page({ params }: Props){
    const current= parseInt(params.current,10);
    if (Number.isNaN(current) || current < 1) {
        return notFound();
    }
    const category = await getCategoryDetail(params.id).catch(notFound);
    
    const {contents: news, totalCount} = await getNewsList({
         offset: (current -1) * NEWS_LIST_LIMIT, 
         limit: NEWS_LIST_LIMIT,
         filters: `categories[equal]${category.id}`,
    });
    if (news.length ===0) {
        return notFound();
    }

    return (
        <>
            <NewsList news={news}/>
            <Pagination 
            totalCount={totalCount} 
            basePath={`/news/category/${category.id}`}/>
        </>
    );
}