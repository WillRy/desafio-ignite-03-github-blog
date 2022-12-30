import { CircleNotch } from "phosphor-react";
import { LoadingContainer } from "./styles";

interface LoadingProps {
    padding?: string;
    size?: number;
}
export function Loading({ padding = "20px", size = 20 }: LoadingProps) {
    return (
        <LoadingContainer padding={padding}>
            <CircleNotch size={size} weight="thin" />
        </LoadingContainer>
    );
}
