'use client';

import React from 'react';
import useCounterStore from '../store/counterStore';
import styles from '../styles/Counter.module.scss';


const Counter: React.FC = () => {
    const { count, increment, decrement } = useCounterStore();

    return (
        <div className={styles.counter}>
            <h1 className={styles.count}>Counter: {count}</h1>
            <button className={styles.button} onClick={increment}>Increment</button>
            <button className={styles.button} onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;