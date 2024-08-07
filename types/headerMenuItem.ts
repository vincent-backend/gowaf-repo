export interface menuItem {
  title: string;
  subTitle?: string;
  icon?: string;
  key?: string;
  href?: string;
  items?: menuItem[]
}
