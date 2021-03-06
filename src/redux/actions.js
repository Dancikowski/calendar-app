import { createAction } from "./utils";

export const ActionTypes = {
	SET_DATE: "SET_DATE",
	ADD_TASK: "ADD_TASK",
	UPDATE_TASK: "UPDATE_TASK",
	UI_OPEN_MODAL: "UI_OPEN_MODAL",
	UI_HIDE_MODAL: "UI_HIDE_MODAL",
};

export const ActionCreators = {
	setDate: (newDate) => createAction(ActionTypes.SET_DATE, { ...newDate }),
	addTask: (newTask) => createAction(ActionTypes.ADD_TASK, { ...newTask }),
	updateTask: (task) => createAction(ActionTypes.UPDATE_TASK, { ...task }),
	openModal: () => createAction(ActionTypes.UI_OPEN_MODAL),
	hideModal: () => createAction(ActionTypes.UI_HIDE_MODAL)
};

export const setDate = newDate => dispatch => {
	dispatch(ActionCreators.setDate(newDate))
	dispatch(ActionCreators.hideModal())
}

export const addTask = newTask => dispatch => {
	dispatch(ActionCreators.addTask(newTask))
	dispatch(ActionCreators.hideModal());
}

export const updateTask = newTask => dispatch => {
	dispatch(ActionCreators.updateTask(newTask))
	dispatch(ActionCreators.hideModal());
}
