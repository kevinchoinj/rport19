import React from 'react';
import Lightbox from 'react-images';
import Scrollbar from 'smooth-scrollbar';

export default class Viewer extends React.Component{
  constructor () {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
  }
  openLightbox = (index, event) =>{
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
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

  imagehover = () => {
    this.setState({
      hover:true
    });
  }

  componentDidMount() {
    const scrollbar = Scrollbar.init(document.querySelector(this.props.carouselId),
      {alwaysShowTracks: true});
    this.scrollbar = scrollbar;
  }

  renderGallery () {
    const {
      images
    } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <div key={i} className="gaming_carousel_object" onLoad={()=>this.scrollbar.update()}>
          <a
            href={obj.src}
            onClick={(e)=>this.openLightbox(i,e)}
          >
            <img
              src={obj.src}
              className="gaming_carousel_image"
              alt="gaming screenshot"
            />
          </a>
        </div>
      );
    });

    return gallery;
  }


  render(){

    return (
      <div className="gaming_carousel_wrapper" id={this.props.carouselId.slice(1)}>
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
    );
  }
}
