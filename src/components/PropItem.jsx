import React, {Component} from "react";
import copy from 'copy-to-clipboard';
import cx from "classnames";
import Tooltip from 'rc-tooltip';

import styles from "./propItem.module.scss";
import './tooltip.scss';

class ValueWithTooltip extends Component {
  constructor(props){
    super(props);
    this.copyValue = this.copyValue.bind(this);
    this.tooltipClose = this.tooltipClose.bind(this);
    this.state = { text: "Copy" };
  }

  copyValue(){
    copy(this.props.value);
    this.setState({text: "Copied"})
  }

  tooltipClose(e){
    this.setState({text: "Copy"})
  }

  render (){
    let {value, valueClass, placement, color} = this.props;
    return(
      <Tooltip
        placement={placement ? placement : "bottom"}
        trigger={['hover']}
        overlay={<span>{this.state.text}</span>}
        destroyTooltipOnHide
        afterVisibleChange={this.tooltipClose}
        overlayClassName={color}
      >
      <div className={valueClass} onClick={this.copyValue}>
        {value}
      </div>
    </Tooltip>
    )
  }
}

class PropItem extends Component {
  render(){
    let {tooltip, value, color, copyValue, row} = this.props;

    let valueClass = cx(styles.value, {
      [styles.valueWhite]: color === "white",
      [styles.valueHover]: copyValue,
    })

    let labelClass = cx(styles.label, {
      [styles.labelWhite]: color === "white"
    })

    let propItemClass = cx(styles.propItem, {
      [styles.propItemRow]: row
    })

    return (
      <div className={propItemClass}>
        <div className={labelClass} > {this.props.label} </div>
        {
          this.props.copyValue ?
          <ValueWithTooltip
            valueClass={valueClass}
            placement={tooltip}
            value={value}
            color={color}
          />
          : <div className={valueClass}>{this.props.value}</div>
        }
      </div>
    )
  }

}

export default PropItem;