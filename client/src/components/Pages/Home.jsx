import React from "react";
import CategoryGrid from '../CategoryGrid'
import JokesGrid from '../JokesGrid';
import Button from "../Button";
import Spinner from "../Spinner";

const Home = () => {
  
  return (
    <div>
      <CategoryGrid />
      <hr id="hr"/>
      <JokesGrid />
      <Button text={`Load More`} />
    </div>
  )
}

export default Home