import { fireEvent, render, screen } from "@testing-library/react"
import Post from '..'
import PostComment from '..'

describe('Teste para os comentários', () => {
    test('Deve renderizar o comentario', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
    test('Deve adicionar primeiro comentario', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "primeiro comentario"
            }
        });
        fireEvent.click(screen.getByTestId("btn-comentario"));
        expect(screen.getByText("primeiro comentario").toBeInTheDocument())
    })
})  