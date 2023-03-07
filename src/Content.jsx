import React, {createRef} from 'react'

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.refElement = createRef(null)
  }
  render() {
    return (
      <div
        ref={this.refElement}
        onInput={this.emitChange}
        onBlur={this.emitChange}
        contentEditable
        spellCheck="false"
        dangerouslySetInnerHTML={{ __html: this.props.value }}
      ></div>
    )
  }

  shouldComponentUpdate(nextProps) {
    const { current: div } = this.refElement
    console.log("다시?", (nextProps.value !== div.innerText))
    return nextProps.value !== div.innerText
  }

  emitChange = () => {
    const div = this.refElement.current
    var value = div.innerText
    if (this.props.onChange && value !== this.lastValue) {
      this.props.onChange({
        target: {
          value
        }
      })
    }
    this.lastValue = value
  }
}

export default Content
