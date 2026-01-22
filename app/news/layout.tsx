import Hero from "../compornents/Hero";
import Sheet from "../compornents/sheet";


type props = {
    children: React.ReactNode
}


export default function NewsLayout({ children }: props) {
    return(
        <>
        <Hero title="News" sub="ニュース"/>
        <Sheet>{children}</Sheet>
        </> 
    );
}