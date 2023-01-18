import React from "react";

const Link = ({href,className,children}) => {

    const onClick = (event) => {

        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({},'',href);   //to change url without refreshing the entire page

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} href={href} className={className}>
        {children}
    </a>;
};

export default Link;