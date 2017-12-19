import { createComponent } from 'cf-style-container';

const Range = createComponent(props => ({
  fontWeight: 700,
  display: 'inline'
}));

const DescriptionGroup = createComponent(
  props => ({
    color: props.theme.color.dusk,
    paddingLeft: props.theme.space[2],
    fontSize: props.theme.fontSizes[3]
  }),
  'span'
);

const Description = props => (
  <DescriptionGroup>
    <Range>1-13</Range> of <Range>56</Range> Websites
  </DescriptionGroup>
);

export default Description;
