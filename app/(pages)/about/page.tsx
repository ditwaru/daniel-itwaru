import Hero from "@/ui/Hero";
import Section from "@/ui/Section";
import Heading from "@/ui/Heading";
import ButtonLink from "@/ui/Button";
import { getPage } from "ditwaru-aws-helpers";
import { Fragment } from "react";
import { getSectionText } from "@/lib/utils";

export default async function About() {
  const data = await getPage("daniel-itwaru", "about");

  return (
    <div className="flex flex-col flex-1">
      {data?.sections.map((section) => {
        if (section.type === "hero") {
          return (
            <Hero
              key={`${section.type}-${section.title}`}
              title={section.title}
              description={section.text}
              variant="green"
            />
          );
        }
        if (section.type === "content") {
          return (
            <Section key={`${section.type}-${section.title}`} className="flex flex-1">
              <Heading level={2} size="lg" className="my-6">
                {section.title}
              </Heading>
              <div className="">{getSectionText(section.text)}</div>
            </Section>
          );
        }
      })}
      <Section>
        <ButtonLink href="/portfolio" size="lg">
          View My Work
        </ButtonLink>
      </Section>
    </div>
  );
}
