import React from 'react';
import Page from './components/page';
import { Table } from 'prototype-kit';
import OptionSelect, { CheckedOption } from 'govuk-react-components/components/option-select';
import { some, every, isEmpty } from 'lodash'

const columns = {
  site: [
    '2 Marsham Street',
    'Apollo House',
    'Croydon General Hospital, Research Centre',
    'Lunar House',
    'Metro Point',
    'Regus Building',
    'The Granby Research Centre',
    'Vulcan House',
  ],
  suitability: [
    'SA',
    'LA',
    'AQ',
    'AV'
  ],
  holding: [
    'STH',
    'NOH',
    'SEP',
    'NSEP',
    'LTH'
  ]
};

const matchesHelper = (row, values) => {
  if (!values.length) {
    return values;
  }
  return some(values, value => row.includes(value))
}

class Places extends Page {

  componentDidMount() {
    super.componentDidMount();
    this.setState({
      filters: {
        site: [],
        suitability: [],
        holding: []
      },
      data: this.props.data.places
    });
    this.onSelectChange = this.onSelectChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.emitChange = this.emitChange.bind(this);
  }

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      { label: 'Establishments', href: '/establishment-licences' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Schedule of Premises'
    ];
  }

  cell(key, value) {
    switch (key) {
      case 'nacwo':
        return <a href="/profile">{ value }</a>;
      default:
        return value;
    }
  }

  onSelectChange(e) {
    const filters = this.state.filters;
    const col = filters[e.target.name].slice();
    const colIndex = parseInt(e.target.value, 10) - 1;
    const value = columns[e.target.name][colIndex]
    const index = col.indexOf(value);
    if (index > -1) {
      col.splice(index, 1);
    } else {
      col.push(value)
    }
    filters[e.target.name] = col;
    this.setState({ filters });
  }

  filterData() {
    const data = this.props.data.places;
    if (!this.state || every(this.state.filters, isEmpty)) {
      return data;
    }
    return data.filter(row =>
      Object.keys(this.state.filters).reduce((matches, filter) =>
        matches && matchesHelper(row[filter], this.state.filters[filter]), true)
    );
  }

  emitChange() {
    this.setState({
      data: this.filterData()
    });
  }

  content() {
    // set the column headings
    const columns = {
      site: 'Site',
      area: 'Area',
      suitability: 'Suitability',
      holding: 'Holding',
      nacwo: 'NACWO',
      restrictions: 'Restrictions'
    };
    const establishment = this.establishment();

    return <React.Fragment>
      <header>
        <h2>{ establishment.name }</h2>
        <h1>Licensed premises</h1>
      </header>

      <h3>Filter by</h3>
      <div className="filters grid-row">
        <div className="column-one-third">
          <OptionSelect title="Site" >
            <CheckedOption name="site" id="box-1" onChange={this.onSelectChange} value="1">2 Marsham Street</CheckedOption>
            <CheckedOption name="site" id="box-2" onChange={this.onSelectChange} value="2">Apollo House</CheckedOption>
            <CheckedOption name="site" id="box-3" onChange={this.onSelectChange} value="3">Croydon General Hospital, Research Centre</CheckedOption>
            <CheckedOption name="site" id="box-4" onChange={this.onSelectChange} value="4">Lunar House</CheckedOption>
            <CheckedOption name="site" id="box-5" onChange={this.onSelectChange} value="5">Metro Point</CheckedOption>
            <CheckedOption name="site" id="box-6" onChange={this.onSelectChange} value="6">Regus Building</CheckedOption>
            <CheckedOption name="site" id="box-7" onChange={this.onSelectChange} value="7">The Granby Research Centre</CheckedOption>
            <CheckedOption name="site" id="box-8" onChange={this.onSelectChange} value="8">Vulcan House</CheckedOption>
          </OptionSelect>
        </div>
        <div className="column-one-third">
          <OptionSelect title="Suitability" onChange={this.onSelectChange}>
            <CheckedOption name="suitability" id="SA" onChange={this.onSelectChange} value="1">Small animals (SA)</CheckedOption>
            <CheckedOption name="suitability" id="LA" onChange={this.onSelectChange} value="2">Large animals (LA)</CheckedOption>
            <CheckedOption name="suitability" id="AQ" onChange={this.onSelectChange} value="3">Aquatic species (AQ)</CheckedOption>
            <CheckedOption name="suitability" id="AV" onChange={this.onSelectChange} value="4">Birds (AV)</CheckedOption>
          </OptionSelect>
        </div>
        <div className="column-one-third">
          <OptionSelect title="Holding" onChange={this.onSelectChange}>
            <CheckedOption name="holding" id="STH" onChange={this.onSelectChange} value="1">Short term holding (STH)</CheckedOption>
            <CheckedOption name="holding" id="NOH" onChange={this.onSelectChange} value="2">Not for overnight holding (NOH)</CheckedOption>
            <CheckedOption name="holding" id="SEP" onChange={this.onSelectChange} value="3">Sterile experimental procedures (SEP)</CheckedOption>
            <CheckedOption name="holding" id="NSEP" onChange={this.onSelectChange} value="4">Non-sterile experimental procedures (NSEP)</CheckedOption>
            <CheckedOption name="holding" id="LTH" onChange={this.onSelectChange} value="5">Long-term holding (LTH)</CheckedOption>
          </OptionSelect>
        </div>
      </div>
      <button className="button" onClick={() => this.emitChange()} style={{ marginBottom: '1em' }}>Apply filters</button>
      {
        this.state && this.state.data.length !== this.props.data.places.length
          ? <p>Showing { this.state.data.length } of { this.props.data.places.length } results</p>
          : <p>All { this.props.data.places.length } results</p>
      }
      <Table dataset={ this.state ? this.state.data : this.props.data.places } columns={ columns } formatter={ (key, value) => this.cell(key, value) } />
    </React.Fragment>
  }

}

export default Places;
