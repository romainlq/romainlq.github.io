import { PATHS } from "@/routes";
import { Anchor } from "@mantine/core";
import { Link as WouterLink } from 'wouter';

type LinkProps = {
  to: PATHS,
  text: string,
}

const Link = ({
  to,
  text
}: LinkProps) => {
  return (
    <Anchor component={WouterLink} to={to}>
      {text}
    </Anchor>
  );
}

export default Link;