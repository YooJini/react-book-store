import {render, screen} from '@testing-library/react'
import Title from './Title';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe("Title 컴포넌트 테스트", () => {
    it('렌더 확인', () => { 
        render(
            <BookStoreThemeProvider>
            <Title size = 'large'>제목</Title>
            </BookStoreThemeProvider>
        );

        expect(screen.getByText('제목')).toBeInTheDocument();
     });

     it('size props', () => {
        const {container} = render(
            <BookStoreThemeProvider>
            <Title size = 'large'>제목</Title>
            </BookStoreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle({fontSize: "2rem"});
     });
});