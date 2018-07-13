import React from 'react';
import { graphql } from 'react-apollo';

import standupQuery from '../../queries/standupQuery';

class StandupList extends React.Component {
  render() {
    let { loading, error, standups } = this.props.data;
    if (loading) {
      return <div>Loading ...</div>;
    }
    if (error) {
      console.log('stand up list error:', error);
      return <div>standup list Error</div>;
    }
    const wrapper = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
    const table = {
      borderCollapse: 'collapse',
      marginBottom: '1rem',
    };
    const vertLines = {
      borderLeft: '1px solid grey',
      padding: '0 1rem',
    };
    return (
      <div style={wrapper}>
        <h1>My Standups</h1>
        <table style={table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Did Yesterday</th>
              <th>Will Do Today</th>
              <th>Blocks</th>
            </tr>
          </thead>
          <tbody>
            {standups.map((s, i) => {
                const bits = s.created.split(' ');
                const created = `${bits[1]} ${bits[2]} ${bits[3]}`;
                const v = {
                  ...vertLines,
                  backgroundColor: i % 2 ? '#93f0c9' : 'inherit'
                };
                return (
                  <tr key={s.id}>
                    <td style={v}>{created}</td>
                    <td style={v}>{s.have_done}</td>
                    <td style={v}>{s.will_do}</td>
                    <td style={v}>{s.blocked}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(standupQuery, {
  options: ownProps => ({
    variables: {
      username: ownProps.match.params.username
    }
  })
})(StandupList);
