export type MultilingualString = string | Record<string, string>;

export interface SourceUrlItem {
  label?: string;
  key?: string;
  value?: string;
  url?: string;
}

export interface CategoryItem {
  card_type?:
    | boolean
    | "category"
    | "banner"
    | string
    | { value: string; label: string }[];
  title?: MultilingualString;
  section_title?: MultilingualString;
  image?: string;
  url?: string;
  source_url?: string | SourceUrlItem | SourceUrlItem[];
  banner_video_url?: string;
  banner_theme?: "light" | "dark";
  flex_width?: number;
  mobile_flex_width?: number;
  flex_width_mobile?: number;
  hide_on_mobile?: boolean;
}

export interface CategoriesGridConfig {
  title?: MultilingualString;
  section_title?: MultilingualString;
  show_header?: boolean;
  heading_color?: string;
  section_bg_color?: string;
  button_text?: MultilingualString;
  button_url?: string;
  show_button?: boolean;
  button_bg_color?: string;
  button_text_color?: string;
  card_title_color?: string;
  banner_text?: MultilingualString;
  banner_video_url?: string;
  banner_image_url?: string;
  banner_theme?: "light" | "dark";
  banner_flex_width?: number;
  show_banner?: boolean;
  hide_banner_on_mobile?: boolean;
  desktop_row1_count?: number;
  mobile_columns?: number;
  mobile_layout?: string | { value: string; label: string }[];
  mobile_as_slider?: boolean;
  hide_on_desktop?: boolean;
  hide_on_mobile?: boolean;
  row_height?: number;
  block_radius?: number;
  container_width?: number | string;
  gap?: number;
  always_show_titles?: boolean;
  items?: CategoryItem[];
}
