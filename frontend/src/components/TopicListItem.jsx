import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ topic }) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
