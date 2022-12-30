import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading";
import { DefaultLayout } from "./layouts/DefaultLayout";
// import { Home } from "./pages/Home";
// import { PostPage } from "./pages/PostPage";

const Home = lazy(() =>
    import("./pages/Home").then(({ Home }) => ({ default: Home }))
);

const PostPage = lazy(() =>
    import("./pages/PostPage").then(({ PostPage }) => ({
        default: PostPage,
    }))
);

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        path="/"
                        element={
                            <Suspense
                                fallback={<Loading size={60} padding="10px" />}
                            >
                                <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/post/:number"
                        element={
                            <Suspense
                                fallback={<Loading size={60} padding="10px" />}
                            >
                                <PostPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
