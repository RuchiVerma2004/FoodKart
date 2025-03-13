import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"


test("Should load contact us component", ()=>{

    render(<Contact/>);

    // Querrying the DOM
    const heading = screen.getAllByRole("heading");

    console.log(heading);

    //Assertion
    expect(heading.length).toBe(2);    


});