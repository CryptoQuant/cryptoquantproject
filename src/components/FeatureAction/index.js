import React from 'react';
import PropTypes from 'prop-types';

function FeatureAction(props) {
  const {
    actionLabel,
    description,
    image,
    title,
  } = props;
  return (
    <div className="action">
      <div className="action__img">
        <img src={image} alt={title} />
      </div>
      <div className="action__title">
        {title}
      </div>
      <div className="action__description" >
        {description}
      </div>
      <button className="primary">
        <span>{actionLabel}</span> <i className="fas fa-arrow-right" />
      </button>
    </div>
  );
}

FeatureAction.propTypes = {
  actionLabel: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeatureAction;
