import { mount } from 'staffSite/staffSiteApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({callbackReduxState}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      callbackReduxState
    });

    history.listen(onParentNavigate);
  }, []);

  return <div data-testid="authPages" ref={ref} />;
};
