import { createComponent } from 'cf-style-container';
import { Icon } from 'cf-component-icon';
import PropTypes from 'prop-types';

const Button = createComponent(
  props => ({
    backgroundColor: 'white',
    borderRadius: '3',
    padding: `${props.theme.space[1]}px ${props.theme.space[2]}px`,
    opacity: props.disabled ? '0.5' : '1',
    margin: props.theme.space[1],
    ':hover': {
      cursor: props.disabled ? 'initial' : 'pointer',
      backgroundColor: props.disabled ? 'white' : props.theme.color.moonshine
    }
  }),
  'button',
  ['disabled']
);

const ArrowButton = props => (
  <Button disabled={props.disabled}>
    <Icon type={props.type} color={props.color} />
  </Button>
);

ArrowButton.propTypes = {
  type: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool
};

export default ArrowButton;
