import React from 'react';
import RepoList from './RepoList.jsx';

class RepoEntry extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick() {
    let url = `https://github.com/${this.props.repo.ownerLogin}/${this.props.repo.name}`

    window.location.href = url;
  }

  render() {
    return (
      <tr onClick={this.handleClick}>
        <td className="username">{this.props.repo.ownerLogin}</td>
        <td className="repo">{this.props.repo.name}</td>
        <td className="repo-url">{this.props.repo.html_url}</td>
        <td className="stars">{this.props.repo.stargazers_count}</td>
      </tr>
    )
  }
}


export default RepoEntry;