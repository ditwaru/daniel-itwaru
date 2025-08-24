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
    <div>
      <Section>
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
              <Fragment key={`${section.type}-${section.title}`}>
                <Heading
                  key={`${section.type}-${section.title}`}
                  level={2}
                  size="lg"
                  className="my-6"
                >
                  {section.title}
                </Heading>
                <div className="flex flex-col gap-4">{getSectionText(section.text)}</div>
              </Fragment>
            );
          }
        })}
        <ButtonLink href="/portfolio" size="lg" className="mt-6">
          View My Work
        </ButtonLink>
      </Section>
    </div>
  );
}
