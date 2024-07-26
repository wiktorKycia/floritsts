import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ContentSection from "./components/ContentSection/ContentSection.jsx"
import Offer from    "./components/Offer/Offer.jsx"

import flower1 from "./assets/flower1.jpg"
import flower2 from "./assets/flower2.jpg"
import flower3 from "./assets/flower3.jpg"
import flower4 from "./assets/flower4.jpg"
import flower5 from "./assets/flower5.jpg"
import flower6 from "./assets/flower6.jpg"
import flower7 from "./assets/flower7.jpg"
import flower8 from "./assets/flower8.jpg"
import flower9 from "./assets/flower9.jpg"
import flower10 from "./assets/flower10.jpg"
import flower11 from "./assets/flower11.jpg"
import flower12 from "./assets/flower12.jpg"
import flower13 from "./assets/flower13.jpg"
import flower14 from "./assets/flower14.jpg"
import flower15 from "./assets/flower15.jpg"


function App() {
    const flowers = [flower1, flower2, flower3, flower4, flower5, flower6, flower7, flower8, flower9, flower10, flower11, flower12, flower13, flower14, flower15];
    const offers = new Array(15);
    for(let i = 0; i < offers.length; i++) {
        offers[i] = {
            image: flowers[Math.floor(Math.random() * flowers.length)],
            text: "Flower Bouquet"
        }
    }
    return(
        <>
            <Header></Header>
            <Main>
                <ContentSection title="Bestsellers of 2024">
                    <Offer
                        image={flower1}
                        text="Flower Bouquet"
                    />
                    {offers.map((offer, index) => (
                        <Offer key={index} image={offer.image} text={offer.text}/>
                    ))}
                </ContentSection>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default App
