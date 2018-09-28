import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  render() {
    return (<div>
    <ul>
      {this.props.tabs.map((tab) => (
          <li key={tab.title}>{tab.title}</li>
        ))}
    </ul>
    <p>{this.props.tabs[this.state.selectedTab].content}</p>

    </div>);
  }

}

export default Tabs;
