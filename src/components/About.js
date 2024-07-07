import User from "./User";
const About = ()=>{
    const name = "ruchi verma";
    return (<div className = "about">
        About us
        <User a={name} />
    </div>);
};

export default About;