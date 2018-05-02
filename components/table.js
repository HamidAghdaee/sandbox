import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'cf-component-select';
import { createComponent } from 'cf-style-container';
import { Box } from 'cf-component-box';
import { Label } from 'cf-component-label';
import { Icon } from 'cf-component-icon';
import moment from 'moment';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from 'cf-component-table';
import { REPO } from '../pages/index';

const MyLabel = createComponent(
  ({ color }) => ({
    background: color,
    marginRight: 4
  }),
  Label
);

class TableComponent extends React.Component {
  render() {
    const { issues, labels, appliedLabels, onChangeLabels } = this.props;
    return (
      <Table bordered loading={false} errored={false} empty={false}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Box maxWidth={600}>
                <Select
                  label="Labels"
                  searchable
                  multi
                  value={appliedLabels}
                  options={labels.map(label => ({
                    value: label.id,
                    label: label.name
                  }))}
                  onChange={onChangeLabels}
                />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.map(issue => (
            <TableRow key={issue.id}>
              <TableCell>
                <Box display="flex" justifyContent="space-between">
                  <Box display="block">
                    <div>
                      <a href={`https://github.com/${REPO}/issues`}>
                        {issue.title}
                      </a>{' '}
                      {issue.labels.map(label => (
                        <MyLabel
                          key={label.name}
                          type="default"
                          color={`#${label.color}`}
                        >
                          {label.name}
                        </MyLabel>
                      ))}
                    </div>
                    <small>
                      #{issue.number} ({issue.state})
                    </small>{' '}
                    opened{' '}
                    {moment
                      .duration(moment(issue.created_at).diff(moment()))
                      .humanize()}{' '}
                    ago by{' '}
                    <a href={`https://github.com/${issue.user.login}`}>
                      {issue.user.login}
                    </a>
                  </Box>
                  <Box display="flex">
                    <Box>
                      {issue.assignees.map(assignee => (
                        <a
                          key={assignee.login}
                          href={`https://github.com/${assignee.login}`}
                        >
                          <img
                            src={assignee.avatar_url}
                            title={assignee.login}
                            alt={assignee.login}
                            width={36}
                          />
                        </a>
                      ))}
                    </Box>
                    <Box marginLeft={16} fontSize={24}>
                      {issue.comments}{' '}
                      <a href={`https://github.com/${REPO}/issues`}>
                        <Icon label="comments" type="speech" size="1.5x" />
                      </a>
                    </Box>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TableComponent.propTypes = {
  issues: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  appliedLabels: PropTypes.array.isRequired,
  onChangeLabels: PropTypes.func.isRequired
};

export default TableComponent;
