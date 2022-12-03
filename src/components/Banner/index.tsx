import styled from 'styled-components';

interface BannerProps {
    image: string;
    
}

const Banner = styled.header<BannerProps>`
    width: 100vw;
    height: 60vh;
    background-image: url(${(props) => props.image});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    li {

    }


`

interface TituloBannerProps {
    cor?: string;
}

const TituloBanner = styled.h1<TituloBannerProps>`
 
    color: ${(props) => props.cor ?? 'white'};
    font-size: 5rem;
  
`

export { Banner, TituloBanner }