import React from 'react';
import Lightbox from 'react-images';
import Scrollbar from 'smooth-scrollbar';
import ReactDOM from 'react-dom';

export default class Viewer extends React.Component{
  state = {
    lightboxIsOpen: false,
    currentImage: 0,
    isDown: false,
    isMoving: false,
    startX: 0,
    scrollLeft: 0,
  };

  openLightbox = (index, event) =>{
    if (this.state.isMoving) {
      event.preventDefault();
      this.setState({
        isMoving: false,
      });
    }
    else {
      event.preventDefault();
      this.setState({
        currentImage: index,
        lightboxIsOpen: true,
      });
    }
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage = (index) => {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  componentDidMount() {
    const scrollbar = Scrollbar.init(document.querySelector(this.props.carouselId),
      {
        alwaysShowTracks: false,
      });
    this.scrollbar = scrollbar;

    const carousel = ReactDOM.findDOMNode(this);

    carousel.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.setState({
        isDown: true,
        startX: e.pageX - carousel.offsetLeft,
        scrollLeft: scrollbar.scrollLeft,
      });
    });

    carousel.addEventListener('mouseleave', () => {
      this.setState({
        isDown: false,
      });
    });
    carousel.addEventListener('mouseup', () => {
      this.setState({
        isDown: false,
      });
    });
    carousel.addEventListener('mousemove', (e) => {
      if (!this.state.isDown) {
        return;  // stop the fn from running
      }
      this.setState({
        isMoving: true,
      });
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - this.state.startX) * 3;
      scrollbar.scrollTo(this.state.scrollLeft - walk, 0, 600);
    });

  }

  renderGallery () {
    const {
      images
    } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <div
          key={i}
          className="gaming_carousel_object"
          onLoad={()=>this.scrollbar.update()}
          onClick={(e)=> this.openLightbox(i,e)}
        >
          <img
            src={obj.src}
            className="gaming_carousel_image"
            alt="gaming screenshot"
          />
        </div>
      );
    });

    return gallery;
  }


  render(){

    return (
      <div className="gaming_carousel__wrapper">
        <div className="gaming_carousel__container" id={this.props.carouselId.slice(1)}>
          {this.renderGallery()}
          <Lightbox
            currentImage={this.state.currentImage}
            images={this.props.images}
            isOpen={this.state.lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
            showThumbnails={this.props.showThumbnails}
            theme={this.props.theme}
            backdropClosesModal={true}
          />
        </div>
        <div className="indicators">
          <div>&lsaquo;</div>
          <div>&rsaquo;</div>
        </div>
      </div>
    );
  }
}
