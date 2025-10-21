import MenuSection from "../components/online-menu/MenuSection";
import MenuHero from "../components/online-menu/MenuHero";
import MenuBottom from "../components/online-menu/MenuBottom";
import { soups, mains, desserts } from "../data/online-menu";
import "../components/online-menu/OnlineMenu.css";

const OnlineMenu = () => {
  return (
    <main className="menu-page" role="main" aria-label="Online menu page">
      <MenuHero />

      <MenuSection title="Soups" items={soups} aria-label="Soups section" />
      <MenuSection
        title="Main Dishes"
        items={mains}
        aria-label="Main dishes section"
      />
      <MenuSection
        title="Desserts"
        items={desserts}
        aria-label="Desserts section"
      />

      <MenuBottom />
    </main>
  );
};

export default OnlineMenu;
