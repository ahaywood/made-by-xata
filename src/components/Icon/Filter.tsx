interface FilterProps {
  height?: number;
  width?: number;
}

const Filter = ({ height = 24, width = 24 }: FilterProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="filterIcon"
  >
    <title>Filter</title>
    <path d="M10.5068 21C10.3568 21 10.2068 20.925 10.1318 20.925C9.90676 20.775 9.75676 20.475 9.75676 20.25V13.725L3.15676 4.2C3.00676 3.975 2.93176 3.675 3.08176 3.375C3.23176 3.15 3.45676 3 3.75676 3H20.2568C20.5568 3 20.7818 3.15 20.9318 3.375C21.0818 3.6 21.0068 3.9 20.8568 4.125L14.2568 13.725V18.75C14.2568 19.05 14.1068 19.275 13.8068 19.425L10.8068 20.925C10.7318 21 10.6568 21 10.5068 21ZM5.18176 4.5L11.1068 13.05C11.1818 13.2 11.2568 13.35 11.2568 13.5V19.05L12.7568 18.3V13.5C12.7568 13.35 12.8318 13.2 12.9068 13.05L18.8318 4.5H5.18176Z" />
  </svg>
);

export { Filter };
