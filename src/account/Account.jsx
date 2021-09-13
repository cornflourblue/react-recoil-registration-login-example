import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '_state';
import { Login, Register } from './';

export { Account };

function Account({ history, match }) {
    const auth = useRecoilValue(authAtom);
    const { path } = match;

    useEffect(() => {
        // redirect to home if already logged in
        if (auth) history.push('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <Switch>
                        <Route path={`${path}/login`} component={Login} />
                        <Route path={`${path}/register`} component={Register} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}
