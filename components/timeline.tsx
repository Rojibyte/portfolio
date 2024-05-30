import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

export default function TimelineElement(exp: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement visible={inView}>
        <h4 className="font-semibold">{exp.item.title}</h4>
        <p className="!mt-0 font-normal">{exp.item.location}</p>
        <p className="!mt-1 !font-normal text-zinc-700">
          {exp.item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
