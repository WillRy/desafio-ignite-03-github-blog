import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form";

interface FormInputType {
    q: string
}
export function SearchForm() {
    const { posts, fetchPosts } = useContext(BlogContext);

    const { register, handleSubmit } = useForm<FormInputType>();

    function handleSearchPosts(data: FormInputType) {
        fetchPosts(data.q);
    }

    return (
        <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <div>
                <label>Publicações</label>
                <span>{posts ? posts.total_count : 0} publicações</span>
            </div>
            <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register("q")}
            />
        </FormContainer>
    );
}
