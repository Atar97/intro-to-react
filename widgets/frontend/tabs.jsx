import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  render() {
    return (<div className="tabs">
    <ul>
      {this.props.tabs.map((tab, idx) => (
          <li index={idx} onClick={this.selectTab} key={tab.title}>{tab.title}</li>
        ))}
    </ul>
    <p>{this.props.tabs[this.state.selectedTab].content}</p>

    </div>);
  }

  selectTab(event){
    this.setState({ selectedTab: event.target.getAttribute('index')});
  }
}

export default Tabs;
