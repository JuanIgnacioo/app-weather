import { render, screen, cleanup } from "@testing-library/react";
import HeaderApp from "../HeaderApp";

afterEach(()=>{
    cleanup();
})

test('Lo que debe renderizar el Header', ()=> {
    const title = 'Weather app';
    render(<HeaderApp title={title}/>);
    const header = screen.getByTestId('header-1');
     expect(header).toBeInTheDocument();
     expect(header).toHaveTextContent(title);
})
