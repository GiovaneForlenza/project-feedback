import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {

 // return (<div className="bg-white rounded-xl p-12 text-center">
 //  <p className="text-gray-500 text-lg">No suggestions found. Add One!</p>
 // </div>)


  return (
    <div className="space-y-4 ">
      <FeedbackItem />
    </div>
  );
}

export default FeedbackList;
