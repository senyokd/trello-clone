import { CONSTANTS } from "../actions";
import { Droppable } from "react-beautiful-dnd";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    droppableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            droppableId,
            type
        }
    };
};