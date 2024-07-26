import HeroSection from "../HeroSection/HeroSection.jsx";


function Main(props) {
    return(
        <main>
            <HeroSection/>
            {props.children}
        </main>
    );
}
export default Main;