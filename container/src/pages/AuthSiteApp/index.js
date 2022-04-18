import { mount } from 'authSite/authSiteApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({callbackReduxState, callbackReduxActions, SignInCallback}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      callbackReduxState,
      callbackReduxActions,
      SignInCallback,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div data-testid="authPages" ref={ref} />;
};
