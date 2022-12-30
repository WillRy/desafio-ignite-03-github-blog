export interface Profile {
    name: string
    bio: string
    avatar_url: string
    html_url: string
    login: string
    company?: string
    followers: number
}

export interface Post {
    url: string
    repository_url: string
    labels_url: string
    comments_url: string
    events_url: string
    html_url: string
    id: number
    node_id: string
    number: number
    title: string
    body: string
    created_at: string
    user: {
        login: string
    }
    comments: number
}

export interface Posts {
    total_count: number
    incomplete_results: boolean
    items: Post[]
}
