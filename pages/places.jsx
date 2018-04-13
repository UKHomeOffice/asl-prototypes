import React from 'react';
import { Page, Table } from 'prototype-kit';
import OptionSelect, { CheckedOption } from 'govuk-react-components/components/option-select';

class Places extends Page {


  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/home' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Schedule of premises'
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

      <h1>{ establishment.name }</h1>
      <h2>Schedule of Premises</h2>

      <h3>Filter by</h3>
      <div className="filters grid-row">
        <div className="column-one-third">
          <OptionSelect title="Site">
            <CheckedOption name="site" id="box-1" value="1">Apollo House</CheckedOption>
            <CheckedOption name="site" id="box-2" value="2">Athena Hall</CheckedOption>
            <CheckedOption name="site" id="box-3" value="3">Lunar House</CheckedOption>
            <CheckedOption name="site" id="box-4" value="4">Croydon Farm</CheckedOption>
            <CheckedOption name="site" id="box-5" value="5">Apollo House</CheckedOption>
            <CheckedOption name="site" id="box-6" value="6">Athena Hall</CheckedOption>
            <CheckedOption name="site" id="box-7" value="7">Lunar House</CheckedOption>
            <CheckedOption name="site" id="box-8" value="8">Croydon Farm</CheckedOption>
          </OptionSelect>
        </div>
        <div className="column-one-third">
          <OptionSelect title="Suitability">
            <CheckedOption name="suitability" id="SA">Small animals (SA)</CheckedOption>
            <CheckedOption name="suitability" id="LA">Large animals (LA)</CheckedOption>
            <CheckedOption name="suitability" id="AQ">Aquatic species (AQ)</CheckedOption>
            <CheckedOption name="suitability" id="AV">Birds (AV)</CheckedOption>
          </OptionSelect>
        </div>
        <div className="column-one-third">
          <OptionSelect title="Holding">
            <CheckedOption name="holding" id="STH">Short term holding (STH)</CheckedOption>
            <CheckedOption name="holding" id="NOH">Not for overnight holding (NOH)</CheckedOption>
            <CheckedOption name="holding" id="SEP">Sterile experimental procedures (SEP)</CheckedOption>
            <CheckedOption name="holding" id="NSEP">Non-sterile experimental procedures (NSEP)</CheckedOption>
            <CheckedOption name="holding" id="LTH">Long-term holding (LTH)</CheckedOption>
          </OptionSelect>
        </div>
      </div>
      <Table dataset={ this.props.data.places } columns={ columns } formatter={ (key, value) => this.cell(key, value) } />
    </React.Fragment>
  }

}

export default Places;
