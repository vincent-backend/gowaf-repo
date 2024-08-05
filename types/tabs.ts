export type tabs = Partial<{
  tab: string;
  title: string;
  subTitle: string;
  titleTip?: string;
  content: string;
  btn: string;
  href: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
  mIcon: string;
  mIconWidth: string;
  mIconHeight: string;
  items?: {
    title: string;
    content: string;
    iconList: {
      icon: string;
      label: string;
    }[];
  }[];
}>[]
export type NumbersItem = {
  label?: string;
  label2?: string;
  content?: string;
}[]