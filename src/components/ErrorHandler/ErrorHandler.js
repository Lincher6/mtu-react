import React from 'react';
import classes from './ErrorHandler.module.scss';
import { Button } from '../Button/Button';

export class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: {},
            componentStack: null,
            stackOpen: false
        };
        this.tryAgain = this.tryAgain.bind(this);
        this.toggleStack = this.toggleStack.bind(this);
    }


    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, { componentStack }) {
        this.setState({
            error,
            componentStack
        })
    }

    tryAgain() {
        this.setState({
            hasError: false,
            error: {},
            componentStack: null,
            stackOpen: false
        })
    }

    toggleStack() {
        this.setState({ stackOpen: !this.state.stackOpen})
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={classes.error}>
                    <div className={classes.message}>
                        {this.state.error.message}
                    </div>
                    { this.state.stackOpen &&
                        <div className={classes.stack}>
                            {this.state.componentStack}
                        </div>
                    }
                    <Button
                        type={`outlined`}
                        color={`error`}
                        size={`small`}
                        onClick={this.toggleStack}
                    >
                        { this.state.stackOpen
                            ? <span>close stack &#8593;</span>
                            : <span>open stack &#8595;</span>
                        }
                    </Button>
                    <br/>
                    <Button onClick={this.tryAgain}>
                        Try again
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}