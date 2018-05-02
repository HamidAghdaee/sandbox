import Layout from '../components/layout';
import Table from '../components/table';

export const REPO = 'rofrischmann/fela';

const handleError = () => console.error('Something went wrong');
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      labels: [],
      appliedLabels: []
    };
  }

  onChangeLabels = values => {
    const newLabelIds = values.map(selected => selected.value);
    const newLabelNames = values.map(selected => selected.label);
    fetch(
      `//api.github.com/repos/${REPO}/issues?labels=${newLabelNames.join(',')}`
    )
      .then(response => response.json())
      .then(issues => this.setState({ issues }))
      .catch(handleError);
    this.setState({
      appliedLabels: newLabelIds
    });
  };

  componentDidMount() {
    fetch(`//api.github.com/repos/${REPO}/issues`)
      .then(response => response.json())
      .then(issues => this.setState({ issues }))
      .catch(handleError);
    fetch(`//api.github.com/repos/${REPO}/labels`)
      .then(response => response.json())
      .then(labels => this.setState({ labels }))
      .catch(handleError);
  }

  render() {
    const { issues, labels, appliedLabels } = this.state;
    return (
      <Layout>
        <Table
          issues={issues}
          labels={labels}
          appliedLabels={appliedLabels}
          onChangeLabels={this.onChangeLabels}
        />
      </Layout>
    );
  }
}

export default Index;
