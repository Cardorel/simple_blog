import Link from "next/link";
import { ArticleParagraph, GoToPost, NoPostFound, PostContent, PostHeader } from "./PostItem-styled-components";

export const EachPostItem = ({ posts }: any) =>
 posts.length > 0 ?
  posts &&
  posts.filter(({body , title} : any) => body.length != 0 || title.length != 0 ).map(({ id, title, body }: any) => (
    <PostContent key={id}>
      <PostHeader>{title.toLowerCase()}</PostHeader>
      <ArticleParagraph>
        {body.length > 500 ? body.substring(0, 500).toLowerCase() + "..." : body.toLowerCase()}
        <Link href={`/Posts/Detail/${id}`}>
          <GoToPost>Go To The Article</GoToPost>
        </Link>
      </ArticleParagraph>
    </PostContent>
  )) : <NoPostFound>No post...</NoPostFound>;
