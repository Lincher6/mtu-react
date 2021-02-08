import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react"
import {Button} from '../Button/Button';
import classes from './Functional.module.scss';
import cn from 'classnames';

const Functional = (props) => {
    const [ state, setState ] = useState(() => {
        console.log('constructor');
        return { likes: 0 };
    });
    const initial = useRef(true);
    console.log('render');

    useLayoutEffect(() => {
        console.log('componentDidMount');
    }, [])

    useEffect(() => {
        console.log('componentDidMount (второй способ, после визуального рендера)');
        return () => {
            console.log('componentWillUnmount');
        }
    }, []);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        console.log('componentDidUpdate');
        console.log('');
    });

    // useCallback нужен для ссылочного равенства, в случае мемоизации потомков.
    const handleClick = useCallback(() => {
        console.log('click');
        // передаём колбек, чтобы избежать замыкания старого состояния.
        setState(state => ({
            ...state,
            likes: state.likes + 1
        }));
    }, []);

    // eslint-disable-next-line
    const memoizedComponent = useMemo(() => {
        if (initial.current) {
            return null;
        }
        console.log('shouldComponentUpdate (плохой способ, можно мемоизировать потомков на основе зависимостей)')
        return 'ChildComponent here';
    }, [state.likes]);

    return (
        // { memoizedComponent }
        <div className={classes.functional}>
            <h2>
                Text: <span className={classes.props}>{ props.text }</span>
            </h2>
            <hr/>
            <h2>
                Likes: <span className={classes.state}>{ state.likes }</span>
            </h2>
            <Button size={`small`} onClick={handleClick}>
                Likes +
            </Button>
            <hr/>
            <div className={classes.colors}>
                <div className={cn(classes.cell, classes.state)}/> - state
                <div className={cn(classes.cell, classes.props)}/> - props
            </div>
        </div>
    )
}

export default React.memo(Functional, (prevProps, nextProps) => {
    console.log('shouldComponentUpdate (вызывается только при изменении пропсов)');
    return false;
})