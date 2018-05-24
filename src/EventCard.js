import React, { Component } from 'react';

export default class eventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editToggle: false,
            editName: '',
            editTitle: '',
            editDesc: ''
        }
    }


    componentDidMount() {
        this.setState({
            editName: this.props.event.name,
            editTitle: this.props.event.title,
            editDesc: this.props.event.desc
        })
    }

    saveClick() {
        if (this.state.editToggle) {
            this.props.editEvent(this.props.event.id, this.state.editName, this.state.editTitle, this.state.editDesc)
        }
        this.setState({ editToggle: !this.state.editToggle })
    }

    render() {
        console.log(this.state)
        return (
            <div
                className='eventCard'>
                {
                    this.state.editToggle
                        ?
                        <div>
                            <input
                                value={this.state.editName}
                                onChange={e => this.setState({ editName: e.target.value })} />
                            <input
                                value={this.state.editTitle}
                                onChange={e => this.setState({ editTitle: e.target.value })} />
                            <textarea
                                value={this.state.editDesc}
                                onChange={e => this.setState({ editDesc: e.target.value })} />
                        </div>
                        :
                        <div>
                            <h4>{this.props.event.name}</h4>
                            <h4>{this.props.event.title}</h4>
                            <p>{this.props.event.desc}</p>
                        </div>
                }

                <button
                    onClick={() => this.saveClick()}>
                    {this.state.editToggle ? 'Save' : 'Edit'}
                </button>
                <button>Delete</button>
            </div >
        )
    }
}