import React from "react";
import { render, fireEvent } from '@testing-library/react';
import { Switch } from "./Switch";

describe('Switch', () => {
  test('Simple render', () => {
    const { container } = render(<Switch label="This is a test" />);
    expect(container.querySelector('.Switch')).toBeInTheDocument();
  });

  test('Test not emit event on change if is disabled', async () => {
    const onChangeLocal = jest.fn();
    const { container } = render(<Switch label="This is a test" disabled={true} onChange={onChangeLocal} />);
    expect(container.querySelector('.Switch')).toBeInTheDocument();
    const switchComponent = container.querySelector('.Switch');
    const input = switchComponent?.querySelector('input');
    if (input) {
      await fireEvent.click(input);
    }
    expect(onChangeLocal).not.toHaveBeenCalled();
  });

  test('Test not emit event on change if not have onChange func', async () => {
    const onChangeLocal = jest.fn();
    const { container } = render(<Switch label="This is a test" />);
    expect(container.querySelector('.Switch')).toBeInTheDocument();
    const switchComponent = container.querySelector('.Switch');
    const input = switchComponent?.querySelector('input');
    if (input) {
      await fireEvent.click(input);
    }
    expect(onChangeLocal).not.toHaveBeenCalled();
  });

  test('Test emit event on change', async () => {
    const onChangeLocal = jest.fn();
    const { container } = render(<Switch label="This is a test" onChange={onChangeLocal} />);
    expect(container.querySelector('.Switch')).toBeInTheDocument();
    const switchComponent = container.querySelector('.Switch');
    const input = switchComponent?.querySelector('input');
    if (input) {
      await fireEvent.click(input);
    }
    expect(onChangeLocal).toHaveBeenCalled();
  });
});
