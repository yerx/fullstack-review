import React from 'react';
import RepoList from './RepoList.jsx';

const RepoEntry = (props) => (
  <div>
    <h2>this is the repo entry</h2>
    <tr>
    <td className="username">{props.repo.ownerLogin}</td>
    <td className="repo">{props.repo.name}</td>
    <td className="repo-url">{props.repo.html_url}</td>
    <td className="stars">{props.repo.stargazers_count}</td>
    </tr>
  </div>

)

export default RepoList;