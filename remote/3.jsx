class CMP extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div>Hello from <strong>THIRD</strong> remote component!</div>
      <div>{this.props.now}</div>
    </div>
  }
}

module.exports = CMP;