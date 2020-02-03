export default function boxes(state = {}, { type, payload }) {
    switch (type) {
        case 'GET_CELEBRITIES_SUCCESS':
            return {
                ...state,
                payload
            }
        case 'GET_CELEBRITIES_FAILED':
            return {
                ...state,
                payload
            }
        default:
            return state
    };
};
