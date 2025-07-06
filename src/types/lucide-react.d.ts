declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = (props: LucideProps) => JSX.Element;

  export const Bell: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Upload: LucideIcon;
  export const Calendar: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Users: LucideIcon;
    export const User: LucideIcon;
  export const FileText: LucideIcon;
  export const Shield: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Search: LucideIcon;
  export const Filter: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Clock: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const XCircle: LucideIcon;
  export const Eye: LucideIcon;
  export const Download: LucideIcon;
  export const Edit: LucideIcon;
  export const Trash2: LucideIcon;
  export const Plus: LucideIcon;
  export const Star: LucideIcon;
  export const Zap: LucideIcon;
  export const Target: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const Activity: LucideIcon;
  export const Briefcase: LucideIcon;
  export const DollarSign: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Settings: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const LogOut: LucideIcon;

  // 🔄 Newly added icons
  export const PieChart: LucideIcon;
  export const GitMerge: LucideIcon;
  export const Layers: LucideIcon;
  export const FilePlus: LucideIcon;
  export const FileCheck: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const FileSearch: LucideIcon;
}
