
import AsideRecommend from "@/widgets/aside-reccomend";
import Posts from "@/widgets/posts";
import Stories from "@/widgets/stories";

export default function HomePage() {
  return (
    <>
    <main className="app-body">
      <Stories/>
      <Posts/>
    </main>
    <AsideRecommend/>
    </>
  );
}
