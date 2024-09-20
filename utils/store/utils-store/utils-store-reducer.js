const INITIAL_VALUE = {
    scene1I: null,
    scene1P: null,
    scene2I: null,
    scene2P: null,
    scene3I: null,
    scene3P: null,
    scene4I: null,
    scene4P: null,
    scene5I: null,
    scene5P: null,
    project: null,
    clickable: null,
    night: false,
    modal: null
}

const utilsReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type) {
        case 'SET_SCENE1I':
            return {
                ...state,
                scene1I: payload
            }
        case 'SET_SCENE1P':
            return {
                ...state,
                scene1P: payload
            }
        case 'SET_SCENE2I':
            return {
                ...state,
                scene2I: payload
            }
        case 'SET_SCENE2P':
            return {
                ...state,
                scene2P: payload
            }
        case 'SET_SCENE3I':
            return {
                ...state,
                scene3I: payload
            }
        case 'SET_SCENE3P':
            return {
                ...state,
                scene3P: payload
            }
        case 'SET_SCENE4I':
            return {
                ...state,
                scene4I: payload
            }
        case 'SET_SCENE4P':
            return {
                ...state,
                scene4P: payload
            }
        case 'SET_SCENE5I':
            return {
                ...state,
                scene5I: payload
            }
        case 'SET_SCENE5P':
            return {
                ...state,
                scene5P: payload
            }
        case 'SET_PROJECT':
            return {
                ...state,
                project: payload
            }
        case 'SET_CLICKABLE':
            return {
                ...state,
                clickable: payload
            }
        case 'SET_NIGHT':
            return {
                ...state,
                night: payload
            }
        case 'SET_MODAL':
            return {
                ...state,
                modal: payload
            }

        default:
            return state
    }
}
export default utilsReducer