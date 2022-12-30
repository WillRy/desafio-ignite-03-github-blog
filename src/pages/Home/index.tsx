import { useContext } from "react";
import { PostCard } from "../../components/PostCard";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchForm } from "../../components/SearchForm";
import { BlogContext } from "../../contexts/BlogContext";
import { BlogContainer, HomeContainer } from "./styles";

export function Home() {
    const { posts } = useContext(BlogContext);
    return (
        <HomeContainer>
            <ProfileCard />
            <SearchForm />
            <BlogContainer>
                {posts &&
                    posts.items.map((post) => {
                        return <PostCard key={post.number} post={post} />;
                    })}
            </BlogContainer>
        </HomeContainer>
    );
}
