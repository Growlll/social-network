import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="Growl Earth" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Growl Earth");
  });

  test("after creation <input> should be displayed", () => {
    const component = create(<ProfileStatus status="Growl Earth" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Growl Earth" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should be with correct status", () => {
    const component = create(<ProfileStatus status="Growl Earth" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Growl Earth");
  });

  test("input should be displayed editMode instead of span", () => {
    const component = create(<ProfileStatus status="Growl Earth" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType('input')
    expect(input.props.value).toBe("Growl Earth");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="Growl Earth" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivatedEditMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});