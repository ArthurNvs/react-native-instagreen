import { ADD_POST } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: '@gesonel',
        email: 'mestredosdisfarces@gesonel.ccom',
        image: require('../../../assets/imgs/flower2.jpg'),
        comments: [{
            nickname: '@feijao',
            comment: 'belezura sô!',
        }, {
            nickname: '@coolfella',
            comment: 'Apreciando...'
        }]
    }, {
        id: Math.random(),
        nickname: '@watermelonsugar',
        email: 'wms@gmail.com',
        image: require('../../../assets/imgs/mojave.jpg'),
        comments: []
    }, {
        id: Math.random(),
        nickname: '@anx',
        email: 'arthurnx@gmail.com',
        image: require('../../../assets/imgs/abss.jpg'),
        comments: [{
            nickname: '@anx',
            comment: 'minha arte moderna digital!',
        }]
    }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}