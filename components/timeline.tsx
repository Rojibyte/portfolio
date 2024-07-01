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
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.05",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={exp.item.date}
        icon={exp.item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h4 className="font-semibold capitalize">{exp.item.title}</h4>
        <p className="!mt-0 font-normal">{exp.item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700">
          {exp.item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
}
