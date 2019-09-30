import React from 'react'
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'
import Clock from './Clock'

const existingValue = localStorage.getItem('content')
const initialValue = Plain.deserialize(
    existingValue || 'Type Something!'
)

class Fart extends React.Component {
    state = {
        value: initialValue,
    }

    onChange = ({ value }) => {
        if (value.document !== this.state.value.document) {
            const content = Plain.serialize(value)
            localStorage.setItem('content', content)
        }

        this.setState({ value })
    }

    render() {
        return (
          <div className="middle">
            <div>
              <Clock />
            </div>
            <div className="editor">
              <Editor value={this.state.value} onChange={this.onChange} />
            </div>
          </div>
        );
    }
}

export default Fart
