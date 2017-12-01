import { Motion, spring } from 'react-motion';
import { createComponent } from 'cf-style-container';
import Layout from '../components/layout';

const Wrapper = createComponent(({ theme }) => ({
  borderRadius: '4px',
  backgroundColor: theme.color.pine,
  position: 'relative',
  margin: '5px 3px 10px',
  width: '450px',
  height: '50px'
}));

const Square = createComponent(({ theme }) => ({
  position: 'absolute',
  width: '50px',
  height: '50px',
  borderRadius: '4px',
  backgroundColor: theme.color.marine
}));

const SPRING_CONFIG = {
  stiffness: 170,
  damping: 26
};

export default class Demo extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  render() {
    return (
      <Layout title="Motion">
        <button onClick={() => this.setState({ open: !this.state.open })}>
          Toggle
        </button>

        <Motion
          style={{
            x: spring(this.state.open ? 400 : 0, SPRING_CONFIG)
          }}
        >
          {({ x }) => (
            <Wrapper>
              <Square
                style={{
                  transform: `translate3d(${x}px, 0, 0)`
                }}
              />
            </Wrapper>
          )}
        </Motion>
      </Layout>
    );
  }
}
