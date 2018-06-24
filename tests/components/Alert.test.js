import * as React from 'react';
import * as Enzyme from "enzyme";

import Alert from "../../src/components/Alert";

test("Alert close", () => {
  const alert = { id: 1, type: "error", message: "This is alert 1", };
  const onHide = jest.fn();
  const wrapper = Enzyme.shallow(<Alert alert={alert} onHide={onHide} />);

  wrapper.find(".alert-close").simulate("click");
  expect(onHide).toHaveBeenCalled();
});
