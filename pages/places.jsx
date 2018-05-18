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
    {
      label: 'Small animals',
      value: 'SA'
    },
    {
      label: 'Large Animals',
      value: 'LA'
    },
    {
      label: 'Aquatic species',
      value: 'AQ'
    },
    {
      label: 'Birds',
      value: 'AV'
    },
    {
      label: 'Non-human primates',
      value: 'NHP'
    }
  ],
  holding: [
    {
      label: 'Short term holding',
      value: 'STH'
    },
    {
      label: 'Not for overnight holding',
      value: 'NOH'
    },
    {
      label: 'Sterile experimental procedures',
      value: 'SEP'
    },
    {
      label: 'Non-sterile experimental procedures',
      value: 'NSEP'
    },
    {
      label: 'Long-term holding',
      value: 'LTH'
    }
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
    this.clearFilters = this.clearFilters.bind(this);
    this.isChecked = this.isChecked.bind(this);
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
        return <a href="/profile">{ value }</a> || '-';
      default:
        return value || '-';
    }
  }

  onSelectChange(e) {
    const filters = this.state.filters;
    const col = filters[e.target.name].slice();
    const value = e.target.value;
    if (e.target.checked) {
      col.push(value)
    } else {
      const index = col.indexOf(value);
      col.splice(index, 1);
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

  clearFilters(e) {
    e.preventDefault();
    this.setState({
      data: this.props.data.places,
      filters: {
        site: [],
        suitability: [],
        holding: []
      }
    });
  }

  emitChange() {
    this.setState({
      data: this.filterData()
    });
  }

  isChecked(key, value) {
    if (!this.state) {
      return false;
    }
    value = value.value || value;
    const { filters } = this.state;
    return filters[key].includes(value);
  }

  content() {
    // set the column headings
    const headers = {
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
        {
          Object.keys(columns).map(key => (
            <div className="column-one-third" key={key}>
              <OptionSelect title={`${key.charAt(0).toUpperCase()}${key.substr(1)}`}>
                {
                  columns[key].map((item, index) =>
                    <CheckedOption
                      name={key}
                      id={`${key}-${index}`}
                      onChange={this.onSelectChange}
                      value={item.value ? item.value : item}
                      checked={this.isChecked(key, item)}
                      >
                      {
                        item.label ? `${item.label} (${item.value})` : item
                      }
                    </CheckedOption>
                  )
                }
              </OptionSelect>
            </div>
          ))
        }
      </div>
      <p className="control-bar">
        <button className="button" onClick={() => this.emitChange()}>Apply filters</button>
        <a href="#" onClick={this.clearFilters}>Clear filters</a>
      </p>
      {
        this.state && this.state.data.length !== this.props.data.places.length
          ? <p>Showing { this.state.data.length } of { this.props.data.places.length } results</p>
          : <p>All { this.props.data.places.length } results</p>
      }
      <Table dataset={ this.state ? this.state.data : this.props.data.places } columns={ headers } formatter={ (key, value) => this.cell(key, value) } />
    </React.Fragment>
  }

}

export default Places;
