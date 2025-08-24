import Text from "@/ui/Text";

export const getSectionText = (
  section: string | string[],
  size: "sm" | "lg" | "base" | "xl" = "lg"
) => {
  if (typeof section === "string") {
    return section;
  }
  return section.map((text: string, index: number) => (
    <Text key={index} size={size} color="muted">
      {text}
    </Text>
  ));
};
