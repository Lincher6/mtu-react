import React from 'react';
import classes from './withPermission.module.scss'
import { Button } from '../Button/Button';

export function withPermission(Component, requiredPermission) {
    return ({ user, ...props }) => {
        const hasPermission = user.permissions.includes(requiredPermission);
        return hasPermission
            ? <Component { ...props}/>
            : <>
                <div className={classes.noAccess}>
                    <span>No Access</span>
                    <span>
                        Required permission:
                        <strong>{requiredPermission}</strong>
                    </span>
                    <Button size='small' color='error' type='outlined'>
                        Back
                    </Button>
                </div>

            </>
    }
}