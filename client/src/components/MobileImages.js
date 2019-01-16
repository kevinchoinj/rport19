import React from 'react';
import LoadIn from 'components/LoadIn';

const CardObject = ({loadDelay, image, isVisible, selectedCard, setSelected, cardNumber}) => {
  const cardOffsets = [
    {0: '4px', 1: '2px', 2: '-4px'},
    {0: '0px', 1: '4px', 2: '0px'},
    {0: '-4px', 1: '0px', 2: '4px'},
  ];
  const offsetStyle = {
    transform: 'translateY('+cardOffsets[cardNumber][selectedCard]+')',
  };
  return (
    <div className="mobile_images_column" onMouseEnter={()=>setSelected(cardNumber)}>
      <LoadIn
        isVisible = {isVisible}
        loadDelay={loadDelay}
      >
        <img
          style={offsetStyle}
          src={image}
          className="project_fillimage"
          alt=''
        />
      </LoadIn>
    </div>
  );
};


export default class MobileImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: 0,
    };
  }

  setSelected = (cardNumber) => {
    this.setState({
      selectedCard: cardNumber,
    });
  }
  render() {

    let {
      selectedCard,
    } = this.state;

    const {
      isVisible,
      image1,
      image2,
      image3
    } = this.props;

    return (
      <div className="mobile_images__wrapper">
        <div className="mobile_images__container">
          <CardObject
            selectedCard={selectedCard}
            setSelected={this.setSelected}
            cardNumber = {0}
            isVisible={isVisible}
            loadDelay="0s"
            image={image1}
          />
          <CardObject
            selectedCard={selectedCard}
            setSelected={this.setSelected}
            cardNumber = {1}
            isVisible={isVisible}
            loadDelay=".2s"
            image={image2}
          />
          <CardObject
            selectedCard={selectedCard}
            setSelected={this.setSelected}
            cardNumber = {2}
            isVisible={isVisible}
            loadDelay=".4s"
            image={image3}
          />
        </div>
      </div>
    );
  }
}
