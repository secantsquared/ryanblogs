import { PageType, RobotsContent, MetaTags } from '../interfaces/meta-tags';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: MetaTags = {
  canonical: 'ryanboriswrites.codes',
  description: 'Bloggin the night away',
  image: 'https://ryanboriswrites.codes/logo.png',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'RB Blogs Sometimes',
  type: PageType.website
};
