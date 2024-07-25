import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ContentSection from "./components/ContentSection/ContentSection.jsx"
import Offer from    "./components/Offer/Offer.jsx"

import flower1 from "./assets/flower1.jpg"

function App() {
    return(
        <>
            <Header></Header>
            <Main>
                <ContentSection title="Bestsellers of 2024">
                    <Offer
                        imgSrc={flower1}
                        text="Flower Bouquet"
                    />
                </ContentSection>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default App
