import PropTypes from "prop-types";

function BtnProyect({ classes, title, onClick, active  }) {
    const classBtn = `${classes} ${active ? 'showBtn' : ''}`;

    return (
        <button type="button" className={classBtn} onClick={onClick}>
          {title}
        </button>
      );
    }
    
    BtnProyect.propTypes = {
      classes: PropTypes.string,
      title: PropTypes.string,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    };
    
    export default BtnProyect;