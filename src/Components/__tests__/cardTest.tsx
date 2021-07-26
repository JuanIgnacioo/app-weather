import { render, screen, cleanup } from "@testing-library/react";
import CardWeather from "../CardWeather";

afterEach(()=>{
    cleanup();
})

test('Renderizado de card', ()=> {
    render(<CardWeather
        imageCode={null}
        date={'2021/07/25'}
        currentWeather={'Lluvioso'}
        temp={12}
        humidity={12}
        rainProb={12}/>);
    const card = screen.getByTestId('card-1');
     expect(card).toBeInTheDocument();     
})
