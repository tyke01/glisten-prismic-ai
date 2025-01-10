import WordMark from "@/components/wordMark";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer>
      <WordMark />
      <nav>
        <ul>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
