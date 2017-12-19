import { createComponent } from 'cf-style-container';
import StatusIcon from '@cloudflare/cf-component-zone-selector/lib/StatusIcon';
import { Icon } from 'cf-component-icon';

const Status = createComponent(props => ({
  color: props.theme.color.storm,
  paddingTop: props.theme.space[1],
  fontSize: props.theme.fontSizes[2]
}));

const Box = createComponent(
  props => ({
    padding: `${props.theme.space[2]}px ${props.theme.space[3]}px`,
    margin: props.theme.space[1],
    color: props.theme.color.dusk,
    backgroundColor: 'white',
    border: `1px solid ${props.theme.color.smoke}`,
    borderRadius: 3,
    ':hover': {
      cursor: 'pointer',
      color: props.theme.color.marine,
      border: `1px solid ${props.theme.color.hail}`
    }
  }),
  'div'
);

const Card = props => (
  <Box>
    {props.name}
    <Status>
      <StatusIcon key="statusIcon" label="Active" status="active" />
      {props.status}
    </Status>
  </Box>
);

export default Card;
