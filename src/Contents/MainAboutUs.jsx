import Footer from '../Components/Footer'
import styled from 'styled-components'
import tim from '../Assets/tim.jpg'
import josua from '../Assets/josua.png'
import adellia from '../Assets/adell.png'
import ida from '../Assets/ida.png'
import iconig from '../Assets/instagramaboutus.png'
import roby from '../Assets/roby.png'
import fauzan from '../Assets/fauzan.png'
import dimas from '../Assets/dimas.png'
import kontak from '../Assets/contact.png'
import gambar2 from '../Assets/gambar2aboutus.png'
import gambar1 from '../Assets/gambar1aboutus.png'

import { Link } from "react-router-dom";

const Content = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;
const DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 94px;
    width: 70%;
    margin: auto;
    z-index: 2;
    @media(max-width: 425px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
    }
`;
const TopDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 100%;
`;
const Text = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 149.5%;
    @media(max-width: 768px){
        font-size: 28px;
    }
    @media(max-width: 425px){
        font-size: 14px;
    }
`
const ImageTop = styled.img`
    width: 100%;
    height: 437.07px;
    @media(max-width: 425px){
        width: 100%;
        height: 137.07px;
    }
`;

const BottomDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 25px;
    width: 80%;
    @media(max-width: 425px){
        width: 100%;
    }
`;

const Garis = styled.div`
    background: #000000;
    border-radius: 20px;
    width: 100%;
    height: 4px;
   
`;

const TeamName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 68px;
    @media (max-width: 425px){
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 10px;
    }
`;

const DetailNameTeam = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 149.5%;
    @media(max-width: 768px){
        font-size: 28px;
    }
    @media(max-width: 425px){
        font-size: 20px;
    }
`;

const LatarBelakang = styled.div`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 149.5%;
    @media (max-width: 768px){
        font-size: 16px;
    }
    @media (max-width: 425px){
        font-size: 12px;
    }
`;

const Intro = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 149.5%;
`;

const DetailTeam = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 42px;
    @media (max-width: 768px){
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 36px;
    }
    @media (max-width: 425px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

    }
`;

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 425px){
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const ProfilePicture = styled.img`
    width: 277px;
    height: 277px;
    @media (max-width: 992px) {
        width: 100px;
        height: 100px;

    }
`;

const BioDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
`;

const Nama = styled.div`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 149.5%;
    @media (max-width: 768px) {
        font-size: 12px;
        align-items: center;
        text-align: center;
    }
`;

const Job = styled.div`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 149.5%;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Socmed = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
    a{
        font-family: 'Calibri', 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #000000;
        text-decoration: none;
        @media (max-width: 768px) {
            font-size: 10px;

        }
    }
`;

const AkunIG = styled.img`
    width: 22px;
    height: 22px;
    @media(max-width: 768px){
        width: 18px;
        height: 18px;

    }
`;

const Contact = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
`;

const DetailContact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 4px;
    gap: 124px;
    width: 80%;
    margin: auto;
    @media (max-width: 768px) {
        gap: 80px;
        align-items: flex-end;
    }
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const DetailCP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    width: 60%;
    @media (max-width: 768px){
        width: 30%;
    }
    @media (max-width: 425px) {
        width: 60%;
    }
`;

const Help = styled.div`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 149.5%;
    @media(max-width: 425px){
        font-size: 12px;
        width: 100%;
    }
`;

const Garis2 = styled(Garis)`
    height: 1px;
    max-width: 100%;
`;

const DoContact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`;

const Button = styled.button`
    &:hover
    background-color: #009EFF;
    color: #FFFFFF;
    transition: .5s;
    transition-delay: .1s;
    text-decoration: none;
    border-radius: 20px;
    border: none;
    width: 225px;
    height: 50px;
    color: #fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 149.5%;
    @media (max-width: 725px){
        font-size: 14px;
        width: 150px;
        height: 50px;

    }
`;

const Call = styled.div`
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 149.5%;
    @media (max-width: 768px){
        font-size: 14px;

    }
`;

const ContactImage = styled.img`  
    width: 363px;
    height: 544.43px;
    @media (max-width: 672px){
        max-width: 60%;
    }
    @media (max-width:425px){
        max-width: 100%;
    }
`;

const Gambar = styled.img`
    width: 460px;
    height: 224.72px;
    @media(max-width: 768px){
        width: 260px;
        height: 124.72px;
    }
`;
const Gambar1 = styled(Gambar)`
    position: absolute;
    z-index: 1;
    right: 0px;
    top: 900px;
    @media (max-width: 768px) {
        width: 150px;
    }
`;

const MainAboutUs = () => {
    return(
        <>
        <Content>
            <DetailContent>
                <TopDetail>
                    <Text>About Us</Text>
                    <ImageTop src={tim} />
                </TopDetail>
                <BottomDetail>
                    <Garis />
                    <TeamName>
                        <DetailNameTeam>JARFID Peduli</DetailNameTeam>
                        <LatarBelakang>6 Sekawan dari berbagai daerah di Indonesia berkolaborasi dalam membangun pendidikan anak Indonesia. Mereka berniat membantu anak-anak yang membutuhkan pendidikan agar mendapat ilmu yang lebih baik lagi. Dengan jiwa nasionalisme yang mereka miliki , tentu saja mereka berharap Indonesia lebih maju lagi.</LatarBelakang>
                    </TeamName>
                    <Intro>Meet Our Team</Intro>
                    <DetailTeam>
                        <Bio>
                            <ProfilePicture src={josua} />
                            <BioDetail>
                                <Nama>Josua Ronaldo Pandiangan</Nama>
                                <Job>Designer UI/UX</Job>
                                <Socmed>
                                    <AkunIG src={iconig} />
                                    <a href='https://www.instagram.com/josua_ronaldo_/'>josua_ronaldo_</a>
                                </Socmed>
                            </BioDetail>
                        </Bio>
                        <Bio>
                            <ProfilePicture src={ida} />
                            <BioDetail>
                                <Nama>Ida Syafitri Nur Fatimah</Nama>
                                <Job>Project Manager</Job>
                                <Socmed>
                                    <AkunIG src={iconig} />
                                    <a href='https://www.instagram.com/ida_afi/'>ida_afi</a>
                                </Socmed>
                            </BioDetail>
                        </Bio>
                        <Bio>
                            <ProfilePicture src={adellia} />
                            <BioDetail>
                                <Nama>Adellia</Nama>
                                <Job>Designer UI/UX</Job>
                                <Socmed>
                                        <AkunIG src={iconig} />
                                        <a href='https://www.instagram.com/addeeee1_/'>addeeee1_</a>
                                </Socmed>
                            </BioDetail>
                        </Bio>
                    </DetailTeam>
                    <DetailTeam>
                        <Bio>
                            <ProfilePicture src={roby} />
                            <BioDetail>
                                <Nama>Robby Iqbal Dzulqifar</Nama>
                                <Job>Fullstack-Developer</Job>
                                <Socmed>
                                    <AkunIG src={iconig} />
                                    <a href='https://www.instagram.com/robbyidz_/'>robbyidz_</a>
                                </Socmed>
                            </BioDetail>
                        </Bio>
                        <Bio>
                            <ProfilePicture src={fauzan} />
                            <BioDetail>
                                <Nama>Fauzan Ubaid Fadhil</Nama>
                                <Job>Fullstack-Developer</Job>
                                <Socmed>
                                    <AkunIG src={iconig} />
                                    <a href='https://www.instagram.com/zn.fauzan/'>zn.fauzan</a>
                                </Socmed>
                            </BioDetail>
                        </Bio>
                        <Bio>
                            <ProfilePicture src={dimas} />
                            <BioDetail>
                                <Nama>Dimas Pamungkas Mursidi</Nama>
                                <Job>Fullstack-Developer</Job>
                                <Socmed>
                                        <AkunIG src={iconig} />
                                        <a href='https://www.instagram.com/dmspamungkass/'>dmspamungkass</a>
                                </Socmed>
                            </BioDetail>
                        </Bio>
                    </DetailTeam>
                </BottomDetail>
            </DetailContent>
            <Gambar1 src={gambar1} 
                     style={{width: "252.37px",
                            height: "129.85px",
                            marginLeft: "1159px",
                            marginTop: "410px"}}/>
        </Content>
        <Contact>
            <Gambar src={gambar2} />
            <DetailContact>
                <DetailCP>
                    <Text>Punya pertanyaan?<br></br>Tim kami senang membantu anda</Text>
                    <Help>Tanya seputar komunitas, donasi dan juga kisah inspirasi yang terdapat dalam unicate</Help>
                    <Garis2 />
                    <DoContact>
                        <Link to="/ContactUs">
                            <Button>Contact Us</Button>
                        </Link>
                        <Call>Or call (808) 555-000111</Call>
                    </DoContact>
                </DetailCP>
                <ContactImage src={kontak} />
            </DetailContact>
        </Contact>
        <Footer />
        </>
    )
}
export default MainAboutUs;