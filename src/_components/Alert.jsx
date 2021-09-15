import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { alertAtom } from '_state';
import { useAlertActions } from '_actions';
import { history } from '_helpers';

export { Alert };

function Alert() {
    const alert = useRecoilValue(alertAtom);
    const alertActions = useAlertActions();

    useEffect(() => {
        // clear alert on location change
        const unlisten = history.listen(alertActions.clear);

        // stop the listener when component unmounts
        return unlisten;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!alert) return null;

    return (
        <div className="container">
            <div className="m-3">
                <div className={`alert alert-dismissable ${alert.type}`}>
                    <a className="close" onClick={alertActions.clear}>&times;</a>
                    {alert.message}
                </div>
            </div>
        </div>
    );
}
