export interface SubMenuItem {
  title: string;
  link?: string;
  pdf?: string;
}

export interface NavbarItem {
  id: number;
  menuName: string;
  link?: string;
  subMenu?: SubMenuItem[];
}
