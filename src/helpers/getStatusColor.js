import * as planetStatus from './planetStatus';

export const getStatusColor = (status) => {
    switch(status) {
        case planetStatus.STATUS_OK:
            return {color: 'green'};
        case planetStatus.STATUS_NOT_OK:
            return {color: 'red'};
        case planetStatus.STATUS_EN_ROUTE:
            return {color: 'grey'};
        default:
            return {color: 'black'};
    };
};