import {getCategoryDetail,getNewsList} from "@/app/libs/microms";
import NewsList from "@/app/compornents/NewsList";
import Pagination from "@/app/compornents/Pagination";
import { notFound } from "next/navigation";
import Category from "@/app/compornents/Category";
import { NEWS_LIST_LIMIT } from "@/app/constance";
type Props = {
    params: {
        id: string;
    }; 
};

export default async function Page({params}: Props){
    const category = await getCategoryDetail(params.id).catch(notFound);
    const {contents:news, totalCount} = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `categories[equal]${category.id}`,
    });

    return(
        <>
        <p>
            <Category category={category}/>の一覧
        </p>
        <NewsList news={news}/>
        <Pagination totalCount={totalCount} current={1} basePath={`/news/category/${category.id}`}/>
        </>
    )
}