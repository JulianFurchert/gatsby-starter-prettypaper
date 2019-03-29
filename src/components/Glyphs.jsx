import React, { Component } from "react";
import styles from "./glyphs.module.scss";

class Glyphs extends Component {

  characters(){
    let {family, weight, fontstyle, characters } = this.props;
    characters = characters.split(",");
    return characters.map((character, index) => {
      return (
        <div key={character + index} className={styles.character} >
          <div
            style={{
              fontFamily: family,
              fontStyle: fontstyle,
              fontWeight: weight,
            }}
          >
          {character}
          </div>
          <div className={styles.info}>
            <div className={styles.letter}>{character}</div>
            <div className={styles.code}>{character.charCodeAt(0)}</div>
          </div>
        </div>
      )
    });
  }

  render(){
    let {family, weight, fontstyle } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.header}>{`${family} ${weight} ${fontstyle ? fontstyle : ""}`}</div>
        <div className={styles.characterContainer}>
          {this.characters()}
        </div>
      </div>
    )
  }
}

export default Glyphs;