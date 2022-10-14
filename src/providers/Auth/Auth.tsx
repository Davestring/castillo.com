import { AuthContext } from 'contexts';
import React, { useEffect, useMemo } from 'react';
import { setupInterceptors } from 'services';

import { useAuth, useAuthReducer, useLogout, useRestoreSession } from './hooks';

export const Auth: React.FC<React.PropsWithChildren> = (props): JSX.Element => {
  const { children } = props;

  const [state, dispatch] = useAuthReducer();

  const authFn = useAuth(dispatch);

  const logoutFn = useLogout(dispatch);

  const context = useMemo(() => ({ authFn, logoutFn, ...state }), [state]);

  useRestoreSession(dispatch);

  useEffect(() => {
    setupInterceptors(logoutFn);
  }, []);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
