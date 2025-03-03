import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";
import { useEffect, useState } from "react";
import { QUERYSTRING } from "../../constants/querystring";
import { useLocation } from "react-router-dom";
import { ViewMode } from "./BooksViewSwitcher";

// const dummyBook:Book = {
//     id:1,
//     title: 'book',
//     img: 5,
//     category_id: 1,
//     form: 'paper',
//     isbn: 'isbn',
//     summary: 'summary',
//     detail: 'detail',
//     author: 'author',
//     pages: 100,
//     contents: 'contents',
//     price: 10000,
//     likes: 1,
//     pubDate: '2025-01-01',
// }

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  const [view, setView] = useState<ViewMode>('grid');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [location.search])

  return (
    <>
      <BooksListStyle view = {view}>
        {books.map((item) => (
          <BookItem key={item.id} book={item} view = {view}/>
        ))}
      </BooksListStyle>
    </>
  );
};

interface BooksListStyleProps {
  view: ViewMode;
}

const BooksListStyle = styled.div<BooksListStyleProps>`
  display: grid;
  grid-template-columns: ${({view}) => (view === 'grid' ? 'repeat(4, 1fr)' : 'repeat(1, 1fr')};
  gap: 24px;
`;

export default BooksList;
