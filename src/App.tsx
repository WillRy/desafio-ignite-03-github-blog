import { ThemeProvider } from "styled-components";
import { BlogContextProvider } from "./contexts/BlogContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/globa";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BlogContextProvider>
                <Router />
                <GlobalStyle />
            </BlogContextProvider>
        </ThemeProvider>
    );
}
