import Logo from "@/components/Logo";
import Title from "@/components/Title";
import NavList from "@/components/header/NavList";

import HomeIcon from "@/assets/icons/home.svg";
import CommunityIcon from "@/assets/icons/community.svg";
import DiscoverIcon from "@/assets/icons/discover.svg";
import AwardsIcon from "@/assets/icons/awards.svg";
import CelebsIcon from "@/assets/icons/celebs.svg";

// Library icons
import RecentIcon from "@/assets/icons/recent.svg";
import TopRatedIcon from "@/assets/icons/top-rated.svg";
import DownloadedIcon from "@/assets/icons/downloaded.svg";

// Category icons
import TVShowIcon from "@/assets/icons/tv-show.svg";
import MovieIcon from "@/assets/icons/movie.svg";
import AnimeIcon from "@/assets/icons/anime.svg";

// General icons
import SettingsIcon from "@/assets/icons/settings.svg";
import LogoutIcon from "@/assets/icons/logout.svg";

const menuData = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon className="h-5 w-5 fill-current" />,
  },
  {
    title: "Community",
    href: "/community",
    icon: <CommunityIcon className="h-5 w-5 fill-current" />,
  },
  {
    title: "Discover",
    href: "/discover",
    icon: <DiscoverIcon className="h-5 w-5 fill-current" />,
  },
  {
    title: "Awards",
    href: "/awards",
    icon: <AwardsIcon className="h-5 w-5 fill-current" />,
  },
  {
    title: "Celebs",
    href: "/celebs",
    icon: <CelebsIcon className="h-5 w-5 fill-current" />,
  },
];

const libraryData = [
  { title: "Recent", href: "recent", icon: <RecentIcon /> },
  { title: "Top Rated", href: "top-rated", icon: <TopRatedIcon /> },
  { title: "Downloaded", href: "downloaded", icon: <DownloadedIcon /> },
];

const categoryData = [
  { title: "TV - Show", href: "tv-show", icon: <TVShowIcon /> },
  { title: "Movie", href: "movie", icon: <MovieIcon /> },
  { title: "Anime", href: "anime", icon: <AnimeIcon /> },
];

const generalData = [
  { title: "Settings", href: "settings", icon: <SettingsIcon /> },
  { title: "Logout", href: "logout", icon: <LogoutIcon /> },
];

export default function Navigation() {
  return (
    <header className="h-screen w-full bg-stone-900 pt-5">
      <Logo />
      <aside>
        <nav className="relative flex flex-col items-center">
          {/* Menu navigation */}
          <div className="text-start">
            <Title level={"h2"}>Menu</Title>
            <NavList data={menuData} />

            {/* Library navigation */}
            <Title level={"h3"}>Library</Title>
            <NavList data={libraryData} />

            {/* Category navigation */}
            <Title level={"h2"}>Category</Title>
            <NavList data={categoryData} />

            {/* General navigation */}
            <Title level={"h3"}>General</Title>
            <NavList data={generalData} />
          </div>
        </nav>
      </aside>
    </header>
  );
}
