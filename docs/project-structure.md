# Project Structure

The repository is organized by component categories.

```
UI-components/
│
├── .gitignore
├── LICENSE
├── README.md
│
├── docs/
│
├── public/
│
└── src/
    │
    ├── components/
    │   │
    │   ├── primitives/
    │   │   │
    │   │   ├── Button/
    │   │   ├── IconButton/
    │   │   ├── Input/
    │   │   ├── Textarea/
    │   │   ├── Label/
    │   │   ├── Badge/
    │   │   ├── Avatar/
    │   │   ├── Spinner/
    │   │   ├── Skeleton/
    │   │   ├── Divider/
    │   │   ├── Progress/
    │   │   └── Icon/
    │   │
    │   ├── forms/
    │   │   ├── Checkbox/
    │   │   ├── Radio/
    │   │   ├── Switch/
    │   │   ├── Select/
    │   │   ├── MultiSelect/
    │   │   ├── Combobox/
    │   │   ├── Slider/
    │   │   ├── RangeSlider/
    │   │   ├── ColorPicker/
    │   │   ├── DatePicker/
    │   │   ├── TimePicker/
    │   │   ├── OTPInput/
    │   │   ├── FileUpload/
    │   │   └── Form/
    │   │
    │   ├── overlays/
    │   │   ├── Modal/
    │   │   ├── Drawer/
    │   │   ├── Dialog/
    │   │   ├── Popover/
    │   │   ├── Tooltip/
    │   │   ├── HoverCard/
    │   │   ├── ContextMenu/
    │   │   └── Toast/
    │   │
    │   ├── navigation/
    │   │   ├── Navbar/
    │   │   ├── Sidebar/
    │   │   ├── Breadcrumb/
    │   │   ├── Pagination/
    │   │   ├── Tabs/
    │   │   ├── Stepper/
    │   │   ├── Menu/
    │   │   └── CommandPalette/
    │   │
    │   ├── feedback/
    │   │   ├── Alert/
    │   │   ├── Notification/
    │   │   ├── EmptyState/
    │   │   ├── ErrorBoundary/
    │   │   ├── LoadingOverlay/
    │   │   └── Result/
    │   │
    │   ├── display/
    │   │   ├── Card/
    │   │   ├── Accordion/
    │   │   ├── Carousel/
    │   │   ├── Timeline/
    │   │   ├── Table/
    │   │   ├── DataGrid/
    │   │   ├── List/
    │   │   ├── TreeView/
    │   │   ├── Statistic/
    │   │   └── Tag/
    │   │
    │   ├── media/
    │   │   ├── Image/
    │   │   ├── AvatarGroup/
    │   │   ├── Gallery/
    │   │   ├── VideoPlayer/
    │   │   └── FilePreview/
    │   │
    │   ├── layout/
    │   │   ├── Container/
    │   │   ├── Grid/
    │   │   ├── Stack/
    │   │   ├── Flex/
    │   │   ├── SplitPane/
    │   │   ├── Masonry/
    │   │   └── AspectRatio/
    │   │
    │   ├── charts/
    │   │   ├── LineChart/
    │   │   ├── BarChart/
    │   │   ├── PieChart/
    │   │   └── Sparkline/
    │   │
    │   └── templates/
    │       ├── LoginForm/
    │       ├── RegisterForm/
    │       ├── PricingCard/
    │       ├── ProductCard/
    │       ├── DashboardHeader/
    │       ├── SearchBar/
    │       └── UserMenu/
    │
    ├── hooks/
    │   ├── useClickOutside/
    │   ├── useClipboard/
    │   ├── useDebounce/
    │   ├── useDisclosure/
    │   ├── useHover/
    │   ├── useIntersectionObserver/
    │   ├── useLocalStorage/
    │   ├── useMediaQuery/
    │   ├── useOnScreen/
    │   ├── useScrollLock/
    │   ├── useTheme/
    │   ├── useToggle/
    │   └── useWindowSize/
    │
    ├── icons/
    │
    ├── styles/
    │
    ├── types/
    │
    ├── utils/
    │
    └── showcase/
---

## Primitives

Small reusable UI elements.

Examples:

- Button
- Input
- Badge
- Avatar

---

## Forms

Interactive form controls.

Examples:

- Checkbox
- Select
- Slider
- Form

---

## Navigation

Navigation-related components.

Examples:

- Navbar
- Sidebar
- Breadcrumb
- Pagination

---

## Feedback

Components used to communicate status to the user.

Examples:

- Alert
- Toast
- Notification

---

## Display

Components used to display information.

Examples:

- Card
- Table
- Timeline
- Accordion

---

## Media

Media-related components.

Examples:

- Gallery
- Avatar Group
- Video Player

---

## Layout

Layout helper components.

Examples:

- Grid
- Flex
- Stack
- Container

---

## Charts

Data visualization components.

Examples:

- Line Chart
- Bar Chart
- Pie Chart

---

## Templates

Reusable compositions built from multiple components.

Examples:

- Login Form
- Register Form
- Pricing Card
- Dashboard Header

---

Every component should include:

```
component-name/
│
├── img/
├── index.html
├── style.css
└── README.md
```