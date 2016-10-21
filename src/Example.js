import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Example extends Component {
  render() {
    const level = this.props.level > 0 && this.props.level < 7 ? this.props.level : 1
    return <span styleName={`example example-${level}`}>
      {this.props.children}
    </span>
  }
}

Example.propTypes = {
  level: React.PropTypes.number
}

export default CSSModules(Example, styles, {allowMultiple: true})
