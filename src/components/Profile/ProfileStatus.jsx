import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activatedEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivatedEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status })
    }
  }

  render() {
    return <div>
      {
        !this.state.editMode &&
        <div>
          <span onDoubleClick={this.activatedEditMode}>{this.state.status || '----'}</span>
        </div>
      }

      {
        this.state.editMode &&
        <div>
          <input autoFocus={true}
                 onChange={this.onStatusChange}
                 onBlur={this.deactivatedEditMode}
                 value={this.state.status}
                 type="text"/>
        </div>
      }
    </div>
  }
}

export default ProfileStatus