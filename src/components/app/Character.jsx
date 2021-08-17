import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Character({ image, name }){
  return <Image src={image} alt={name}/>;
}

const Image = styled.img`
max-width: 250px;
border-radius: 10px;
`;

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
