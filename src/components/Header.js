import React from "react";
import { connect } from 'react-redux';
import { getImage } from '../store/actions';

const Header = (props) => {
  const placeholderImage = "https://images.unsplash.com/photo-1631878292229-f1936d871e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjc3NDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzQzMDE5NDg&ixlib=rb-1.2.1&q=80&w=1080";
  const backgroundImage = (!Object.keys(props.image).length) ? placeholderImage : props.image.urls.regular;

  return (
    <div className="header-container">
      <div className="header-background">
        <button onClick={() => props.getImage()}>Change Background</button>
        <div className="background-cover" style={{ background: `url(${backgroundImage})` }}>
          <p>Just A Todo List</p>
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