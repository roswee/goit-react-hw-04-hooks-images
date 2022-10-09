import { Component } from "react";
import styles from "./Button.module.css"

const {button, loadMore_div} = styles;

export class Button extends Component {
    render() {
      const { loadMore } = this.props;
      return (
        <div className={loadMore_div}>
        <button type="button" onClick={loadMore} className={button}>
          Load more
        </button>
        </div>
      );
    }
  };

  export default Button