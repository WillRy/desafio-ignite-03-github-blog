import axios from "axios";
import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from "react";
import { Posts, Profile } from "../@types/global";

interface BlogContextType {
    profile?: Profile;
    posts?: Posts
    fetchPosts: (query: string) => Promise<void>;
}
export const BlogContext = createContext({} as BlogContextType);

interface BlogContextProviderProps {
    children: ReactNode;
}
export function BlogContextProvider({ children }: BlogContextProviderProps) {
    const [profile, setProfile] = useState<Profile>();
    const [posts, setPosts] = useState<Posts>();

    const fetchPosts = useCallback(async (query: string = '') => {
        const url = "https://api.github.com/search/issues";
        const profile = "willry";
        const repo = "blog-issues-desafio";

        const { data } = await axios.get(url, {
            params: {
                q: `${query} repo:${profile}/${repo}`,
            },
        });

        setPosts(data);
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/willry`).then((response) => {
            setProfile(response.data);
        });
    }, []);

    return (
        <BlogContext.Provider value={{ profile, fetchPosts, posts }}>
            {children}
        </BlogContext.Provider>
    );
}
