import reducer, { initialState, addTask, deleteTask } from "../src/TasksReducer";

test("addTask adds new tasks", () => {
  let state = reducer(initialState, addTask());
  expect(state.tasks.length).toBe(1);
  expect(state.tasks[0].title).toBe("");
  expect(state.savedTasks.length).toBe(0);

  state = reducer(state, addTask());
  expect(state.tasks.length).toBe(2);
  expect(state.tasks[1].title).toBe("");
  expect(state.savedTasks.length).toBe(0);
});

test("addTask deletes tasks", () => {
  let state = {
    ...initialState,
    tasks: [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" }
    ]
  };

  state = reducer(state, deleteTask(1));
  expect(state.tasks.length).toBe(1);
  expect(state.tasks[0].title).toBe("Task 2");

  state = reducer(state, deleteTask(2));
  expect(state.tasks.length).toBe(0);
});
