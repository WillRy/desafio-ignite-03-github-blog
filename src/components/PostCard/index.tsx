import { Post } from "../../@types/global";
import { Card } from "./styles";
import { CardHeader, CardPreview, CardPublishedAt, CardTitle } from "./styles";
import { formatDistance } from "date-fns";
import ReactMarkdown from "react-markdown";
import { ptBR } from "date-fns/locale";

interface PostCardProps {
    post: Post;
}
export function PostCard({ post }: PostCardProps) {
    return (
        <Card to={`/post/${post.number}`}>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardPublishedAt>
                    {formatDistance(new Date(post.created_at), new Date(), {
                        addSuffix: true,
                        locale: ptBR,
                    })}
                </CardPublishedAt>
            </CardHeader>
            <CardPreview>
                <ReactMarkdown>{post.body.substring(0, 180)}</ReactMarkdown>
            </CardPreview>
        </Card>
    );
}
