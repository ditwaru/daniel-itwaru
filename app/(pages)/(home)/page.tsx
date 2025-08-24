import ButtonLink from "@/ui/Button";
import Hero from "@/ui/Hero";
import { getPage } from "ditwaru-aws-helpers";

export default async function Home() {
  const data = await getPage("daniel-itwaru", "home");

  const { title, text } = data!.sections[0];

  return (
    <Hero title={title} description={text} variant="blue" fullHeight={true}>
      <ButtonLink size="lg" href="/portfolio">
        View Portfolio
      </ButtonLink>
      <ButtonLink variant="outline" size="lg" href="/about">
        About Me
      </ButtonLink>
    </Hero>
  );
}
