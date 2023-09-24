import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {

return (
  <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
    <p>{topic.title}</p>
  </div>
);
};
export default TopicListItem;
       
