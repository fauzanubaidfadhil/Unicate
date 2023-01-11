import React from 'react'
import styled from 'styled-components'
// import {FiSearch} from 'react-icons/fi'
import gambar1 from '../Assets/Ellipse 171.png'
import gambar2 from '../Assets/Ellipse 172.png'
import gambar3 from '../Assets/Ellipse 173.png'
import Faq from "react-faq-component";
// import { IoMdSearch } from 'react-icons/io';

const FAQSection = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 20px;
`;
const FAQTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
    @media(max-width: 600px){
        display: flex;
        align-items: flex-start;
    }
`;
const Title = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
`;
const SubTitle = styled.div`
    font-size: 20px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.5);
`;
// const Field = styled.div`

// `;

const Search = styled.div`
  padding: .5rem;
  position: relative;
  display: flex;  
  align-items: center;
  width: 80%;
  border-radius: 20px;
  height:63px;
`

const SearchBar = styled.input`
  padding: 1rem 1rem 1rem 3.5rem;
  width: 100%;
  border-radius: 20px;
`;
const FAQDetail = styled.div`
    display: flex;
    width: 60%;
    padding-top: 10px;
    justify-content: center;

`;
// const Ask = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 0px;
//     gap: 32px;
//     width: 100%;
// `;
const Text = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    @media(max-width: 600px){
        display: flex;
        text-align: center;
        font-size: 10px;
    }
`
// const Line = styled.div`
//     width: 100%;
//     height: 2px;
//     background: rgba(0, 0, 0, 0.3);
// `;
const ContactUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
const Button = styled.button`
    background: #009EFF;
    border-radius: 20px;
    border: none;
    width: 160px;
    height: 44px;
    color: #ffffff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`;
const Gambar = styled.div`
    width: 140px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
`;
const IMG = styled.img`
    width: 70px;
    height: 70px;
    left: 0px;
    top: 0px;
`;

const IMG2 = styled.img`
    width: 70px;
    height: 70px;
    left: 70px;
    top: 0px;
`;
const IMG3 = styled.img`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const data = {
    rows: [
        {
            title: "Apakah saya bisa menemukan bukti dari donasi yang telah saya berikan?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Apakah saya bisa menemukan bukti dari donasi yang telah saya berikan?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Apakah saya bisa menemukan bukti dari donasi yang telah saya berikan?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "Apakah saya bisa menemukan bukti dari donasi yang telah saya berikan?",
            content: <p>current version is 1.2.1</p>,
        },
    ]
    
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    fontFamily: 'Poppins', fontSize: '16px', fontWeight: 'bold',

    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

const MainFAQ = () => {

    return(
        <FAQSection>
            <FAQTitle>
                <Title>Frequently Asked Questions</Title>
                <SubTitle>Punya pertanyaan? Kami akan membantu anda</SubTitle>
                <Search>
                    <SearchBar 
                        id="search-bar" 
                        type="text"
                        placeholder="Search">
                    </SearchBar>
                </Search>
            </FAQTitle>
            <FAQDetail>
                <Faq 
                    data={data}
                    styles={styles}
                    config={config}
                />
            </FAQDetail>
            <ContactUs>
                <Gambar>
                    <IMG src={gambar1} />
                    <IMG2 src={gambar2} />
                    <IMG3 src={gambar3} />
                </Gambar>
                <Text>Belum menemukan pertanyaan yang anda butuhkan? Hubungi tim kami langsung.</Text>
                <Button>Contact Us</Button>
            </ContactUs>
        </FAQSection>
    )
}

export default MainFAQ;