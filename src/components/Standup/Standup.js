import React from 'react';
import { graphql } from 'react-apollo';

import createStandup from "../../mutations/createStandup";

class Standup extends React.Component {
  state = {
    haveDone: "",
    willDo: "",
    blocked: "",
  };
  componentDidMount() {
    console.log('standup mounted props:', this.props);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSave = () => {
    const { haveDone, willDo, blocked } = this.state;
    const user_id = localStorage.getItem('user_id');
    this.props
      .mutate({
        variables: {
          user_id,
          have_done: haveDone,
          will_do: willDo,
          blocked,
        }
      })
      .then(({ data }) => {
        console.log('save response data:', data);
        const username = localStorage.getItem('username');
        this.props.history.push(`/standups/${username}`);
      })
      .catch(err => {
        console.error(err);
      });
  };
  render = () => {
    const { haveDone, willDo, blocked } = this.state;
    const wrapper = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };
    const style = {
      margin: '1rem',
      display: 'flex',
      justifyContent: 'flex-end',
    };
    return (
      <div style={wrapper}>
        <h1>New Standup</h1>
        <form>
          <div style={style}>
            <label htmlFor="haveDone" >What I did yesterday&nbsp;</label>
            <input name="haveDone" value={haveDone} onChange={this.onChange} />
          </div>
          <div style={style}>
            <label htmlFor="willDo" >What I will do today&nbsp;</label>
            <input name="willDo" value={willDo} onChange={this.onChange} />
          </div>
          <div style={style}>
            <label htmlFor="blocked" >Blocks&nbsp;</label>
            <input name="blocked" value={blocked} onChange={this.onChange}/>
          </div>
          <div style={style}>
            <button type="button" onClick={this.onSave} className="submitBtn" >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };
}


export default graphql(createStandup)(Standup);
