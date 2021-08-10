import styled from 'styled-components';

export const DepositionsWrapper = styled.div`
  margin-top: 100px;
  padding: 0 5%;
`;

DepositionsWrapper.Container = styled.div`
  display: grid;
  grid-template-areas: "video double big";
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media(max-width: 1200px) {
    grid-template-columns: auto;
    grid-template-areas:
    "video video"
    "double big";
  }
  @media(max-width: 890px) {
    grid-template-areas:
    "video"
    "double"
    "big";
  }
`;

DepositionsWrapper.Box = styled.div`
  margin-top: 20px;
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

DepositionsWrapper.VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

DepositionsWrapper.ImageWrpper = styled.div`
  margin: 15px 20px 0 0;

  img {
    border-radius: 50%;
  }
`;

DepositionsWrapper.Deposition = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => `${theme.colors.primary.main.color}`};
    font-weight: bold;
    font-size: 18px;
    float: right;
  }
`;

DepositionsWrapper.DepositionText = styled.div``;
