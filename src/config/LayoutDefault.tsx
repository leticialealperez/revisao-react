import React, { ReactNode } from 'react';
import './style.css';

interface LayoutDefaultProps {
    children: ReactNode;
    textAppBar?: string;
    textFooter?: string;
}

function LayoutDefault(props: LayoutDefaultProps) {
    return (
        <React.Fragment>
            <div className='default'>
                {props.textAppBar ?? 'TEXTO DEFAULT'}
            </div>
            {props.children}
            <div className='default'>
                {props.textFooter ?? 'texto default footer'}
            </div>
        </React.Fragment>
    )
}

export { LayoutDefault }