import styled from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('border')}
  ${propToStyle('width')}
  ${propToStyle('minHeight')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('background')}
  background-color: ${(props) => (props.backgroundColor && get(props.theme, `colors.background.${props.backgroundColor}`))};

  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('paddingBottom')}

  ${propToStyle('position')}
  ${propToStyle('right')}

  ${propToStyle('width')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;
