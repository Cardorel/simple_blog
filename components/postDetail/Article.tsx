import {
  DetailPostContainer,
  DetailPostHeader,
} from "./detail-styled-components";

interface ArticleType {
  title: string;
  body: string;
}

export const Article = ({ title, body }: ArticleType) => (
  <DetailPostContainer>
    <DetailPostHeader>{title.toLowerCase()}</DetailPostHeader>
    <p>{body.toLowerCase()}</p>
  </DetailPostContainer>
);
