import Sheet from "@/app/compornents/sheet";
import Hero from "@/app/compornents/Hero";

type props = {
    children: React.ReactNode;
}

export default function RootLayout({children}:props) {  
    return (
        <>
        <Hero title="Menbers" sub="メンバー紹介" />
        <Sheet> {children} </Sheet>
        </>
    );
}

