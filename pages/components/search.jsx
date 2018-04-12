import React from 'react';

class Search extends React.Component {

  componentDidMount() {
    this.setState({ value: '' });
  }

  submit(e) {
    e.preventDefault();
    this.props.onChange(this.state.value);
  }

  render() {
    return <form onSubmit={e => this.submit(e)}>
      <div className="form-group search-box">
        <label className="form-label" htmlFor="search">
          <span className="form-label-bold">{this.props.label}</span>
          { this.props.hint && <span className="form-hint">{this.props.hint}</span> }
        </label>
        <p>
          <input
            className="form-control"
            id="search"
            name="search"
            type="text"
            value={ this.state ? this.state.value : '' }
            onChange={e => this.setState({ value: e.target.value })}
            />
          <button type="submit"></button>
        </p>
      </div>
    </form>;

  }

}

export default Search;
