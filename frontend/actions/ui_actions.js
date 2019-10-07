// export const openModal = 'OPEN_USER_MODAL';
// export const closeModal = 'closeModal';
// export const OPEN_PHOTO_MODAL = 'OPEN_PHOTO_MODAL';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
