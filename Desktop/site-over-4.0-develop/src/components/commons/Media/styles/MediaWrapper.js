import styled from 'styled-components';

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
`;

MediaWrapper.SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

MediaWrapper.SocialMedia = styled.div`
  & + & {
    margin-left: 30px;
  }
`;
