import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoEntry from './components/RepoEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.updateRepoResults = this.updateRepoResults.bind(this);
  }

  componentDidMount() {
    this.updateRepoResults();
  }

  updateRepoResults() {
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'GET',
    })
    // done does not pass any data
    .then((response) => {
      // will the data returned be an array of objects?
      console.log('get data', response)
      // let newRepoList = data;
      // this.setState({repos: response.data})
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: 'http://localhost:1128/repos',
      method: 'POST',
      data: {
        username: term,
      }
    })
    .then(() => {
      this.updateRepoResults();
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList
        repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));