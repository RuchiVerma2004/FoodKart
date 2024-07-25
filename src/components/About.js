import User from "./User";
const About = ()=>{
    console.log("About page is called");
    const name = "ruchi verma";
    return (<div className = "about">
        About us
        <User a={name} />
    </div>);
};

export default About;