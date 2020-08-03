import React, { useState } from 'react';
import './Switch.sass';

interface ISwitch {
  /** List of class names separated by spaces. */
  className?: string;
  /** Text of switch description. */
  label?: string;
  /** Disabled the switch. */
  disabled?: boolean;
  /** Switch is checked. */
  checked?: boolean;
  /** Position of switch description. */
  labelPosition?: 'left' | 'right',
  /** onChange event. */
  onChange?: (value: boolean) => void;
};

const classesFromObject = (classes: any, additionalClassName?: string) => {
    const availableClasses = [
      ...Object.keys(classes).filter((cls?: string) => cls && !!classes[cls]),
      ...[additionalClassName]
    ];

    return availableClasses.join(' ');
  };

export const Switch = ({
  className: classNameProp = '',
  label,
  disabled = false,
  checked = false,
  labelPosition = 'right',
  onChange,
}: ISwitch) => {
  const [active, setActive] = useState(checked);

  const classes = {
    'Switch': true,
    'disabled': !!disabled,
    [labelPosition]: true,
  };
  const className = classesFromObject(classes, classNameProp);

  function onChangeLocal() {
    if (disabled) return;
    setActive(!active);
    if (onChange) {
      return onChange(!active);
    } else {
      return;
    }
  }

  return (
    <div className={className}>
      <div className="switch-content">
        {label && <label className="switch-label">{label}</label>}
        <label className="switch">
          <input type="checkbox" checked={active} onChange={onChangeLocal} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
