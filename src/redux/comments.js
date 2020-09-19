import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            /* State . length gives the next id based on current length */
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            /**
             * Concat is immutable method, which does not change the current state
             * It creates the new state and returns that
             */
            return state.concat(comment);

        default:
          return state;
      }
};