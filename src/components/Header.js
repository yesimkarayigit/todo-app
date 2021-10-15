import React from "react";
import { connect } from 'react-redux';
import { getImage } from '../store/actions';
import moment from "moment";

const Header = (props) => {
  const placeholderImage = "https://images.unsplash.com/photo-1631878292229-f1936d871e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjc3NDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzQzMDE5NDg&ixlib=rb-1.2.1&q=80&w=1080";
  const backgroundImage = (!Object.keys(props.image).length) ? placeholderImage : props.image.urls.regular;

  const today = moment().format('LL');

  return (
    <div className="header">
      <div className="header-background">
        <img className="header-background-image" src={backgroundImage} alt="unsplash"/>
        <div className="header-text">
          <button onClick={() => props.getImage()}>Change Background</button>
          <p>Your Things</p>
          <p>{today}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    image: state.image,
  }
}

export default connect(mapStateToProps, { getImage })(Header);