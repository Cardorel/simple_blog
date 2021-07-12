
export interface commentType{
    id: number;
    postId: number;
    body: string;
}

export interface PostType{
    id : number;
    title: string;
    body: string;
    comments : commentType[];
}