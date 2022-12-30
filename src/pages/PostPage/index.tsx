import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import {
    PostBody,
    PostContainer,
    PostInfo,
    PostInfoExternalLink,
    PostInfoLink,
    PostInfoNavigation,
    PostInfoTitle,
    PostTagItem,
    PostTags,
} from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import calendarIcon from "../../assets/calendar-icon.svg";
import commentsIcon from "../../assets/comments-icon.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Post } from "../../@types/global";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export function PostPage() {
    console.log(dracula);
    const [post, setPost] = useState<Post>();

    const { number } = useParams();

    const fetchPost = useCallback(async () => {
        const profile = "willry";
        const repo = "desafio-ignite-03-github-blog";

        const url = `https://api.github.com/repos/${profile}/${repo}/issues/${number}`;

        const { data } = await axios.get(url);

        setPost(data);
    }, []);

    useEffect(() => {
        fetchPost();
    }, [number]);
    return (
        <PostContainer>
            {post && (
                <div>
                    <PostInfo>
                        <PostInfoNavigation>
                            <PostInfoLink to={"/"}>
                                <CaretLeft size={16} weight="thin" />
                                Voltar
                            </PostInfoLink>
                            <PostInfoExternalLink
                                href={post.html_url}
                                target="_blank"
                            >
                                Ver no github
                                <ArrowSquareOut size={16} />
                            </PostInfoExternalLink>
                        </PostInfoNavigation>
                        <PostInfoTitle>{post.title}</PostInfoTitle>
                        <PostTags>
                            <PostTagItem>
                                <img src={githubIcon} />
                                {post.user.login}
                            </PostTagItem>
                            <PostTagItem>
                                <img src={calendarIcon} />
                                {formatDistance(
                                    new Date(post.created_at),
                                    new Date(),
                                    { addSuffix: true, locale: ptBR }
                                )}
                            </PostTagItem>
                            <PostTagItem>
                                <img src={commentsIcon} /> {post.comments}{" "}
                                comentários
                            </PostTagItem>
                        </PostTags>
                    </PostInfo>
                    <PostBody>
                        <ReactMarkdown
                            components={{
                                code({
                                    node,
                                    inline,
                                    className,
                                    children,
                                    style,
                                    ...props
                                }) {
                                    const match = /language-(\w+)/.exec(
                                        className || ""
                                    );
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            children={String(children).replace(
                                                /\n$/,
                                                ""
                                            )}
                                            style={dracula}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        />
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {post.body}
                        </ReactMarkdown>
                    </PostBody>
                </div>
            )}
        </PostContainer>
    );
}
