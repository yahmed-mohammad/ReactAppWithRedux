import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            /* State . length gives the next id based on current length */
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            /**
             * Concat is immutable method, which does not change the current state
             * It creates the new state and returns that
             */
            return { ...state, comments: state.comments.concat(comment)};
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
         
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
          return state;
      }
};