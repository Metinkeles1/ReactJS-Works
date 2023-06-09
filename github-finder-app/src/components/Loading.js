import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center mt-4'>
                <div className="spinner-border text-primary">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
}

export default Loading