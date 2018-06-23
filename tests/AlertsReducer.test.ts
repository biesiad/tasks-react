import { Alert } from "../src/AlertsReducer.d";
import reducer, { initialState, showAlert, hideAlert } from "../src/AlertsReducer";

test("showAlert with error type", () => {
  const alerts = reducer( initialState, showAlert("error", "This alert has no message")).alerts;
  expect(alerts.length).toBe(1);
  expect(alerts[0].type).toBe("error");
  expect(alerts[0].message).toBe("This alert has no message");
});

test("showAlert with success type", () => {
  const alerts = reducer(initialState, showAlert("success", "This alert has no message")).alerts;
  expect(alerts.length).toBe(1);
  expect(alerts[0].type).toBe("success");
  expect(alerts[0].message).toBe("This alert has no message");
});

test("hideAlert", () => {
  const alert: Alert = { id: 1, type: "error", message: "No message" };
  const alerts = reducer({ alerts: [alert] }, hideAlert(1)).alerts;
  expect(alerts.length).toBe(0);
});
