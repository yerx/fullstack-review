import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => {

    return (
      <div>
        <h4> Repo List Component </h4>
        <p>There are {props.repos.length} repos.</p>
        <table>
          <tbody>{props.repos.map(repo =>
            <RepoEntry
              key={repo.id}
              repo={repo} />
            )}
          </tbody>
        </table>
      </div>
    )



}



export default RepoList;