export interface InfoItem {
  label: string;
  value: string;
}

export interface ListSectionProps {
  title: string;
  items: string[];
}

export interface NavbarItem {
    label: string;
    isButton: boolean;
    hasDropdown: boolean; 
}