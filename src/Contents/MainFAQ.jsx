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
        align-items: center;
        gap: 10px;
    }
`;
const Title = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    @media(max-width: 768px){
        font-size: 32px;
    }
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
            content: `Bisa, Kamu dapat meilhat bukti donasi yang telah kamu berikan pada update laporan pemasukan dan pengeluaran yang terkumpul sekarang terdapat pada halaman donasi.`,
        },
        {
            title: "Apakah artikel yang dihadirkan selalu diupdate?",
            content:"Ya, Artikel yang kami hadirkan akan selalu update sesuai informasi terbaru mengenai perkembangan pendidikan yang ada Indonesia.",
        },
        {
            title: "Apakah saya bisa menemukan komunitas Volunteer yang terpercaya?",
            content: `Bisa, Melalui website unicate kamu dapat menemukan komunitas Volunteer yang terpecaya tidak hanya itu kamu juga dapat bergabung pada komunitas Volunteer untuk membantu pendidikan anak-anak di Indonesia.`,
        },
        {
            title: "Apakah saya bisa berkomunikasi dengan volunteer lain melalui website ini?",
            content: `Bisa, Kamu bisa berkomunikasi dengan volunteer lain melalui volunteer yang ada di komunitas.`,
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